import {taskCurrent} from "./task-edit";
import {taskEdit} from "./task-edit";
import {taskTimeCurrentHours} from "./task-time-edit";
import {taskTimeCurrentMinutes} from "./task-time-edit";
import {taskTimeHoursEdit} from "./task-time-edit";
import {taskTimeMinutesEdit} from "./task-time-edit";
import taskComplete from "./task-complete";
import taskRemove from "./task-remove";

const task = document.querySelector('.task__text-input')
const taskTimeHours = document.querySelector('.task__time-input--hours')
const taskTimeMinutes = document.querySelector('.task__time-input--minutes')
const list = document.querySelector('ol')

function taskAdd() {
    // return if task is empty or has value less 5 symbols
    if (task.value === '' || task.value.length < 5) {
        alert('Напишите задание (не меньше 5 символов)')
        return false
    }

    // check if hours value less or empty than necessary
    if(taskTimeHours.value === '' || taskTimeHours.value.length < 2 || taskTimeHours.value.length > 2) {
        alert('Напишите количество часов, 2 символа')
        return false;
    }

    // check if minutes value less or empty than necessary
    if(taskTimeMinutes.value === '' || taskTimeMinutes.value.length < 2 || taskTimeMinutes.value.length > 2) {
        alert('Напишите количество минут, 2 символа')
        return false;
    }

    // check if hours value more than necessary
    if (taskTimeHours.value > 23) {
        alert('Количество часов написано некорректно')
        return false
    }

    // check if minutes value more than necessary
    if (taskTimeMinutes.value > 59) {
        alert('Количество минут написано некорректно')
        return false
    }

    // return if task is already exists
    if (document.querySelector(`input[value="${task.value}"]`)) {
        alert('Такое задание уже существует')
        return false;
    }

    // add task to local storage
    localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks') || '[]'), {
        task: task.value,
        taskTimeHours: taskTimeHours.value,
        taskTimeMinutes: taskTimeMinutes.value,
        completed: false
    }]))

    // create list item, add innerHTML and append to ul
    const li = document.createElement('li')
    li.classList.add('li')
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    taskDiv.innerHTML = `<input value="${task.value}" class="task-current__text-input">
    <input class="task-current__time-input--hours" type="number" min="01" max="24" value="${taskTimeHours.value}">
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
}

export default taskAdd