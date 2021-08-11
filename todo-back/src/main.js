import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import api from './api';

// dotenv를 불러옴
require('dotenv').config();

const { PORT, FRONT_SERVER_URL, MONGO_URL } = process.env;

// connect 메서드를 사용해 서버와 DB 연결
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// app이라는 인스턴스로 REST End Point들을 생성하게 된다.
const app = express();

// morgan = 요청과 응답을 기록(logging)하는 미들웨어 적용
// 개발시엔 dev, 실무에선 combined(더 자세함)
app.use(morgan('combined'));

// set 메서드로 서버에 port라는 변수를 만듬, env에 PORT가 정의되지 않았다면 기본 port = 3050
app.set('port', PORT || 3050);

// cors = cors 에러가 발생하지 않게끔 요청 또는 도메인 접근을 허용하는 미들웨어 적용
app.use(
  cors({
    origin: FRONT_SERVER_URL,
  }),
);

// json = 요청 body의 application/json 구문분석을 위한 미들웨어
app.use(express.json());
// unrencoded = 요청 body의 application/x-www-form-urlencoded 구문분석을 위한 미들웨어
app.use(express.urlencoded({ extended: true })); // true면 qs, false면 querystring 라이브러리 사용

// 라우터 적용
app.use('/api', api);
// path = 정적 파일을 제공하기 위한 미들웨어 적용
app.use(express.static(path.join(__dirname, 'public')));

// express 서버를 실행할 때 필요한 포트 정의와 실행 시 callback 함수를 받는다.
// get 메서드로 서버에 만든 port 변수를 가져옴
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
