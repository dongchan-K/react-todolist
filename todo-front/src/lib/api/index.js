import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.35.230.4/',
});

export default client;
