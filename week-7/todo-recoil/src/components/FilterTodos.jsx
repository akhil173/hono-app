import { useSetRecoilState } from "recoil";
import { filterTodosAtom } from "../store/atoms/todos";

export function FilterTodos() {
  const setFilterTodoString = useSetRecoilState(filterTodosAtom);

  return(
    <div>
      <h3>Filter</h3>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setFilterTodoString(e.target.value);
        }}
      ></input>
      <br />
    </div>
  )
}