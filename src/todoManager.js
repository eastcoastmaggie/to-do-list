
const drawToDo = function (todo) {
    let priorities = ['low', 'medium', 'high'];
    let entry = document.createElement('div');
    let row = document.createElement('div');
    let name = document.createElement('div');
    let detailButton = document.createElement('button');
    let dueDate = document.createElement('div');
    let status = document.createElement('input');
    let priority = document.createElement('div');
    let detail = document.createElement('div');
    let project = document.createElement('div');
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
        prioritySelection.appendChild(radioLevel);
        prioritySelection.appendChild(radioLabel);
    }

    entry.classList.add('card');
    row.classList.add('row');
    name.classList.add('title');
    dueDate.classList.add('date');
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
    project.textContent = `${todo.getProject().getName()}`;


    // add class used to colour the lefthand side according to priority
    priority.classList.add(todo.getPriority());
    priority.classList.add('priority');
    prioritySelection.classList.add('radio-toolbar');

    detailButton.addEventListener('click', function() { expandDetails(detailButton.parentElement.parentElement)});
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
const editField = function (){

    let classes = this.classList;
    let inputField = document.createElement('input');
    inputField.classList.add(classes);
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('value', this.textContent);
    ['keypress', 'focusout'].forEach(function(e){
        inputField.addEventListener(e, function(event){setNewValue(event, classes)});
    })
    this.parentElement.replaceChild(inputField, this);
    setTimeout(function(){ inputField.selectionStart = inputField.selectionEnd = 10000; }, 0);
    inputField.focus();
}
const expandDetails = function(row){
    row.classList.add('expanded');
    const title = row.querySelector('.title');
    const details = row.querySelector('.details');
    title.addEventListener('click', editField);
    details.addEventListener('click', editField);
}
const closeDetails = function(row){
    row.classList.remove('expanded');
    let title = row.querySelector('.title');
    title.removeEventListener('click', editField);
}
const setNewValue = function (event, classes){
    if (event.type === 'focusout' || event.key === 'Enter'){
        let el = document.createElement('div');
        el.textContent = event.currentTarget.value;
        el.classList.add(classes);
        el.addEventListener('click', editField);
        event.currentTarget.parentElement.replaceChild(el, event.currentTarget);

    }
}


export { drawToDo };