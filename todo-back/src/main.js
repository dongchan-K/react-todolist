// dotenv를 불러옴
require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import api from './api';

// app이라는 변수로 REST End Point들을 생성하게 된다.
const app = express();

// morgan = 요청과 응답을 기록(logging)하는 미들웨어
// 개발시엔 dev, 실무에선 combined(더 자세함)
app.use(morgan('dev'));

// set 메서드로 서버에 port라는 변수를 만듬, env에 PORT가 정의되지 않았다면 기본 port = 3050
app.set('port', process.env.PORT || 3050);

// cors = cors 에러가 발생하지 않게끔 요청 또는 도메인 접근을 허용하는 미들웨어
app.use(
  cors({
    origin: process.env.FRONT_SERVER_URL,
  }),
);

// 클라이언트에서 json data를 보냈을 때 json body를 파싱해서 req body로 넣어준다.
app.use(express.json());

app.use('/api', api);
// path = 정적 파일을 제공하기 위한 미들웨어
app.use(express.static(path.join(__dirname, 'public')));

// express 서버를 실행할 때 필요한 포트 정의와 실행 시 callback 함수를 받는다.
// get 메서드로 서버에 만든 port 변수를 가져옴
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
