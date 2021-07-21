import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.35.166.35:3050/',
});

export default client;
