import axios from 'axios';

export default {
  getTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data)
    .catch((e) => {
      console.log(e.statusText);
    });
  },
  deleteTodo(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .catch(e => console.log(e));
  },
  completeTodo(todo, id) {
    return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      body: todo,
    }).catch(e => console.log(e));
  },
  addTodo(todo) {
    return axios.post('https://jsonplaceholder.typicode.com/todos', {
      body: todo,
    }).catch(e => console.log(e));
  },
};
