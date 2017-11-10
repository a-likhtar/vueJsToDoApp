import Vue from 'vue';
import Vuex from 'vuex';
import todosApi from '../api/todosApi';
import urls from './utils/urls';

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
  getCompletedTodosCount: (state) => state.todos.filter((todo) => todo.completed === true).length,
  getPendingTodosCount: (state) => state.todos.filter((todo) => todo.completed === false).length,
};

const actions = {
  getAllTodos({ commit }) {
    todosApi.todos(urls.getUrl().url).getAll().then((data) => commit('getAllTodos', data));
  },
  showForm: ({ commit }, isEditing) => commit('showForm', isEditing),
  hideForm: ({ commit }, isEditing) => commit('hideForm', isEditing),
  deleteTodo({ commit }, todo) {
    todosApi.todos(urls.getUrl().url).deleteTodo(todo.id).then(commit('deleteTodo', todo));
  },
  completeTodo({ commit }, todo) {
    commit('completeTodo', todo);
    todosApi.todos(urls.getUrl().url).completeTodo(todo);
  },
  addTodo({ commit }, todo) {
    todosApi.todos(urls.getUrl().url).addTodo(todo).then(commit('addTodo', todo));
  },
};

const mutations = {
  getAllTodos(state, todos) {
    state.todos = todos;
  },
  showForm(state, isEditing) {
    isEditing = true;
  },
  hideForm(state, isEditing) {
    isEditing = false;
  },
  deleteTodo(state, todo) {
    const todoIndex = state.todos.indexOf(todo);
    state.todos.splice(todoIndex, 1);
  },
  completeTodo(state, todo) {
    todo.completed = true;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
