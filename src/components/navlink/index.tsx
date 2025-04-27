import { Link } from "react-router-dom";
import clsx from "clsx";

// components
import Typography from "../typography";

// types
import { Links } from "@/types/navbar";

const Navlink = ({ icon, path, text, variant }: Links) => {
  return (
    <Link
      to={path}
      className={clsx(
        "flex items-center gap-2",
        variant === "white" && "text-white",
        variant === "dark" && "text-dark-100"
      )}
    >
      {icon}
      <Typography
        variant="label"
        color={variant}
        weight="bold"
        className="uppercase cursor-pointer"
      >
        {text}
      </Typography>
    </Link>
  );
};

export default Navlink;
