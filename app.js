document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    function addTodo() {
        const task = todoInput.value.trim();
        if (task) {
            const todoItem = document.createElement('li');
            todoItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'bg-gray-200', 'rounded-lg', 'todo-item-enter');
            todoItem.innerHTML = `
                <span class="flex-1">${task}</span>
                <button class="delete-todo bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-200">Delete</button>
            `;
            todoList.appendChild(todoItem);

            todoItem.querySelector('.delete-todo').addEventListener('click', () => {
                todoItem.classList.add('todo-item-exit');
                todoItem.addEventListener('animationend', () => todoItem.remove());
            });

            todoInput.value = '';
        }
    }
});
