import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomCounter count={count} setCount={setCount} />
    </div>
  );
}

function CustomCounter(props) {
  const onClickHandler = () => {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>Count is {props.count}</button>
  )
}

export default App;
