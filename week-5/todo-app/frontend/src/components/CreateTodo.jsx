import axios from "axios";
import { useEffect, useState } from "react";

export function CreateTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postTodo = async (titleValue, descValue) => {
    const res = await axios.post(`http://localhost:3000/todos`, {
      title: titleValue,
      description: descValue,
    });

    if (res.status === 200) {
      onAddTodo();
    } else {
      alert("Error adding todo");
    }
    // console.log(res);

    // alert("Todo Added");
  };

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
          postTodo(title, description);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
