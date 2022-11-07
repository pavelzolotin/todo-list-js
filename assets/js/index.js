import '../css/style.css';
import tasksLoad from "./modules/tasks-load";
import formActions from "./modules/form-actions";

window.addEventListener('DOMContentLoaded', () => {
    tasksLoad()
    formActions()
})