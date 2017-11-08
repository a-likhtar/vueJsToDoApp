<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>
    <todo  v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos"  :key="index" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import axios from 'axios';
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      const todoId = todo.id;
      this.todos.splice(todoIndex, 1);
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => {})
            .catch(e => {
              console.log(e);
            });
    },
    completeTodo(todo) {
      const todoId = todo.id;
      todo.completed = true;
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        body: todo,
      })
            .then(respone => {})
            .catch(e => {
              console.log(e);
            });
    },
  },
};
</script>
<style>
</style>