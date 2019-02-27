import axios from 'axios';

export const fetchMenuApi = () => axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data);