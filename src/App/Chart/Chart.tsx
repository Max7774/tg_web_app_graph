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
    <div className="w-full bg-bg-color rounded-2xl shadow-xl p-4 md:p-6">
      <Header>
        История состава тела:{" "}
        {window.Telegram.WebApp.initDataUnsafe.user.first_name}
        {window.Telegram.WebApp.themeParams.bg_color}
      </Header>
      <div id="line-chart"></div>
    </div>
  );
};

export default Chart;
