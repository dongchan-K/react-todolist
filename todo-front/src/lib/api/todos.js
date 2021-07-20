import client from './index';

// 할 일 조회하기
export const readTodoList = () => {
  client.get('/api/todos');
};

// 할 일 추가하기
export const insertTodoList = (content) => {
  client.post('/api/todos', { content });
};

// 할 일 체크박스 업데이트
export const checkTodo = (id) => {
  client.patch(`/api/todos/${id}`);
};

// 할 일 삭제
export const deleteTodo = (id) => {
  client.delete(`api/todos/${id}`);
};
