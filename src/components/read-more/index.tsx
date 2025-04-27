import { Link } from "react-router-dom";
import clsx from "clsx";

// assets
import ArrowRight from "@/assets/icons/arrow-right";

// tyopes
import Typography from "../typography";

const ReadMore = ({ color = "dark" }: { color?: "white" | "dark" }) => {
  return (
    <Link
      to="/read"
      className={clsx(
        "flex items-center gap-[5px]",
        color === "white" && "text-white",
        color === "dark" && "text-dark-100"
      )}
    >
      <Typography variant="h6" weight="bold" color={color}>
        Read more
      </Typography>
      <ArrowRight />
    </Link>
  );
};

export default ReadMore;
