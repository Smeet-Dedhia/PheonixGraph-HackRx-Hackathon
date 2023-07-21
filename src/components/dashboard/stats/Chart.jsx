import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Loyal", "Unique"],
  ["Jan", 400, 200],
  ["Feb", 400, 200],
  ["Mar", 200, 100],
  ["Apr", 80, 110],
  ["May", 400, 250],
  ["Jun", 150, 210],
  ["Jul", 150, 180],
  ["Aug", 100, 150],
  ["Sep", 650, 450],
  ["Oct", 600, 150],
  ["Nov", 600, 150],
  ["Dec", 600, 150],
];

export const options = {
  title: "Activities",
  curveType: "function",
  legend: { position: "right" },
  colors: ["#1C62A7", "#9BDD7C"],
};

export function ChartComp() {
  return (
    <Chart
      className="rounded-lg"
      chartType="LineChart"
      width="120%"
      height="220px"
      data={data}
      options={options}
    />
  );
}
