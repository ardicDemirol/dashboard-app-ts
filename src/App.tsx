import "./App.css";
import CardExample from "./CardExample";
import { ChartDoughnutAndPieExample } from "./ChartDoughnutAndPieExample";

function App() {
  return (
    <div style={{ display: "flex", gap: "32px" }}>
      <ChartDoughnutAndPieExample />
      <CardExample />
    </div>
  );
}

export default App;
