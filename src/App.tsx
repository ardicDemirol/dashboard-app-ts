import "./App.css";
import CardExample from "./CardExample";
import { ChartDoughnutAndPieExample } from "./ChartDoughnutAndPieExample";

function App() {
  return (
    <div className="main-layout">
      <div className="chart-fixed">
        <ChartDoughnutAndPieExample />
      </div>
      <CardExample />
    </div>
  );
}

export default App;
