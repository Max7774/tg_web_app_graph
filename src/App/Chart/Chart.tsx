import { options } from "./data";
import { useEffect } from "react";
import ApexCharts from "apexcharts";
import Header from "../Header/Header";
import cn from "clsx";
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
    <div
      className={cn("w-full bg-bg-color rounded-2xl shadow-xl p-4 md:p-6", {
        "shadow-darkShadow":
          window.Telegram.WebApp.themeParams.bg_color !== "#FFFFFF",
      })}
    >
      <Header>
        История состава тела:
        {window.Telegram.WebApp.initDataUnsafe.user.first_name}
      </Header>
      <div id="line-chart"></div>
    </div>
  );
};

export default Chart;
