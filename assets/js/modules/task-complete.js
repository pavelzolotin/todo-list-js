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
}

export default taskComplete