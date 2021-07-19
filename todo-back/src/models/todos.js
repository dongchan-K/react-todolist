import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodosSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  content: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todos = mongoose.model('Todos', TodosSchema);

export default Todos;
