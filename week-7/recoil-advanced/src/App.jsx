import { RecoilRoot } from "recoil";
import "./App.css";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <RecoilRoot>
      <TopBar />
    </RecoilRoot>
  );
}

export default App;
