import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.38.210.95/',
});

export default client;
