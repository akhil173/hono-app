export const Todo = ({ todo }) => {
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
    </div>
  );
};
