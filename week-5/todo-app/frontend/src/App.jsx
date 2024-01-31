import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get(`http://localhost:3000/todos`)
      .then((res) => {
        setTodos(res.todos);
        console.log(todos);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  )
}

export default App
