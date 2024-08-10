import { options } from "./data";
import { useEffect } from "react";
import ApexCharts from "apexcharts";
import Header from "../Header/Header";
import cn from "clsx";
import { CgGym } from "react-icons/cg";
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
    <>
      <div
        className={cn(
          "w-full bg-bg-color rounded-2xl shadow-xl shadow-lightShadow p-4 md:p-6",
          {
            "shadow-darkShadow":
              window.Telegram.WebApp.themeParams.bg_color !== "#FFFFFF",
          }
        )}
      >
        <Header>
          История состава тела:
          {/* {window.Telegram.WebApp.initDataUnsafe.user.first_name} */}
        </Header>
        <div id="line-chart"></div>
      </div>
      <div
        className={cn(
          "w-full mt-10 bg-bg-color rounded-2xl shadow-xl shadow-lightShadow p-4 md:p-6",
          {
            "shadow-darkShadow":
              window.Telegram.WebApp.themeParams.bg_color !== "#FFFFFF",
          }
        )}
      >
        <div className="flex flex-row items-center mt-3 mx-10 gap-3">
          <div className="bg-[#1A56DB] rounded-full h-[15px] w-[15px]"></div>
          Общий вес
        </div>
        <div className="flex flex-row items-center my-3 mx-10 gap-3">
          <div className="bg-[#7E3AF2] rounded-full h-[15px] w-[15px]"></div>
          Масса жира
        </div>
        <div className="flex flex-row items-center my-3 mx-10 gap-3">
          <div className="bg-[#75e3ff] rounded-full h-[15px] w-[15px]"></div>
          Мышечная масса
        </div>
      </div>
      <div className="flex justify-center">
        <CgGym size={300} />
      </div>
    </>
  );
};

export default Chart;
