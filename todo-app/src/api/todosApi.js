import axios from 'axios';

export default {
  todos(url) {
    return {
      getAll: () => axios.get(url).then(response => response.data).catch(e => console.log(e)),
      deleteTodo: (id) => axios.delete(`${url}/${id}`).catch(e => console.log(e)),
      addTodo: (todo) => axios.post(url, todo).catch(e => console.log(e)),
      completeTodo: (todo) => axios.put(`${url}/${todo.id}`, todo).catch(e => console.log(e)),
    };
  },
};

