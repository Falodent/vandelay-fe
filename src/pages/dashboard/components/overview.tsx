import { Box, LinearProgress, Stack } from "@mui/material";

// components
import BarChart from "@/components/charts/bar-chart";
import Typography from "@/components/typography";

// constant
import { userOverview } from "@/constant/user-overview";

const Overview = () => {
  return (
    <Box className="w-full xl:max-w-[654px] lg:h-[445px] bg-white shadow-active rounded-[15px] p-4 pb-[30.5px] flex flex-col gap-6 overflow-x-hidden">
      <BarChart />

      <Stack spacing="6px">
        <Typography variant="h4" weight="bold">
          Active Users
        </Typography>

        <Stack direction="row" alignItems="center" spacing="2.5px">
          <Typography variant="span" color="green" weight="bold">
            (+23){" "}
            <Typography variant="span" color="grey">
              than last week
            </Typography>
          </Typography>
        </Stack>
      </Stack>

      <Box className="w-full flex gap-6 mt-[12.5px] overflow-x-auto scrollbar-none">
        {userOverview.map((item) => (
          <Stack flexShrink={0} spacing="5.5px" key={item.title}>
            <Stack direction="row" alignItems="center" spacing="10px">
              <Box
                width="25px"
                height="25px"
                borderRadius="6px"
                color="white"
                className="flex items-center justify-center bg-teal-100"
              >
                {item.icon}
              </Box>
              <Typography variant="h6" weight="bold" color="grey">
                {item.title}
              </Typography>
            </Stack>

            <Typography variant="h4" weight="bold">
              {item.figure}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={item.completion}
              sx={{
                width: 100,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#E2E8F0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#4FD1C5",
                },
              }}
            />
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default Overview;
