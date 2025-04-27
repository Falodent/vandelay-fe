import clsx from "clsx";
import { Box, Stack } from "@mui/material";

// assets
import Help from "@/assets/svg/help.svg";
import Banner from "@/assets/png/support-banner.png";

// components
import Dropdown from "@/animated/dropdown";
import Typography from "../typography";
import Button from "../button";

interface Props {
  isOpen: boolean;
}

const Support = ({ isOpen }: Props) => {
  return (
    <Dropdown
      className={clsx(
        "w-[218px] lg:mx-auto rounded-[15px] p-4 bg-teal-100 relative lg:flex flex-col items-start gap-[21.5px]",
        isOpen ? "flex" : "hidden"
      )}
    >
      <Box
        component="img"
        src={Banner}
        alt="support banner"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          width: "30px",
          height: "30px",
          position: "relative",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          color: "#4fd1c5",
        }}
      >
        <Box component="img" src={Help} alt="support" />
      </Box>

      <Stack direction="column" position="relative" spacing="8.5px">
        <Box>
          <Typography variant="span" color="white" weight="bold">
            Need help?
          </Typography>
          <Typography variant="h6" color="white">
            Please check our docs
          </Typography>
        </Box>

        <Button variant="side" color="white">
          DOCUMENTATION
        </Button>
      </Stack>
    </Dropdown>
  );
};

export default Support;
