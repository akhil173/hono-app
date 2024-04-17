import { useSetRecoilState } from "recoil";
import { todosAtomFamily } from "../store/atoms/todos";
import { useState } from "react";

export function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const setTodos = useSetRecoilState(todosAtomFamily);

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <button
        style={{
          padding: 5,
          margin: 10,
        }}
        onClick={(e) => {
          e.preventDefault();
          setTodos((todos) => [...todos, {title, description}]);
        }}
      >
        Add Todo
      </button>
  </div>
  )
}