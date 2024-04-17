import { useRecoilValue } from "recoil";
import { renderedTodos} from "../store/atoms/todos";
import {PropTypes} from 'prop-types';

export function TodosRenderer() {
  const todos = useRecoilValue(renderedTodos);
  let count = 0;

  return (
    <div>
      {todos.map((todo) => {
        console.log(todo);
        return(
          <Todo key={count++} title={todo.title} description={todo.description} />
        )
      })}
    </div>
  )
}


export function Todo({title, description}) {
  // console.log(todos);
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

Todo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}