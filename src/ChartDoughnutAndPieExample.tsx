import { useEffect, useRef } from "react";
import { getStyle } from "@coreui/utils";
import { CChart } from "@coreui/react-chartjs";
import { Chart } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import "./styles/ChartCard.css";

export const ChartDoughnutAndPieExample = () => {
  const chartRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current;
      if (chartInstance) {
        const { options } = chartInstance;

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle("--cui-body-color");
        }

        chartInstance.update();
      }
    };

    document.documentElement.addEventListener(
      "ColorSchemeChange",
      handleColorSchemeChange
    );

    return () => {
      document.documentElement.removeEventListener(
        "ColorSchemeChange",
        handleColorSchemeChange
      );
    };
  }, []);

  const data: ChartData<"doughnut"> = {
    labels: ["Added", "Removed"],
    datasets: [
      {
        backgroundColor: ["#28a745", "#dc3545"],
        data: [62, 16],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "center",
        labels: {
          color: getStyle("--cui-body-color"),
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <CCard className="chart-card">
      <CCardBody>
        <CCardTitle style={{ fontSize: "24px", marginTop: "5px" }}>
          Total changes
        </CCardTitle>
        <div className="chart-wrapper">
          <div className="chart-container">
            <CChart
              type="doughnut"
              data={data}
              options={options}
              ref={chartRef}
              style={{ height: "200px" }}
            />
            <div className="chart-center-text">46</div>
          </div>
          <div className="legend-text">
            <span className="added">✔ Added: 62</span>
            <span className="removed">✖ Removed: 16</span>
          </div>
        </div>
      </CCardBody>
    </CCard>
  );
};
