// Loop 😄
var todoList = {
   todos: [],

   //.displayTodos show .todoText
   displayTodos: function() {
      if (this.todos.length === 0) {
         console.log('Your todo list is empty!');
      } else{
         console.log('My Todos: ');
         for (var i = 0; i < this.todos.length ; i++) {
            // check if .completed is true
            if (this.todos[i].completed) {
               console.log('(x)', this.todos[i].todoText);
            }else {
               console.log('( )', this.todos[i].todoText);
            }
         }
      }
   },

   // todoList.addTodo should add objects
   addTodos: function(todoText) {
      this.todos.push({
         todoText: todoText,
         completed: false
      });
      this.displayTodos();
   },

   // todoList.changeTodo change the todoText property
   changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();
   },

   deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
   },

   // todoList.toggleCompleted should change the completed property
   toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
   }
};
