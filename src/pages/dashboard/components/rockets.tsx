import { Box, Stack } from "@mui/material";

// assets
import Banner from "@/assets/webp/rocket-banner.webp";

// components
import ReadMore from "@/components/read-more";
import Typography from "@/components/typography";

const Rockets = () => {
  return (
    <Box className="relative w-full xl:max-w-[654px] h-[290px] p-[17.5px] rounded-[15px] bg-white shadow-active">
      <Box
        component="img"
        src={Banner}
        className="absolute w-[calc(100%-35px)] h-[255.5px] object-cover object-center rounded-xl"
        alt="rocket-banner"
      />

      <Stack
        height="100%"
        position="relative"
        padding="20px 0px 13px 21.5px"
        borderRadius="12px"
        justifyContent="space-between"
      >
        <Stack spacing="6px">
          <Typography variant="h4" weight="bold" color="white">
            Work with the Rockets
          </Typography>
          <Typography
            variant="span"
            color="white"
            className="w-4/5 max-w-[384.5px] block"
          >
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who take the opportunity first.
          </Typography>
        </Stack>

        <ReadMore color="white" />
      </Stack>
    </Box>
  );
};

export default Rockets;
