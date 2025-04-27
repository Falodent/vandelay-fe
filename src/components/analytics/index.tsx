import { Box } from "@mui/material";

// component
import Typography from "../typography";

// types
import { AnalyticsData } from "@/types/dashboard";

const Analytics = ({ title, figure, icon, positive, rate }: AnalyticsData) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 80,
        bgcolor: "white",
        borderRadius: "15px",
        pl: "21.5px",
        pr: "17.5px",
        flexShrink: 0,
      }}
      className="max-w-[250px] xl:max-w-[382px] shadow-active flex items-center justify-between"
    >
      <Box>
        <Typography variant="h6" color="grey">
          {title}
        </Typography>

        <Box className="flex items-end gap-[5px]">
          <Typography variant="h4" weight="bold">
            {figure}
          </Typography>
          <Typography
            variant="span"
            weight="bold"
            color={positive ? "green" : "red"}
            className="pb-0.5"
          >
            {rate}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ width: "45px", height: "45px", borderRadius: "12px" }}
        className="flex items-center justify-center bg-teal-100 text-white"
      >
        {icon}
      </Box>
    </Box>
  );
};

export default Analytics;
