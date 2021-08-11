import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.36.121.21:3050/',
});

export default client;
