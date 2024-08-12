import { options } from "./data";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import Header from "../UI/Header/Header";
import cn from "clsx";
import { CgGym } from "react-icons/cg";
import Card from "../UI/Card/Card";
import Eat from "../UI/Icons/Eat";
import Sleep from "../UI/Icons/Sleep";
import EatingMan from "../UI/Img/EatingMan";
import { useAppSelector } from "../../hooks/useAppSelector";

const Chart = () => {
  const [theme, setTheme] = useState("light");

  const { data } = useAppSelector((state) => state.chart);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resultOptions = {
    ...options,
    ...data,
  };

  useEffect(() => {
    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        resultOptions
      );
      chart.render();
    }
  }, [resultOptions]);

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
          История состава тела:{" "}
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

      {/* ======== Список карт ========== */}

      <div className="mt-9">
        <Card
          Icon={<EatingMan />}
          theme={theme}
          text="Тренируйся так, как будто завтра не существует!"
          className="animate-slideInLeft"
        />
        <Card
          Icon={<Eat color={theme === "dark" ? "white" : "black"} />}
          theme={theme}
          text="Ешь правильно, тренируйся усердно — достигай величия!"
          className="animate-slideInRight"
        />
        <Card
          Icon={<Sleep color={theme === "dark" ? "white" : "black"} />}
          theme={theme}
          text="Чаще спите для большей продуктивности!"
          className="animate-slideInLeft"
        />
      </div>

      {/* ========================== */}

      <div className="flex justify-center">
        <CgGym color={theme === "dark" ? "white" : "black"} size={300} />
      </div>
    </>
  );
};

export default Chart;
