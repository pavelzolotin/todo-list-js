function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    tasks.forEach(task => {
        if (task.task === event.parentNode.children[0].value) {
            task.completed = !task.completed
        }
    });

    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    event.parentNode.children[0].classList.toggle('completed')
    event.parentNode.children[1].classList.toggle('completed-without-decoration')
    event.parentNode.children[3].classList.toggle('completed-without-decoration')
}

export default taskComplete