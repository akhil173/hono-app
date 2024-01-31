/**
 * Todo Schema :
 *
 * Todo {
 *    title: string,
 *    description: string,
 *    completed: boolean
 * }
 */

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:akhil03@test-cluster.sogwx0r.mongodb.net/todo_app"
);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todos", TodoSchema);

module.exports = {
  todo: Todo,
};
