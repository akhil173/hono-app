// instead of passing props, we destructure props and pass it as {todos}

import axios from "axios";

export function Todos({ todos, onUpdateTodo }) {
  const completeTodo = async (id) => {
    const res = await axios.put(`http://localhost:3000/completed`, {
      id: id,
    });
    if (res.status === 200) {
      onUpdateTodo();
    } else {
      alert("Error Completing todo");
    }
  };

  const deleteTodo = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:3000/todos`, {
      data: { id: id },
    });
    if (res.status === 200) {
      onUpdateTodo();
    } else {
      alert("Error Deleting todo");
    }
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div class="todo-item" key={todo.id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button
              class={
                todo.completed ? "completed-button" : "mark-complete-button"
              }
              disabled={todo.completed}
              onClick={(e) => {
                e.preventDefault();
                completeTodo(todo.id);
              }}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
            <button
              class="delete-button"
              onClick={(e) => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              Delete Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}
