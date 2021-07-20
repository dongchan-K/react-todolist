import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3050',
});

export default client;
