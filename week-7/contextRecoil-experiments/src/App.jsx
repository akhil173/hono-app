import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

function Count () {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer () {
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons () {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
      <button onClick={() => {
        setCount(count-1);
      }}>Decrement</button>
    </div>
  )
}

export default App
