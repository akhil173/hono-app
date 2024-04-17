import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, isCountEven } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  console.info("re rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <TextRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("count buttons rerendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}>
        Decrement
      </button>
    </div>
  );
}

function TextRenderer() {
  const countEven = useRecoilValue(isCountEven);
  console.info("text rerendered");
  return countEven && <div>It is even</div>;
}

export default App;
