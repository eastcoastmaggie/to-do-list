const toDoProto = {
    draw() {
        return (this);
    },
    getName() {
        return this.name;
    },
    getDueDate() {
        return new Date(this.dueDate);
    },
    getDescription(){
        return this.description;
    },
    getProject(){
        return this.project;
    },
    getPriority(){
        return this.priority;
    },
    getStatus(){
        return this.status;
    },
    setStatus(newStatus){
        this.status = newStatus;
    },
    setDueDate(newDueDate){
        this.dueDate = newDueDate;
    },
    setName(newName){
        this.name = newName;
    },
    setDescription(newDescription){
        this.description = newDescription;
    },
    setPriority(newPriority){
        this.priority = newPriority;
    },
    setProject(newProject){
        this.project = newProject;
    }

}
const toDoFactory = (name, description, project, priority, dueDate) => {
    let priorities = ['low', 'medium', 'high'];
    let status = 'open'; 
    // set priority default to 'normal' if not in list
    if ( 0 < priority && priority <= priorities.length ){
        priority = priorities[priority - 1];
    } else {
        priority = 'normal';
    }
    // use proto to avoid duplication of functions
    return Object.create(toDoProto, {
        name : { 
            writable: true,
            configurable: true,
            value: name
        },
        description : {
            writable: true,
            configurable: true,
            value : description
        },
        project : {
            writable: true,
            configurable: true,
            value : project
        },
        priority : {
            writable: true,
            configurable: true,
            value : priority
        }, 
        dueDate : {
            writable: true,
            configurable: true,
            value : dueDate},
        status : { 
            writable: true,
            configurable: true,
            value : status
        }
    });
}
export { toDoFactory };