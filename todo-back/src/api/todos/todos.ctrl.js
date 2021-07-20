import Todo from '../../models/todo';
import mongoose from 'mongoose';
import Joi from 'joi';
import dayjs from 'dayjs';

// 할 일 조회하기
// GET /api/todos
export const read = async (req, res) => {
  try {
    // Todo 모델 인스턴스의 find 메서드를 사용하여 데이터 조회 및 sort 메서드를 사용하여 id 기준 내림차순 정렬 -> exec()를 붙여 주어야 쿼리문을 실행한다
    const todoData = await Todo.find().sort({ _id: -1 }).exec();

    res.json(todoData);
  } catch (e) {
    res.status(500).send(); // 서버 오류
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

  // 유효성 검사 실패 시, 에러처리
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
    res.status(500).send(); // 서버 오류, http 응답
  }
};

// PATCH /api/todos/:id
// {
//   isDone: boolean
// }
export const check = async (req, res) => {};

// DELETE /api/todos/:id
export const remove = async (req, res) => {};
