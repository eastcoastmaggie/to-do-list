
const drawProject = function (project, items, filterFunction) {
    let entry = document.createElement('div');
    let link = document.createElement('button');

    link.textContent = project.getName();

    link.addEventListener('click', function(){ filterFunction(project, items)});
    entry.appendChild(link);
    return entry;
}  

export { drawProject };