// Thinking in code 😄

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
   },

   toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;

      // Get number of completed todos.
      for (var i= 0; i < totalTodos; i++) {
         if (this.todos[i].completed === true) {
            completedTodos++;
         }
      }

      // .toggleAll: if everything's true, make everything false.
      if (completedTodos === totalTodos) {
         // Make everything false
         for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
         }
      } else {
         // Otherwise, make everything true
         for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = true;
         }
      }

      this.displayTodos();
   }
};

var handlers = {
   displayTodos : function() {
      todoList.displayTodos();
   },

   addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodos(addTodoTextInput.value);
      addTodoTextInput.value = "";
   },

   changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      changeTodoTextInput.value = "";
   },

   deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
   },

   toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
   },

   toggleAll : function() {
      todoList.toggleAll();
   }
};

var view = {
   displayTodos: function() {
      var todosUl = document.querySelector('ul');
      var todoLi = document.createElement('li');
      todosUl.appendChild(todoLi);
   },
};
