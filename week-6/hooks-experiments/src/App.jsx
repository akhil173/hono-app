import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const fn = useCallback(() => {
      console.log("hi there");
    }, [])

    let count = useMemo(() => {
      console.log("memo got called");
      let sum = 0;
      for(let i=1; i<=inputValue; i++) {
        sum = sum+i;
      }
      return sum;
    }, [inputValue])

  return (
    <>
      <input 
        onChange={e => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
      ></input>
      <br />
      Sum is : {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>Counter is : {counter}</button>
      <br />
      <Demo fn={fn} />
    </>
  )
}

const Demo = memo(({fn}) => {
  console.log("rerender");
  return <div>
    hi there
  </div>
});


// function Todo({title, description}) {
//   return <div>
//     <h1>{title}</h1>
//     {description}
//   </div>
// }

// function TodoById({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then((response) => {
//       console.log(response.data)
//       setTodo(response.data.todo);
//     })
//   }, [id])

//   return <div>
//     <h1>{todo.title}</h1>
//     {todo.description}
//   </div>
// }

export default App
