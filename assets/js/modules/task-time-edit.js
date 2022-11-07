// store current task time to track changes
let currentTimeTaskHours = ''
let currentTimeTaskMinutes = ''

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

    // check if value more than necessary
    if (event.value === '' || event.value === '0' || event.value > 23 || event.value.length >= 3) {
        alert('Напишите количество часов, 2 символа')
        event.value = currentTimeTaskHours
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

    // check if value more than necessary
    if (event.value === '' || event.value === '0' || event.value > 59 || event.value < 10) {
        alert('Напишите количество минут, 2 символа')
        event.value = currentTimeTaskMinutes
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