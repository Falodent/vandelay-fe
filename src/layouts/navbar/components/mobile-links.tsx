import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

// components
import Dropdown from "@/animated/dropdown";
import Button from "@/components/button";
import Navlink from "@/components/navlink";

// constants
import { navLinks } from "@/constant/menu-links";
import { Stack } from "@mui/material";

interface Props {
  isOpen: boolean;
  variant: "white" | "dark";
}

const MobileLinks = ({ isOpen, variant }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Dropdown
          className={clsx(
            "w-4/5 max-w-[400px] shadow-nav mx-auto rounded-[15px] fixed top-18 flex flex-col gap-8 bg-teal-100 z-10 py-8 px-5 lg:hidden",
            variant === "dark" && "bg-white top-20"
          )}
        >
          <Stack spacing="29px">
            {navLinks.map((item) => (
              <Navlink
                key={item.id}
                icon={item.icon}
                path={item.path}
                text={item.text}
                variant={variant}
              />
            ))}
          </Stack>

          <Button variant="nav" color={variant}>
            Free Download
          </Button>
        </Dropdown>
      )}
    </AnimatePresence>
  );
};

export default MobileLinks;
