import taskAdd from "./task-add";

let taskForm = document.querySelector('form')
// On form submit add task
function formActions() {
    taskForm.addEventListener('submit', (event) => {
        //disable default settings to form submit
        event.preventDefault();

        //add task in the list
        taskAdd()
    })
}

export default formActions