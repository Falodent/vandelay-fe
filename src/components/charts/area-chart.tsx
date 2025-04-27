import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const ApexAreaChart = () => {
  const series = [
    {
      name: "Front Curve",
      data: [180, 220, 210, 350, 370, 480, 430, 300, 350, 220, 400, 430],
    },
    {
      name: "Back Curve",
      data: [500, 160, 180, 270, 210, 230, 240, 200, 200, 120, 170, 130],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#4FD1C5", "#2D3748"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        stroke: {
          color: "#E2E8F0",
          dashArray: 5,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      tickAmount: 5,
      min: 0,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <Box sx={{ width: "100%", height: "330px" }} className="pr-1 sm:px-2">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
      />
    </Box>
  );
};

export default ApexAreaChart;
