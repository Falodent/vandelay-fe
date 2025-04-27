import { Box, Stack } from "@mui/material";

// assets
import Banner from "@/assets/png/chakra-banner.png";

// components
import ReadMore from "@/components/read-more";
import Typography from "@/components/typography";

const Purity = () => {
  return (
    <Box className="w-full max-w-[922px] lg:h-[290px] bg-white shadow-active rounded-[15px] p-[17.5px] pl-[21px] flex flex-col gap-4 md:flex-row justify-between">
      <Stack spacing="16px" className="md:justify-between">
        <Stack spacing="4px">
          <Typography variant="h6" color="grey" weight="bold">
            Built by developers
          </Typography>
          <Typography variant="h4" weight="bold">
            Purity UI Dashboard
          </Typography>
          <Typography
            variant="span"
            color="grey"
            className="max-w-[330px] block"
          >
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </Typography>
        </Stack>

        <ReadMore />
      </Stack>

      <Box
        component="img"
        src={Banner}
        alt="chakra banner"
        className="w-full md:w-[40%] md:max-w-[360px] h-auto sm:h-[230px] lg:h-full object-cover rounded-xl"
        loading="lazy"
      />
    </Box>
  );
};

export default Purity;
