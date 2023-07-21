import { Chart } from "react-google-charts";

export const data = [
  ["Week", "Guest", "User"],
  ["Week1", 390, 410],
  ["Week2", 210, 110],
  ["Week3", 300, 450],
  ["Week4", 350, 250],
  ["Week5", 200, 400],
  ["Week5", 600, 150],
];

export const options = {
  title: "Activities",
  curveType: "function",
  legend: { position: "right" },
  colors: ["#E9A0A0", "#9BDD7C"],
};

export function ChartComp() {
  return (
    <Chart
      className="mt-10 rounded-xl"
      chartType="LineChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
