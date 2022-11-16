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

    // if value is less than 10, then add "0" to value
    event.value < 10 && event.value !== '00' ? event.value = '0' + event.value : ''

    //check if value more than necessary
    if (event.value === '' || event.value === '0' || event.value >= 24 || event.value.length >= 3) {
        alert('Напишите количество часов, 2 символа')
        event.value = currentTimeTaskHours
        document.querySelector('.task-current__time-input--hours').focus()
        return
    }

    // update task
    tasks.forEach(task => {
        task.taskTimeHours === currentTimeTaskHours ? task.taskTimeHours = event.value : null
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function taskTimeMinutesEdit(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // if value is less than 10, then add "0" to value
    event.value < 10 && event.value !== '00' ? event.value = '0' + event.value : ''

    // check if value more than necessary
    if (event.value === '' || event.value === '0' || event.value > 59 || event.value.length >= 3) {
        alert('Напишите количество минут, 2 символа')
        event.value = currentTimeTaskMinutes
        document.querySelector('.task-current__time-input--minutes').focus()
        return
    }

    // update task
    tasks.forEach(task => {
        task.taskTimeMinutes === currentTimeTaskMinutes ? task.taskTimeMinutes = event.value : null
    })

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}