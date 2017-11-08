<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import axios from 'axios';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      this.todos = response.data;
    })
    .catch(e => {
      console.log(e);
    });
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        body: newTodo,
      })
      .then(response => {})
      .catch(e => {
        console.log(e);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
