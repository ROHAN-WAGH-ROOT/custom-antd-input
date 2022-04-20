import "./styles.css";
import { AntdCustom } from "../src/custom/index";
export default function App() {
  return (
    <div className="App">
      <AntdCustom
        autoFocus
        label="rohan"
        required
        placeholder="Enter Something ..."
        requiredStarClass="astericClass"
      />
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
