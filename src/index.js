import './style.css';
import { projectFactory } from './project';
import { toDoFactory } from'./todo';
import { drawProject } from './projectManager';
import { drawToDo } from './todoManager';

let projects = [];
let todos = [];

projects.push(projectFactory('Everything'));
projects.push(projectFactory('Due Today'));
projects.push(projectFactory('Work'));
projects.push(projectFactory('Home'));
projects.push(projectFactory('The Odin Project'));


todos.push(toDoFactory('test', 'Test the thing', projects[2], 2, Date()));
todos.push(toDoFactory('laundry', 'Another', projects[3], 1, Date()));
todos.push(toDoFactory('taxes', 'Do taxes', projects[3], 3, new Date('2022-04-30')));




const domManager = () => {
    let currentFilter= '';
    const el = document.querySelector('body');
    const content = el.querySelector('#content');
    const sidebar = el.querySelector('#sidebar');
    const header = el.querySelector('#header');
    const footer = el.querySelector('#footer');

    const addTodoButton = () => {
        const addButton = document.createElement('button');
        addButton.classList.add('add-todo');
        addButton.textContent = "+";
        addButton.addEventListener("click", function(){
            console.log('click');
        });
        addElement(addButton, content);
    }
    const addProjectButton = function(){
        const addButton = document.createElement('button');
        addButton.classList.add('add-project');
        addButton.textContent = "+";
        addButton.addEventListener("click", function(){
            const inputField = document.createElement('input');
            inputField.setAttribute('type', 'text');
            inputField.addEventListener('keypress', function(e){
                if (e.key === 'Enter'){
                    e.currentTarget.blur();
            }
        });
            inputField.addEventListener('focusout', function(e){
                addToProjects(e);
                this.remove();
            });
            
            addElement(inputField, sidebar);
            this.remove();
        
        });
        addElement(addButton, sidebar);
    };
    const addToProjects = function (e){
        projects.push(projectFactory(e.currentTarget.value));
        loadProjects();
    }

    const addElement = (element, parent) => {
        
        parent.appendChild(element);
    };

    const addToContent = (element) => {
        addElement(element, content);
    };

    const clearSection = (section) =>{
        while (section.firstChild) {
            section.removeChild(section.lastChild);
          }
    };
    
    const addToSidebar = (element) => {
        addElement(element, sidebar);
    };

    const loadProjects = () => {
        clearSection(sidebar);
        for (let newProject in projects){
            addToSidebar(drawProject(projects[newProject], todos, filterBy));
        }
        addProjectButton();
    }
    const filterBy = function (project, items){
        let filteredItems = items;
        currentFilter = project.getName();
        if (project.getName() == "Everything"){
            filteredItems = items;
        } else if(project.getName() == "Due Today"){
            filteredItems =  items.filter( (item) => {
                let dueAt = new Date(item.getDueDate()).setHours(0, 0, 0, 0);
                if(dueAt == new Date().setHours(0, 0, 0, 0)){
                    return true;
                }
                return false;
            });
        } else {
            filteredItems = items.filter( (item) => {
                
                if(item.getProject().getName() == project.getName()){
                    return true;
                }
                return false;
            });
        }
        clearSection(content);
        for (let item in filteredItems){
            addToContent(drawToDo(filteredItems[item], projects));        
        }
        addTodoButton();
    };
    
    loadProjects();
  
    sidebar.firstChild.firstChild.click();
}
domManager();


