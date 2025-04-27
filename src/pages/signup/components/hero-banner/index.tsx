import { Box } from "@mui/material";

// assets
import Banner from "@/assets/webp/hero-banner.webp";

const HeroBanner = () => {
  return (
    <Box className="w-full h-[520px] lg:rounded-[15px] absolute lg:px-6 top-0 lg:top-6">
      <Box
        component="img"
        src={Banner}
        alt="Hero Banner"
        width="100%"
        height="100%"
        sx={{ objectFit: "cover" }}
        className="lg:rounded-[15px]"
        loading="eager"
      />
    </Box>
  );
};

export default HeroBanner;
