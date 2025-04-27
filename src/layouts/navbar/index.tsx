import clsx from "clsx";
import { useState } from "react";

// components
import Button from "@/components/button";
import Logo from "@/components/logo";
import Navlink from "@/components/navlink";
import MobileLinks from "./components/mobile-links";
import Menu from "@/components/menu";

// constants
import { navLinks } from "@/constant/menu-links";
import { Stack } from "@mui/material";

interface NavbarProps {
  variant?: "white" | "dark";
}

const Navbar = ({ variant = "white" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={clsx(
        "w-full flex items-center justify-between xl:justify-center xl:gap-[111px] relative z-10 p-5 lg:px-10 xl:p-0",
        variant === "dark" &&
          "max-w-[987.5px] h-[70px] border-[1.5px] border-white light-gradient lg:rounded-[15px] shadow-nav backdrop-blur-[21px]",
        isOpen && "sticky top-0 z-20 bg-teal-100 shadow-nav"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Logo variant={variant} />

      <div className="hidden lg:flex items-center gap-[130.5px]" role="menu">
        <Stack direction="row" alignItems="center" spacing="29px">
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
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} variant={variant} />

      <MobileLinks isOpen={isOpen} variant={variant} />
    </nav>
  );
};

export default Navbar;
