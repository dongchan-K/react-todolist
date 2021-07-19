import { Router } from 'express';
import * as todosCtrl from './todos.ctrl';

const todos = Router();

todos.get('/', todosCtrl.read);
todos.post('/', todosCtrl.insert);
todos.delete('/', todosCtrl.remove);

export default todos;
