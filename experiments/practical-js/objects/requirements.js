// Objects 😄


var todoList = {
   //It should store the todos array on an object
   todos: ['item 1', 'item 2', 'item 3'],

   //It should have a displayTodos method
   displayTodos: function() {
      console.log('My todos:', this.todos);
   },

   //It should have an addTodos method
   addTodos: function(item) {
      this.todos.push(item);
      this.displayTodos();
   },

   //It should have a changeTodo method
   changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
   },

   //It should have a deleteTodo method
   deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
   }
};
