import { Router } from 'express';
import todos from './todos';

const api = Router();

api.use('/todos', todos);

export default api;
