function taskRemove(event) {
    let btnDeleteAllTasks = document.querySelector('.btn__delete-all-tasks')
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    tasks.forEach(task => {
        if (task.task === event.parentNode.children[0].value) {
            // delete task
            tasks.splice(tasks.indexOf(task), 1)
        }
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    event.parentElement.parentElement.remove()

    // check if localStorage has a task less than 1 then delete an all-tasks-delete button
    if (tasks.length < 1) {
        btnDeleteAllTasks.remove()
    }
}

export default taskRemove