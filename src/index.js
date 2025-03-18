document.addEventListener('DOMContentLoaded', () => {
	
	const todoList = [];
    const taskForm = document.querySelector('#create-task-form');
	
	taskForm.addEventListener('submit', (event) => {
		
		event.preventDefault();
      const taskInput = document.getElementById('new-task-description');
      todoList.push(taskInput.value.trim());
      taskForm.reset();
		
		renderTodoList(todoList);
	});
});

function renderTodoList(todos) {
	const unorderedListElement = document.querySelector('#tasks');

	
	unorderedListElement.innerHTML = '';

	
	todos.forEach((todo) => {
		
		const li = document.createElement('li');
		li.textContent = todo;

		
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'X';
		
		deleteButton.addEventListener('click', () => {
			

			const index = todos.indexOf(todo);
			todos.splice(index, 1);

			
			renderTodoList(todos);
		});

		
		li.appendChild(deleteButton);
		unorderedListElement.appendChild(li);
	});
}
