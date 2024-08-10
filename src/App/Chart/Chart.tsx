import { options } from "./data";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import Header from "../UI/Header/Header";
import cn from "clsx";
import { CgGym } from "react-icons/cg";

const Chart = () => {
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    if (window.Telegram.WebApp.themeParams.bg_color === "#ffffff") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.Telegram.WebApp.themeParams.bg_color]);

  return (
    <>
      <div
        className={cn(
          "w-full bg-bg-color rounded-[30px] shadow-xl p-4 md:p-6",
          {
            "shadow-darkShadow": theme === "dark",
            "shadow-lightShadow": theme === "light",
          }
        )}
      >
        <Header>
          История состава тела:
          {window.Telegram.WebApp.initDataUnsafe.user.first_name}
        </Header>

        {/* ======== График ========== */}

        <div id="line-chart"></div>

        {/* ========================== */}

        <div className="flex justify-center">
          <div className="h-[1px] bg-gray w-5/6 my-3"></div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#1A56DB] rounded-full h-[15px] w-[15px]"></div>
            <div className="text-mainText text-nowrap">Вес</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#7E3AF2] rounded-full h-[15px] w-[15px]"></div>
            <div className="text-mainText text-nowrap">Масса жира</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#75e3ff] rounded-full h-[15px] w-[15px]"></div>
            <div className="text-mainText text-nowrap">Мышечная масса</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <CgGym color={theme === "dark" ? "white" : "black"} size={300} />
      </div>
    </>
  );
};

export default Chart;
