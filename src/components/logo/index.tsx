import clsx from "clsx";
import { Stack } from "@mui/material";

// assets
import LogoIcon from "@/assets/icons/logo-icon";

//components
import Typography from "../typography";

const Logo = ({ variant }: { variant?: "white" | "dark" }) => {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      role="banner"
      className={clsx(
        variant === "white" && "text-white",
        variant === "dark" && "text-dark-100"
      )}
    >
      <LogoIcon />

      <Typography
        variant="span"
        weight="bold"
        color={variant}
        className="whitespace-nowrap"
      >
        VANDELAY INDUSTRIES
      </Typography>
    </Stack>
  );
};

export default Logo;
