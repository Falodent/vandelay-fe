import { Box } from "@mui/material";
import ApexCharts from "react-apexcharts";

const BarChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "7px",
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
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
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "10px",
        },
      },
      tickAmount: 5,
      min: 0,
    },
    grid: {
      show: false,
    },
    fill: {
      colors: ["#FFFFFF"],
    },
    tooltip: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [320, 230, 110, 300, 500, 410, 480, 290, 180],
    },
  ];

  return (
    <Box
      sx={{ width: "100%", height: "222px", borderRadius: "12px", py: "12px" }}
      className="dark-gradient"
    >
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="190px"
        width="100%"
      />
    </Box>
  );
};

export default BarChart;
