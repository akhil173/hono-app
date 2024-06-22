import { RecoilRoot } from 'recoil'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todo } from './components/TodosRenderer'
import { FilterTodos } from './components/FilterTodos'
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('')
  return (
    <div style={{
      backgroundColor: background ? background : 'white',
      height: '100%'
    }}>
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
      <button onClick={() => setBackground('blue')}>Blue</button>
      <button onClick={() => setBackground('red')}>Red</button>
    </div>
  )
}

export default App
