'use strict';

let field = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let tasksBtn = document.getElementById('tasks__add');
let tasks = document.getElementsByClassName("task__remove");

function addTask(event) {
    event.preventDefault();
    if (field.value !== '') {
        tasksList.insertAdjacentHTML('beforeend',
            `<div class="task">
        <div class="task__title">
            ${field.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
        for (let item of tasks) {
            item.onclick = function (event) {
                event.target.closest('.task').remove()
            };
        }
        field.value = '';
    }
}

tasksBtn.addEventListener('click', addTask);
field.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addTask(event);
    }
});