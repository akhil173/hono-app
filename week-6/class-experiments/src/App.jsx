import { useState, memo, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { CardWrapper } from "./CardWrapper";
import { Todo } from "./Todo";

let count = 0;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        console.log(res);
        setTodos(res.data.todos);
      });
      // console.log(res.data.todos);
      // setTodos(res.data.todos);
      // console.log(res);
    }, 10000);
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return (
          <CardWrapper key={todo.id}>
            <Todo todo={todo} />
          </CardWrapper>
        );
      })}
    </>
  );
}

export default App;
