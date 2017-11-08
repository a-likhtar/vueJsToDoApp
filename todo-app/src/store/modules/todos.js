import todos from '../../api/todosApi';

const state = {
  all: [],
};

const getters = {
  allTodos: (state) => state.all,
};

const actions = {
  getAllTodos({ commit }) {
    todos.getTodos(todos => {
      commit('receiveTodos', { todos });
    });
  },
};

const mutations = {
  receiveTodos(state, { todos }) {
    state.all = todos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
