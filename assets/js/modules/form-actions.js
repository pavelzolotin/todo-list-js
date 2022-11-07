import taskAdd from "./task-add";
let taskForm = document.querySelector('form')

function formActions() {
    taskForm.addEventListener('submit', () => {
        //add task in the list
        taskAdd()
    })
}

export default formActions