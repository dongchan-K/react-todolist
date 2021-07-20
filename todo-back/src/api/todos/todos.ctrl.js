import Todo from '../../models/todo';
import mongoose from 'mongoose';
import Joi from 'joi';

// 할 일 조회하기
// GET /api/todos
export const read = async (req, res) => {
  try {
    // Todo 모델 인스턴스의 find 메서드를 사용하여 데이터 조회 및 sort 메서드를 사용하여 id 기준 내림차순 정렬 -> exec()를 붙여 주어야 쿼리문을 실행한다
    const todoList = await Todo.find().sort({ _id: -1 }).exec();

    res.json(todoList); // json 형식으로 응답
  } catch (e) {
    res.status(500).send(e); // 서버 오류
  }
};

// 할 일 등록하기
// POST /api/todos
// {
//   content: '할 일 내용'
//   date: '날짜'
// }
export const insert = async (req, res) => {
  // 객체가 다음 필드를 가지고 있음을 검증
  const schema = Joi.object().keys({
    content: Joi.string().required(), // required가 있다면 필수 항목
  });

  // 요청 body와 검증 필드를 유효성 검사
  const result = schema.validate(req.body);

  // 유효성 검사 실패 시, 에러 처리
  if (result.error) {
    res.status(400).send(result.error); // 잘못된 요청
    return;
  }

  const { content } = req.body;
  const todo = new Todo({
    content,
  });

  try {
    // save 메서드를 사용하여 todo 데이터를 DB에 저장
    await todo.save();
    res.json(todo); // json 형식으로 응답
  } catch (e) {
    res.status(500).send(e); // 서버 오류, http 응답
  }
};

// PATCH /api/todos/:id
// {
// "isDone": boolen,
// }
export const check = async (req, res) => {
  const { id } = req.params;

  // 객체가 다음 필드를 가지고 있음을 검증
  const schema = Joi.object().keys({
    isDone: Joi.boolean().required(),
  });

  const result = schema.validate(req.body);

  // 유효성 검사 실패 시, 에러 처리
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  // 업데이트 할 데이터 객체 복사
  const updateTodo = { ...req.body };

  try {
    // id를 기준으로 데이터를 찾고 업데이트 한다
    const todoList = await Todo.findByIdAndUpdate(id, updateTodo, {
      new: true, // true: 업데이트 된 데이터를 반환, false: 업데이트 이전의 데이터를 반환
    }).exec();

    // 데이터가 존재하지 않을 경우, 에러 처리
    if (!todoList) {
      res.status(404); // 존재하지 않음
      return;
    }
    res.json(todoList); // json 형식으로 응답
  } catch (e) {
    res.status(500).send(e); // 서버 오류
  }
};

// DELETE /api/todos/:id
export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    // id를 기준으로 데이터를 찾고 삭제한다
    await Todo.findByIdAndRemove(id).exec();
    res.status(204).send(); // No Content -> 응답할 데이터는 없음
  } catch (e) {
    res.status(500).send(e); // 서버 오류
  }
};
