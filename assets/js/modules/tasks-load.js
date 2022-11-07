import {taskCurrent} from "./task-edit";
import {taskEdit} from "./task-edit";
import {taskTimeCurrentHours} from "./task-time-edit";
import {taskTimeCurrentMinutes} from "./task-time-edit";
import {taskTimeHoursEdit} from "./task-time-edit";
import {taskTimeMinutesEdit} from "./task-time-edit";
import taskComplete from "./task-complete";
import taskRemove from "./task-remove";
import allTasksDelete from "./all-tasks-delete";

function tasksLoad() {
    // check if localStorage has at least one task, then create an all-tasks-delete button or return
    if (localStorage.getItem('tasks') === null) return

    // Get the tasks from localStorage and convert it to an array
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // display all-tasks-delete btn from condition
    if (tasks.length >= 1) {
        allTasksDelete()
    } else return

    // Loop through the tasks and add them to the list
    tasks.forEach(task => {
        const list = document.querySelector('ol')
        const li = document.createElement('li')
        li.classList.add('li')
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `<input value="${task.task}" class="task-current__text-input ${task.completed ? 'completed' : ''}">
        <input class="task-current__time-input--hours ${task.completedWithoutDecoration ? 'completed-without-decoration' : ''}" type="number" min="01" max="24" value="${task.taskTimeHours}">
        <span>:</span>
        <input class="task-current__time-input--minutes ${task.completedWithoutDecoration ? 'completed-without-decoration' : ''}" type="number" min="00" max="59" value="${task.taskTimeMinutes}">
        <button class="btn__task-done ${task.completed ? 'completed' : ''}"><img src="assets/img/check.png"/></button>
        <button class="btn__task-delete"><img src="assets/img/delete.png"/></button>`
        list.insertBefore(li, list.children[0])
        li.insertBefore(taskDiv, li.children[0])

        const btnTaskDone = document.querySelector('.btn__task-done')
        const btnTaskRemove = document.querySelector('.btn__task-delete')
        const taskInput = document.querySelector('.task-current__text-input')
        const taskTimeInputHours = document.querySelector('.task-current__time-input--hours')
        const taskTimeInputMinutes = document.querySelector('.task-current__time-input--minutes')

        btnTaskDone.addEventListener('click', function() {
            btnTaskDone.classList.toggle('completed')
            taskComplete(this)
        })

        btnTaskRemove.addEventListener('click', function() {
            taskRemove(this)
        })

        taskInput.addEventListener('focus', function() {
            taskCurrent(this)
        })

        taskInput.addEventListener('blur', function() {
            taskEdit(this)
        })

        taskTimeInputHours.addEventListener('focus', function() {
            taskTimeCurrentHours(this)
        })

        taskTimeInputHours.addEventListener('blur', function() {
            taskTimeHoursEdit(this)
        })

        taskTimeInputMinutes.addEventListener('focus', function() {
            taskTimeCurrentMinutes(this)
        })

        taskTimeInputMinutes.addEventListener('blur', function() {
            taskTimeMinutesEdit(this)
        })
    })
}

export default tasksLoad