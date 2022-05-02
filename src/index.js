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

    const initialDraw = () => {
        const addButton = document.createElement('button');
        addButton.textContent = "+";
        addButton.addEventListener("click", function(){
            console.log('click');
        });
        addElement(addButton, content);
    };

    const addElement = (element, parent) => {
        
        parent.appendChild(element);
    };

    const addToContent = (element) => {
        addElement(element, content);
    };

    const clearContent = () =>{
        while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
    };
    
    const addToSidebar = (element) => {
        addElement(element, sidebar);
    };

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
        clearContent();
        for (let item in filteredItems){
            addToContent(drawToDo(filteredItems[item]));        
        }
    };
    
    for (let newProject in projects){
        addToSidebar(drawProject(projects[newProject], todos, filterBy));
    }

    sidebar.firstChild.firstChild.click();

}
domManager();


