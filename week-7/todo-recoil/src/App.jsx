import { RecoilRoot } from 'recoil'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodosRenderer } from './components/TodosRenderer'
import { FilterTodos } from './components/FilterTodos'

function App() {
  // const [background, setBackground] = useState('')
  return (
    // <div style={{
    //   backgroundColor: background ? background : 'white',
    //   height: '100%'
    // }}>
     <RecoilRoot>
      {/* <AddTodo /> */}
      <FilterTodos />
      <TodosRenderer />
     </RecoilRoot>
      //  {/* <button onClick={() => setBackground('blue')}>Blue</button>
      //  <button onClick={() => setBackground('red')}>Red</button> */}
    // {/* </div> */}
  )
}

export default App
