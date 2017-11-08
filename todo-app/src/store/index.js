import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import todos from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    todos,
  },
});
