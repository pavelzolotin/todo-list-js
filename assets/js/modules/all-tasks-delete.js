const container = document.querySelector('.container')

function allTasksDelete() {
    //get tasks in localStorage
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))

    // check if local storage has more tasks than 1 then create an all-tasks-delete button
    if (tasks.length >= 1) {
        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btn__delete-all-tasks')
        btnDelete.setAttribute('type', 'submit');
        btnDelete.innerHTML = `&minus;`
        container.appendChild(btnDelete)

        // remove all tasks from the list by pressing the button
        btnDelete.addEventListener('click', () => {
            localStorage.clear()
            location.reload()
        })
    } else {
        return
    }
}

export default allTasksDelete