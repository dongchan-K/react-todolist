import axios from 'axios';

const client = axios.create({
  baseURL: 'http://13.125.131.120/',
});

export default client;
