/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import Header from "../UI/Header/Header";
import cn from "clsx";
import { CgGym } from "react-icons/cg";
import Card from "../UI/Card/Card";
import Eat from "../UI/Icons/Eat";
import Sleep from "../UI/Icons/Sleep";
import EatingMan from "../UI/Img/EatingMan";
import { useAppSelector } from "../../hooks/useAppSelector";
import cloneDeep from "lodash/cloneDeep";

const Chart = () => {
  const [theme, setTheme] = useState("light");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>(null);

  const { data } = useAppSelector((state) => state.chart);

  const dataCopy = cloneDeep(data);

  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeout",
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
    },
    markers: {
      size: 4,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: dataCopy.series,
    legend: {
      show: false,
    },
    stroke: {
      width: 6,
      curve: "smooth",
    },
    xaxis: {
      categories: dataCopy.xaxis.categories,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  useEffect(() => {
    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      if (chartRef.current) {
        chartRef.current.updateOptions(options);
      } else {
        chartRef.current = new ApexCharts(
          document.getElementById("line-chart"),
          options
        );
        chartRef.current.render();
      }
    }
    // Очищаем график при размонтировании
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [options]);

  useEffect(() => {
    if (window.Telegram.WebApp.themeParams.bg_color === "#ffffff") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
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
