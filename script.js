// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText === '') return;

        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;

        // Add the new task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        input.value = '';

        // Add event listener for the delete button
        taskItem.querySelector('.delete-button').addEventListener('click', () => {
            taskItem.remove();
        });
    });
});
