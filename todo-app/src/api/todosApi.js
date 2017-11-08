import axios from 'axios';

export default {
  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          console.log(response.data);
          return response.data;
        },
        )
        .catch(e => {
          console.log(e);
        });
  },
};

