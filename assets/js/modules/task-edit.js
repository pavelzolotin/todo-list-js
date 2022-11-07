// store current task to track changes
let currentTask = null

// get current task
export function taskCurrent(event) {
    currentTask = event.value
}

// edit the task and update local storage
export function taskEdit(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // check if task is empty
    if (event.value === '') {
        alert('Задание не написано')
        event.value = currentTask
        return
    }

    // update task
    tasks.forEach(task => {
        if (task.task === currentTask) {
            task.task = event.value
        }
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}