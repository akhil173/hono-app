import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
    const [todoId, setTodoId] = useState(1);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then((res) => {
  //     const json = res.data.todos;
  //     console.log(json);
  //     setTodos(json);
  //   })
  // }, [])

  return (
    <>
      {/* {todos} */}
      {/* {todos?.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)} */}
      <button onClick={() => setTodoId(1)}>1</button>
      <button onClick={() => setTodoId(2)}>2</button>
      <button onClick={() => setTodoId(3)}>3</button>
      <button onClick={() => setTodoId(4)}>4</button>
      <TodoById id={todoId} />
    </>
  )
}


function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}

function TodoById({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((response) => {
      console.log(response.data)
      setTodo(response.data.todo);
    })
  }, [id])

  return <div>
    <h1>{todo.title}</h1>
    {todo.description}
  </div>
}

export default App
