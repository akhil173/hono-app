// instead of passing props, we destructure props and pass it as {todos}

export function Todos({todos}) {
  return(
  <div>
    {todos.map((todo) => {
      return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button disabled={todo.completed}>{todo.completed? "Completed" : "Mark as Complete"}</button>
             </div>
    })}
  </div>
  )
}