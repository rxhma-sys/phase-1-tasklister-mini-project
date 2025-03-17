document.addEventListener('DOMContentLoaded', () => {
	// your code here

	const todoList = [];

	//1. Select the form and attach the submit event
	const taskForm = document.querySelector('#create-task-form');
	// 1 (b) -> attach submit event
	taskForm.addEventListener('submit', (event) => {
		// stop the default behaviour of form submission on
		// websites which is reloading the page
		event.preventDefault();

		//2. the logic of retrieving the inputed task should be inside the
		// callback function
		const taskInput = document.getElementById('new-task-description');

		//3. store the todo inside the todoList array
		todoList.push(taskInput.value.trim());

		// 4. reset form input
		// taskInput.value = '';
		taskForm.reset(); //when dealing with forms, this is an easy way to reset every input

		// 5. iterate through the list array and display them
		renderTodoList(todoList);
	});
});

function renderTodoList(todos) {
	const unorderedListElement = document.querySelector('#tasks');

	// clear out the initial list items
	unorderedListElement.innerHTML = '';

	// iterate over the todos
	todos.forEach((todo) => {
		// create a li item dynamically
		const li = document.createElement('li');
		li.textContent = todo;

		// create a cancel button
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'X';
		// attach a click event to the button
		deleteButton.addEventListener('click', () => {
			// filter out the clicked todo
			// const filteredTodos = todos.filter((item) => item !== todo);

			const index = todos.indexOf(todo);

			// this deletes the todo and since we are using .splice method, it mutates the original array
			todos.splice(index, 1);

			// call the renderTodoList function again with the updated todos through recurssion
			renderTodoList(todos);
		});

		// attach this button to our create li
		li.appendChild(deleteButton);

		// attach the created li to the unorderedListElement
		unorderedListElement.appendChild(li);
	});
}
