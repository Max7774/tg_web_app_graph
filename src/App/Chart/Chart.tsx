import { options } from "./data";
import { useEffect } from "react";
import ApexCharts from "apexcharts";
import Header from "../Header/Header";

const Chart = () => {
  useEffect(() => {
    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        options
      );
      chart.render();
    }
  }, []);
  return (
    <div className="w-full bg-bg-color rounded-2xl shadow-xl dark:bg-gray-1000 p-4 md:p-6">
      <Header>История состава тела User</Header>
      <div id="line-chart"></div>
    </div>
  );
};

export default Chart;
