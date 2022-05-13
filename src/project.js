const projectProto = {
    getName() {
        return this.name;
    }
    
}
const projectFactory = (name) => {
    return Object.create(projectProto, {
        name : {value : name}
    });
}
export { projectProto, projectFactory };