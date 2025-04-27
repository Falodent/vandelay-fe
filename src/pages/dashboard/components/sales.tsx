import { Box, Stack } from "@mui/material";

// components
import AreaChart from "@/components/charts/area-chart";
import Typography from "@/components/typography";

const Sales = () => {
  return (
    <Box className="w-full max-w-[922px] h-[445px] bg-white shadow-active rounded-[15px] py-7 flex flex-col justify-between">
      <Stack spacing="6px" pr="19px" pl="21px">
        <Typography variant="h4" weight="bold">
          Sales overview
        </Typography>

        <Stack direction="row" alignItems="center" spacing="2.5px">
          <Typography variant="span" color="green" weight="bold">
            (+5) more{" "}
            <Typography variant="span" color="grey">
              in 2021
            </Typography>
          </Typography>
        </Stack>
      </Stack>

      <AreaChart />
    </Box>
  );
};

export default Sales;
