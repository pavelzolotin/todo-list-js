const container = document.querySelector('.container')

function allTasksDelete() {
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
}

export default allTasksDelete