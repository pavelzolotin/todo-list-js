// store current task time to track changes
let currentTimeTaskHours = '00'
let currentTimeTaskMinutes = '00'

// get current task hour time
export function taskTimeCurrentHours(event) {
    currentTimeTaskHours = event.value
}

// get current task minutes time
export function taskTimeCurrentMinutes(event) {
    currentTimeTaskMinutes = event.value
}

// edit the task time and update local storage
export function taskTimeHoursEdit(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // check if task time is empty
    if (event.value === '') {
        alert('Время не написано')
        event.value = '00'
        return
    }

    // check if task time is not correct
    if (event.value.length < 2 || event.value.length > 2) {
        alert('Напишите время, 2 символа')
        event.value = '00'
        return
    }

    // check if value more than necessary
    if (event.value > 23) {
        alert('Время написано некорректно')
        event.value = '00'
        return
    }

    // update task
    tasks.forEach(task => {
        if (task.taskTimeHours === currentTimeTaskHours) {
            task.taskTimeHours = event.value
        }
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function taskTimeMinutesEdit(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // check if task time is empty
    if (event.value === '') {
        alert('Время не написано')
        event.value = '00'
        return
    }

    // check if task time is not correct
    if (event.value.length < 2 || event.value.length > 2) {
        alert('Напишите время, 2 символа')
        event.value = '00'
        return
    }

    // check if value more than necessary
    if (event.value > 59) {
        alert('Время написано некорректно')
        event.value = '00'
        return
    }

    // update task
    tasks.forEach(task => {
        if (task.taskTimeMinutes === currentTimeTaskMinutes) {
            task.taskTimeMinutes = event.value
        }
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}