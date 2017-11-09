import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import todosApi from '../api/todosApi';

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  getAllTodos({ commit }) {
    todosApi.getTodos().then(data => commit('getAllTodos', data));
  },
};

const mutations = {
  getAllTodos(state, todos) {
    state.todos = todos;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
