import { Box } from "@mui/material";

// components
import Analytics from "@/components/analytics";

// constant
import { analyticsData } from "@/constant/dashboard-data";

const Statistics = () => {
  return (
    <Box className="w-full flex overflow-x-auto scrollbar-none xl:grid xl:grid-cols-4 gap-6 xl:justify-between">
      {analyticsData.map((item) => (
        <Analytics
          key={item.title}
          title={item.title}
          positive={item.positive}
          figure={item.figure}
          rate={item.rate}
          icon={item.icon}
        />
      ))}
    </Box>
  );
};

export default Statistics;
