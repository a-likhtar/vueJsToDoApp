<template>
  <div>
    <p>Completed Tasks: {{completedCount}}</p>
    <p>Pending Tasks: {{pendingCount}}</p>
    <todo v-for="(todo, index) in todos"  :key="index" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import { mapGetters, mapActions } from 'vuex';
import Todo from './Todo';

export default {
  computed: mapGetters({
    todos: 'allTodos',
    completedCount: 'getCompletedTodosCount',
    pendingCount: 'getPendingTodosCount',
  }),
  methods: mapActions([
    'getAllTodos',
  ]),
  created() {
    this.$store.dispatch('getAllTodos');
  },
  components: {
    Todo,
  },
  // methods: {
  //   deleteTodo(todo) {
  //     const todoIndex = this.todos.indexOf(todo);
  //     const todoId = todo.id;
  //     this.todos.splice(todoIndex, 1);
  //     axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  //           .then(response => {})
  //           .catch(e => {
  //             console.log(e);
  //           });
  //   },
  //   completeTodo(todo) {
  //     const todoId = todo.id;
  //     todo.completed = true;
  //     axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
  //       body: todo,
  //     })
  //           .then(respone => {})
  //           .catch(e => {
  //             console.log(e);
  //           });
  //   },
  // },
};
</script>
<style>
</style>