import { format, parseISO } from "date-fns";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function transformDataForChart(inputData: any) {
  const series = [
    { name: "Общий вес", data: [], color: "#1A56DB" },
    { name: "Масса жира", data: [], color: "#7E3AF2" },
    { name: "Мышечная масса", data: [], color: "#75e3ff" },
  ];

  const categories: any = [];

  inputData.forEach((entry: any) => {
    const date = parseISO(entry.created_at);
    const formattedDate = format(date, "dd MMM"); // Пример формата даты: '12 Aug'

    categories.push(formattedDate);
    (series[0].data as any).push(entry.weight);
    (series[1].data as any).push(entry.fat_mass);
    (series[2].data as any).push(entry.muscle_mass);
  });

  // Добавляем 0 в начало массива data, если он содержит только одно значение
  series.forEach((serie: any) => {
    if (serie.data.length === 1) {
      serie.data.unshift(0);
    }
  });

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
    series: series,
    legend: {
      show: false,
    },
    stroke: {
      width: 6,
      curve: "smooth",
    },
    xaxis: {
      categories:
        categories.length === 1 ? ["Начало", ...categories] : categories,
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
  };

  return options;
}
