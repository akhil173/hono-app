import { useRecoilStateLoadable, useRecoilValue } from "recoil";
import { renderedTodos, todosAtomFamily} from "../store/atoms/todos";
import {PropTypes} from 'prop-types';

// export function TodosRenderer() {
//   const todos = useRecoilValue(renderedTodos);
//   let count = 0;

//   return (
//     <div>
//       {todos.map((todo) => {
//         console.log(todo);
//         return(
//           <Todo key={count++} title={todo.title} description={todo.description} />
//         )
//       })}
//     </div>
//   )
// }


export function Todo({id}) {
  // console.log(todos);
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  console.info(todo);
  if (todo.state === 'loading') {
    return <div>loading</div>
  }
  else if (todo.state === 'hasValue') {
    return (
      <div>
        <h2>{todo.contents.title}</h2>
        <p>{todo.contents.description}</p>
      </div>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number
}