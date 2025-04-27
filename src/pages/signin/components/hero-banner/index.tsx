import { Box } from "@mui/material";

// assets
import Banner from "@/assets/webp/chakra-banner.webp";

const HeroBanner = () => {
  return (
    <Box className="min-w-[380px] w-[50%] max-w-[862px] h-[872px] absolute top-0 right-0 hidden lg:flex">
      <Box
        component="img"
        src={Banner}
        alt="Hero Banner"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderBottomLeftRadius: "25px",
        }}
        loading="eager"
      />
    </Box>
  );
};

export default HeroBanner;
