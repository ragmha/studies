// Functions 😄

// It should have a place to store todos
var todos = ['item1', 'item2', 'item3'];

// It should have a function to display todos
function displayTodos() {
  console.log('My todos:', todos);
}

// It should have a function to add todos
function addTodo(item) {
  todos.push(item);
  displayTodos();
}

// It should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// It should have a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
