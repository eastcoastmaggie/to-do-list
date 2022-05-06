
const drawToDo = function (todo, projects) {
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

    for (let level in priorities){
        let radioLevel = document.createElement('input');
        let radioLabel = document.createElement('label');
        radioLevel.setAttribute('type', 'radio');
        radioLevel.setAttribute('name', `priorities-${todo.getName()}`);
        radioLevel.setAttribute('id', `${todo.getName()}-${priorities[level]}`);
        radioLevel.setAttribute('value', `${priorities[level]}`);
        radioLabel.textContent = priorities[level];
        radioLabel.setAttribute('for', `${todo.getName()}-${priorities[level]}`);
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
   
    entry.dataset.todo = todo.getName();
    
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
    detail.textContent = todo.getDescription();
    // add select options to project and

    for (let item in projects){
        const option = document.createElement('option');
        const optionText = document.createTextNode (projects[item].getName());
        option.appendChild(optionText);
        option.setAttribute('value', projects[item].getName());

        if (todo.getProject().getName() == projects[item].getName()){
            option.selected = true;
        } 
        project.appendChild(option);
    }


    // add class used to colour the lefthand side according to priority
    priority.classList.add(todo.getPriority());
    priority.classList.add('priority');
    prioritySelection.classList.add('radio-toolbar');

    detailButton.addEventListener('click', function() { expandDetails(detailButton.parentElement.parentElement, todo)});
    status.addEventListener('click', function() { updateStatus(todo, status)})

    closeButton.addEventListener('click', function() { closeDetails(closeButton.parentElement)})

    row.appendChild(priority);
    entry.appendChild(status);
    entry.appendChild(name);
    entry.appendChild(detailButton);
    entry.appendChild(dueDate);
    entry.appendChild(detail);
    entry.appendChild(project);
    entry.appendChild(prioritySelection);
    entry.appendChild(saveButton);
    row.appendChild(entry);    
    row.appendChild(closeButton);

    return row;
} 
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
}
const editField = function (event, type){
    
    let target = event.currentTarget;
    let classes = target.classList;

    let inputField = document.createElement('input');
    inputField.classList.add(classes);
   
    switch (type){
        case 'text':
            inputField.setAttribute('type', 'text');
            inputField.setAttribute('value', target.textContent);
            inputField.addEventListener('keypress', function(e){setNewValue(e, classes, type)});
            inputField.addEventListener('focusout', function(e){setNewValue(e, classes, type)}, false);

            setTimeout(function(){ inputField.selectionStart = inputField.selectionEnd = 10000; }, 0);
            break;
        case 'date':
            let dueString = new Date(target.textContent + ' ' + new Date().getFullYear()).toLocaleDateString('en-CA');
            inputField.setAttribute('type', 'date');
            inputField.setAttribute('value', dueString);
            inputField.setAttribute('id', 'due');
            inputField.addEventListener('keypress', function(e){setNewValue(e, classes, type)});
            inputField.addEventListener('focusout', function(e){setNewValue(e, classes, type)});
            break;
        case 'dropdown':
            let inputField = document.createElement('input');
            braek;
        default:
            console.log('done');
    }

    event.currentTarget.parentElement.replaceChild(inputField, event.currentTarget);
    
    inputField.focus();
}
const expandDetails = function(row, todo){
    row.classList.add('expanded');
    const title = row.querySelector('.title');
    const details = row.querySelector('.details');
    const dueDate = row.querySelector('.due');
    const saveButton = row.querySelector('.save-button');

    title.addEventListener('click', function(e) {editField(e, 'text')});
    details.addEventListener('click', function(e) {editField(e, 'text')});
    dueDate.addEventListener('click', function(e) {editField(e, 'date')});
    saveButton.addEventListener('click', function(){save(row, todo)})
}   

const closeDetails = function(row){
    row.classList.remove('expanded');
    let title = row.querySelector('.title');
    title.removeEventListener('click', editField);
}
const setNewValue = function (event, classes, type){
    let target = event.currentTarget;
;

    if (event.key === 'Enter'){
        target.blur();
        
    } else if (event.type === 'focusout'){
        let el = document.createElement('div');
        switch (type){
            case 'text':
                el.textContent = target.value;
                break;
            case 'date':
                let selectedDate = new Date(target.value);
                selectedDate.setDate(selectedDate.getUTCDate());
                el.textContent = selectedDate.toLocaleDateString('en-ca', { month:"short", day:"numeric"});      
            }
        el.classList.add(classes);
        el.addEventListener('click', function(e){editField(e, type)});

        target.parentElement.replaceChild(el, target);

    }
}
const save = function (row, todo){
    todo.setName(row.querySelector('div > .title').textContent);
    todo.setDescription(row.querySelector('div > .details').textContent);
    todo.setDueDate(Date(row.querySelector('div > .due').textContent));

    const statusInput = row.querySelector('div > .status');
    if(statusInput.checked === true){
        todo.setStatus('done');
    } else {
        todo.setStatus('open');
    }
    const priorityInput = row.querySelector(`[name = priorities-${todo.getName()}]:checked`); 
    todo.setPriority(priorityInput.value);
    const projectInput = row.querySelector('.project');
    todo.setProject(projectInput[projectInput.selectedIndex].value);
    console.log(todo);
}

export { drawToDo };