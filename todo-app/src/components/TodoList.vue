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
};
</script>
<style>
</style>