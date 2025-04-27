import { Link } from "react-router-dom";
import clsx from "clsx";
import { Box } from "@mui/material";

// components
import Typography from "../typography";

// types
import { Links } from "@/types/navbar";

const SideLink = ({ icon, text, path, active, handleClick }: Links) => {
  const isActive = active === text;
  return (
    <Link
      to={path}
      className={clsx(
        "px-4 rounded-[15px] flex items-center gap-3",
        isActive && "h-13.5 bg-white shadow-active cursor-default"
      )}
      onClick={handleClick}
    >
      <Box
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={
          isActive ? "bg-teal-100 text-white" : "bg-white text-teal-100"
        }
      >
        {icon}
      </Box>

      <Typography
        variant="span"
        color={isActive ? "dark" : "grey"}
        weight="bold"
      >
        {text}
      </Typography>
    </Link>
  );
};

export default SideLink;
