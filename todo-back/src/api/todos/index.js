import { Router } from 'express';
import * as todosCtrl from './todos.ctrl';

const todos = Router();

todos.get('/', todosCtrl.read);
todos.post('/', todosCtrl.insert);
todos.patch('/:id', todosCtrl.check);
todos.delete('/:id', todosCtrl.remove);

export default todos;
