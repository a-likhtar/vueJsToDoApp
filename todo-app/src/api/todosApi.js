import axios from 'axios';

export default {
  getTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data)
    .catch((e) => {
      console.log(e.statusText);
    });
  },
};
