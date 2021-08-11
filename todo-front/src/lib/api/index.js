import axios from 'axios';

const client = axios.create({
  baseURL: 'http://54.180.143.138:3050/',
});

export default client;
