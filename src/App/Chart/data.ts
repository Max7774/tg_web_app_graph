export const options = {
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
  series: [
    {
      name: "Общий вес",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
    {
      name: "Масса жира",
      data: [6456, 6356, 6526, 6332, 6418, 6500],
      color: "#7E3AF2",
    },
    {
      name: "Мышечная масса",
      data: [6540, 6458, 6356, 6626, 6256, 6656],
      color: "#75e3ff",
    },
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 6,
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
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
