import { useState, memo } from "react";
import axios from "axios";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch(`http://localhost:3000/todos`)
      .then(async (res) => {
        const jsonResponse = await res.json();
        console.log(jsonResponse.todos);
        setTodos(jsonResponse.todos);
        console.log(todos);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <CreateTodo onAddTodo={getTodos} />
      <br></br>
      <br></br>
      <TodoComponent todos={todos} onUpdateTodo={getTodos} />
    </>
  );
}

const TodoComponent = memo(Todos);

export default App;
