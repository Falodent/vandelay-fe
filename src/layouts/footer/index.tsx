import { Stack } from "@mui/material";
import clsx from "clsx";
import { Link } from "react-router-dom";

// components
import Typography from "@/components/typography";

const Footer = ({ align = "center" }: { align?: "center" | "between" }) => {
  const year = new Date().getUTCFullYear();

  const links = [
    { path: "/about", text: "About Us" },
    { path: "/privacy", text: "Privacy" },
    { path: "/blog", text: "Blog" },
    { path: "/license", text: "License" },
  ];

  return (
    <footer
      className={clsx(
        "relative w-full flex flex-col sm:flex-row sm:items-center gap-4 px-5 xl:px-0",
        align === "center" &&
          "sm:justify-between xl:justify-center xl:gap-[453px]",
        align === "between" && "justify-between pr-[1.5px]"
      )}
    >
      <Typography variant="h6" color="grey">
        &copy; {year}, Made with Lorem for a better web
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        className={clsx(
          align === "center" && "gap-5 md:gap-13",
          align === "between" && "gap-5 md:gap-[45px]"
        )}
      >
        {links.map((item) => (
          <Link
            to={item.path}
            className="text-xs text-grey-100"
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </Stack>
    </footer>
  );
};

export default Footer;
