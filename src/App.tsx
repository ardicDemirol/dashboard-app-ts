import { useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { ChartDoughnutAndPie } from "./ChartDoughnutAndPieExample";

function App() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="main-layout">
      <div className="chart-fixed">
        <ChartDoughnutAndPie />
      </div>
      <Card />
    </div>
  );
}

export default App;
