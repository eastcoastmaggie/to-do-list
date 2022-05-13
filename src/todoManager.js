import { storageManager } from './storage';
// define which fields to stringify
const replacer = ['name', 'description', 'dueDate', 'project', 'priority', 'status'];

// creates a row/card for a task
const drawTodo = function (todos, index, projects) {
    let todo = todos[index];
    let priorities = ['low', 'medium', 'high'];
    let entry = document.createElement('div');
    let row = document.createElement('div');
    let name = document.createElement('div');
    let detailButton = document.createElement('button');
    let dueDate = document.createElement('div');
    let status = document.createElement('input');
    let priority = document.createElement('div');
    let detail = document.createElement('div');
    let project = document.createElement('select');
    let saveButton = document.createElement('button');
    let closeButton = document.createElement('button');
    let prioritySelection = document.createElement('div');
    let deleteButton = document.createElement('button');

    // create priority radio selector
    for (let level in priorities){
        let radioLevel = document.createElement('input');
        let radioLabel = document.createElement('label');
        radioLevel.setAttribute('type', 'radio');
        radioLevel.setAttribute('name', `priorities-${(todo.getName()).replace(' ', '-')}`);
        radioLevel.setAttribute('id', `${(todo.getName()).replace(' ', '-')}-${priorities[level]}`);
        radioLevel.setAttribute('value', `${priorities[level]}`);
        radioLabel.textContent = priorities[level];
        radioLabel.setAttribute('for', `${(todo.getName()).replace(' ', '-')}-${priorities[level]}`);
        if (priorities[level]  == todo.getPriority()){
            radioLevel.checked = true;
        }
        prioritySelection.appendChild(radioLevel);
        prioritySelection.appendChild(radioLabel);
    }

    entry.classList.add('card');
    row.classList.add('row');
    name.classList.add('title');
    dueDate.classList.add('due');
    detailButton.classList.add('detail-button');
    saveButton.classList.add('save-button');
    closeButton.classList.add('close-button');
    status.classList.add('status');
    detail.classList.add('details');
    project.classList.add('project');
    deleteButton.classList.add('delete-button');
   
    // give each card a unique dataset, remove spaces
    entry.dataset.todo = todo.getName().replace(' ', '-');
    
    status.setAttribute('type', 'checkbox');
    
    if(todo.getStatus() == 'done'){
        status.checked = true;
    } else {
        status.checked = false;
    }

    name.textContent = todo.getName();
    detailButton.textContent = 'Details'; 
    dueDate.textContent = todo.getDueDate().toLocaleDateString('en-ca', { month:"short", day:"numeric"});
    saveButton.textContent = 'Save';
    closeButton.textContent = 'x';
    deleteButton.textContent = 'delete';
    detail.textContent = todo.getDescription();
    
    // add select options to project
    for (let item in projects){
        const option = document.createElement('option');
        const optionText = document.createTextNode (projects[item].getName());
        option.appendChild(optionText);
        option.setAttribute('value', projects[item].getName());

        if (todo.getProject() == projects[item].getName()){
            option.selected = true;
        } 
        project.appendChild(option);
    }


    // add class used to colour the lefthand side according to priority
    priority.classList.add(todo.getPriority());
    priority.classList.add('priority');
    prioritySelection.classList.add('radio-toolbar');

    detailButton.addEventListener('click', function() { expandDetails(detailButton.parentElement.parentElement, index, todos)});
    status.addEventListener('click', function() { 
        updateStatus(todo, status);
        storageManager('todos', todos, replacer, 'set');
    });

    closeButton.addEventListener('click', function() { closeDetails(closeButton.parentElement)});

    deleteButton.addEventListener('click', function() {
        todos.splice(index, 1);
        deleteButton.parentElement.parentElement.remove();
        storageManager('todos', todos, replacer, 'set');
    });

    row.appendChild(priority);
    entry.appendChild(status);
    entry.appendChild(name);
    entry.appendChild(detailButton);
    entry.appendChild(dueDate);
    entry.appendChild(detail);
    entry.appendChild(project);
    entry.appendChild(prioritySelection);
    entry.appendChild(saveButton);
    entry.appendChild(deleteButton);
    row.appendChild(entry);    
    row.appendChild(closeButton);
    updateStatus(todo, status);
    return row;
};

// expands the card for editing
const expandDetails = function(row, index, todos){
    const todo = todos[index];
    const title = row.querySelector('.title');
    const details = row.querySelector('.details');
    const dueDate = row.querySelector('.due');
    const saveButton = row.querySelector('.save-button');
    row.classList.add('expanded');

    title.addEventListener('click', function(e) {editField(e, 'text')});
    details.addEventListener('click', function(e) {editField(e, 'text')});
    dueDate.addEventListener('click', function(e) {editField(e, 'date')});
    saveButton.addEventListener('click', function(){
        save(row, index, todos);
        storageManager('todos', todos, replacer, 'set');
    })
};

// activate field for editing, use switch to handle different input types
const editField = function (event, type){
    
    const target = event.currentTarget;
    const classes = target.classList;
    let inputField = document.createElement('input');
    inputField.classList.add(classes);  
    switch (type){
        case 'text':{
            inputField.setAttribute('type', 'text');
            inputField.setAttribute('value', target.textContent);
            inputField.addEventListener('keypress', function(e){setNewValue(e, classes, type)});
            inputField.addEventListener('focusout', function(e){setNewValue(e, classes, type)});
            setTimeout(function(){ inputField.selectionStart = inputField.selectionEnd = 10000; }, 0);
            }
            break;
        case 'date':{
            let dueString = new Date(target.textContent + ' ' + new Date().getFullYear()).toLocaleDateString('en-CA');
            inputField.setAttribute('type', 'date');
            inputField.setAttribute('value', dueString);
            inputField.setAttribute('id', 'due');
            inputField.addEventListener('keypress', function(e){setNewValue(e, classes, type)});
            inputField.addEventListener('focusout', function(e){setNewValue(e, classes, type)});
            }
            break;
        case 'dropdown':
            inputField = document.createElement('input');
            break;
        default:
            console.log('done');
    }

   target.parentElement.replaceChild(inputField, target);
    
    inputField.focus();
};
// updates status if checked/unchecked
const updateStatus = function (todo, status){
    let checked = status.checked;
    let parent = status.parentElement;
    let button = parent.querySelector('.detail-button');

    if (checked){
        todo.setStatus('done');
        parent.classList.add('done');
        button.disabled = true;
    } else {
        todo.setStatus('open');
        parent.classList.remove('done');
        button.disabled = false;

    }
};

// returns expanded card to a single line without saving
const closeDetails = function(row){
    row.classList.remove('expanded');
    let title = row.querySelector('.title');
    title.removeEventListener('click', editField);
};

// removes input field and updates disply value, doesn't save.
const setNewValue = function (event, classes, type){
    let target = event.currentTarget;

    if (event.key === 'Enter'){
        target.blur();
        
    } else if (event.type === 'focusout'){
        let el = document.createElement('div');
        switch (type){
            case 'text':
                el.textContent = target.value;
                break;
            case 'date':{
                let selectedDate = new Date(target.value);
                selectedDate.setDate(selectedDate.getUTCDate());
                el.textContent = selectedDate.toLocaleDateString('en-ca', { month:"short", day:"numeric"});      
                break;
            }
            default:
                console.log('error');
            }
        el.classList.add(classes);
        el.addEventListener('click', function(e){editField(e, type)});

        target.parentElement.replaceChild(el, target);

    }
};
// save changes to the todos array for item at index
const save = function (row, index, todos){
    let todo = todos[index];
    let priorities = ['low', 'medium', 'high'];
    let previousName = todo.getName().replace(' ', '-');
    
    todo.setName(row.querySelector('div > .title').textContent);
    todo.setDescription(row.querySelector('div > .details').textContent);
    todo.setDueDate(new Date(row.querySelector('.due').textContent).setFullYear(new Date().getFullYear()));
    const card = row.querySelector('.card');
    card.dataset.todo = todo.getName().replace(' ', '-');

    const statusInput = row.querySelector('div > .status');
    if(statusInput.checked === true){
        todo.setStatus('done');
    } else {
        todo.setStatus('open');
    }
    const priorityInput = row.querySelector(`[name = priorities-${previousName.replace(' ', '-')}]:checked`); 
    todo.setPriority(priorityInput.value);
    const projectInput = row.querySelector('.project');
    todo.setProject(projectInput[projectInput.selectedIndex].value);
    
    row.classList.remove('expanded');
    const prioritySelection = card.querySelector('.radio-toolbar')
    while (prioritySelection.firstChild) {
        prioritySelection.removeChild(prioritySelection.lastChild);
    }
    for (let level in priorities){
        let radioLevel = document.createElement('input');
        let radioLabel = document.createElement('label');
        radioLevel.setAttribute('type', 'radio');
        radioLevel.setAttribute('name', `priorities-${(todo.getName()).replace(' ', '-')}`);
        radioLevel.setAttribute('id', `${(todo.getName()).replace(' ', '-')}-${priorities[level]}`);
        radioLevel.setAttribute('value', `${priorities[level]}`);
        radioLabel.textContent = priorities[level];
        radioLabel.setAttribute('for', `${(todo.getName()).replace(' ', '-')}-${priorities[level]}`);
        if (priorities[level]  == todo.getPriority()){
            radioLevel.checked = true;
        }
        prioritySelection.appendChild(radioLevel);
        prioritySelection.appendChild(radioLabel);
    }

};

export { drawTodo };
