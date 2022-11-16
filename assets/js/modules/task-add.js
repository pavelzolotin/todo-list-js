import {taskCurrent} from "./task-edit";
import {taskEdit} from "./task-edit";
import {taskTimeCurrentHours} from "./task-time-edit";
import {taskTimeCurrentMinutes} from "./task-time-edit";
import {taskTimeHoursEdit} from "./task-time-edit";
import {taskTimeMinutesEdit} from "./task-time-edit";
import taskComplete from "./task-complete";
import taskRemove from "./task-remove";
import allTasksDelete from "./all-tasks-delete";

const task = document.querySelector('.task__text-input')
const taskTimeHours = document.querySelector('.task__time-input--hours')
const taskTimeMinutes = document.querySelector('.task__time-input--minutes')
const list = document.querySelector('ol')

function taskAdd() {
    // return if task is empty or has value less 5 symbols
    if (task.value === '' || task.value.length < 5) {
        alert('Напишите задание (не меньше 5 символов)')
        return
    }

    // if value is less than 10, then add "0" to value
    taskTimeHours.value < 10 && taskTimeHours.value.length === 1 && taskTimeHours.value !== '00' ? taskTimeHours.value = '0' + taskTimeHours.value : ''
    taskTimeMinutes.value < 10 && taskTimeMinutes.value.length === 1 && taskTimeMinutes.value !== '00' ? taskTimeMinutes.value = '0' + taskTimeMinutes.value : ''

    //check if hours value less or empty than necessary
    if (taskTimeHours.value === '' || taskTimeHours.value === '0' || taskTimeHours.value >= 24 || taskTimeHours.value.length >= 3 || taskTimeHours.value.length < 2) {
        alert('Напишите количество часов, 2 символа')
        return
    }

    // check if minutes value less or empty than necessary
    if (taskTimeMinutes.value === '' || taskTimeMinutes.value === '0' || taskTimeMinutes.value > 59 || taskTimeMinutes.value.length >= 3 || taskTimeMinutes.value.length < 2) {
        alert('Напишите количество минут, 2 символа')
        return
    }

    // return if task is already exists
    if (document.querySelector(`textarea[value="${task.value}"]`)) {
        alert('Такое задание уже существует')
        return
    }

    // add task to local storage
    localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks') || '[]'), {
        task: task.value,
        taskTimeHours: taskTimeHours.value,
        taskTimeMinutes: taskTimeMinutes.value,
        completed: false,
        completedWithoutDecoration: false
    }]))

    // create list item, add innerHTML and append to ul
    const li = document.createElement('li')
    li.classList.add('li')
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    taskDiv.innerHTML = `<textarea value="${task.value}" class="task-current__text-input" maxlength="60">${task.value}</textarea>
    <input class="task-current__time-input--hours" type="number" min="00" max="23" value="${taskTimeHours.value}">
    <span>:</span>
    <input class="task-current__time-input--minutes" type="number" min="00" max="59" value="${taskTimeMinutes.value}">
    <button class="btn__task-done"><img src="assets/img/check.png"/></button>
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

    // clear input
    task.value = ''
    taskTimeHours.value = ''
    taskTimeMinutes.value = ''

    //get tasks in localStorage
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // display all-tasks-delete btn from condition
    if (tasks.length === 1) {
        allTasksDelete()
    } else return
}

export default taskAdd