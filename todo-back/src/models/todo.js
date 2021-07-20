import mongoose from 'mongoose';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const { Schema } = mongoose;

// 한국 시간으로 바꿔서 기본값으로 지정
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const TodosSchema = new Schema({
  content: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: dayjs().format('YYYY-MM-DD'),
  },
});

const Todo = mongoose.model('Todo', TodosSchema);

export default Todo;
