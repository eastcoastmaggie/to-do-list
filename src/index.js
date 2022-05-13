// To do Check list
// Created by Maggie
// As part of The Odin Project course work
// May 2022

import './style.css';
import { projectFactory } from './project';
import { todoFactory } from'./todo';
import { drawProject } from './projectManager';
import { drawTodo } from './todoManager';
import { storageManager } from './storage';


// create main layout
const main = () => {

    let projects = [];
    let todos = [];
    const projectsReplacer = ['name'];
    const todosReplacer = ['name', 'description', 'dueDate', 'project', 'priority', 'status'];
    
    // set up some default projects
    projects.push(projectFactory('Due Today'));
    projects.push(projectFactory('Everything'));
    projects.push(projectFactory('Work'));
    projects.push(projectFactory('Home'));
    projects.push(projectFactory('The Odin Project'));
    
    // set up some default tasks
    todos.push(todoFactory('test', 'Test the thing', projects[2], 2, Date()));
    todos.push(todoFactory('laundry', 'Another', projects[3], 1, Date()));
    todos.push(todoFactory('taxes', 'Do taxes', projects[3], 3, new Date('2022-04-30')));
    
    // load existing projects/tasks from local storage if any
    // set defaults if not
    storageManager('projects', projects, projectsReplacer);
    storageManager('todos', todos, todosReplacer);
    

    let currentFilter= '';
    const el = document.querySelector('body');
    const content = el.querySelector('#content');
    const sidebar = el.querySelector('#sidebar');
    const header = el.querySelector('#header');
    const footer = el.querySelector('#footer');
    const title = document.createElement('h1');
    title.textContent = 'To Do List';
    header.appendChild(title);


    const addElement = (element, parent) => {
        parent.appendChild(element);
    };

    const addNewTodo = function (name, description, projectIndex, priority, dueDate){
        todos.push(todoFactory(name, description, projects[projectIndex], priority, dueDate));
    };

    const addNewProject = function (name){
        projects.push(projectFactory(name));
        storageManager('projects', projects, projectsReplacer,"set");
    };

    const clearSection = (section) =>{
        while (section.firstChild) {
            section.removeChild(section.lastChild);
          }
    };

    const createProjectButton = function(){
        const button = document.createElement('button');
        button.classList.add('add-project');
        button.textContent = "+";
        button.addEventListener("click", function(){
            const inputField = document.createElement('input');
            inputField.setAttribute('type', 'text');
            inputField.addEventListener('keypress', function(e){
                if (e.key === 'Enter'){
                    e.currentTarget.blur();
                }
            });
            inputField.addEventListener('focusout', function(e){
                if(e.currentTarget.value != ""){
                    addNewProject(e.currentTarget.value);
                
                }
                this.remove();
                loadProjects();
            });
            
            
            addElement(inputField, sidebar);
            this.remove();
            inputField.focus();
        
        });
        addElement(button, sidebar);
    };

    const createTodoButton = () => {
        const addButton = document.createElement('button');
        addButton.classList.add('add-todo');
        addButton.textContent = "+";
        addButton.addEventListener("click", function(){
            addNewTodo("New Item", "New Description", 2, 2, Date());
            let newRow = drawTodo(todos, (todos.length-1), projects.slice(2,projects.length));
            addElement(newRow, content);
            newRow.querySelector('.detail-button').click();
            this.remove();
            createTodoButton();
    
        });
        addElement(addButton, content);
    };

    // allow user to filter by projects
    const filterBy = function (project, items){
        let filteredItems = items;
        currentFilter = project.getName();
        // 
        if (project.getName() == "Everything"){
            filteredItems = items;
        } else if(project.getName() == "Due Today"){
            filteredItems =  items.filter( item => {
                let dueAt = item.getDueDate().setHours(0, 0, 0, 0);
                return dueAt == new Date().setHours(0, 0, 0, 0);
            });
        } else {
            filteredItems = items.filter( item =>   
                item.getProject() == project.getName()
            
            );
        }
        clearSection(content);
        for (let item in filteredItems){
            addElement(drawTodo(todos, todos.indexOf(filteredItems[item]), projects.slice(2, projects.length)), content);        
        }
        createTodoButton();
    };

    const loadProjects = () => {
        clearSection(sidebar);
        for (let newProject in projects){
            addElement(drawProject(projects[newProject], todos, filterBy), sidebar);
        }
        createProjectButton();
    };
    
    loadProjects();
  
    sidebar.firstChild.firstChild.click();
}
main();


