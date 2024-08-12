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
  legend: {
    show: false,
  },
  stroke: {
    width: 6,
    curve: "smooth",
  },
  yaxis: {
    show: false,
  },
};
