import clsx from "clsx";
import { useState } from "react";
import { Stack } from "@mui/material";

// components
import Dropdown from "@/animated/dropdown";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import SideLink from "@/components/sidelink";
import Support from "@/components/support";
import Typography from "@/components/typography";

// constant
import { accountLinks, sideLinks } from "@/constant/menu-links";

const Sidebar = ({ pageTitle }: { pageTitle: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "w-full lg:h-screen overflow-y-auto pt-5 lg:pt-11 flex justify-center md:justify-start",
        isOpen ? "h-screen fixed bg-grey-200 z-20" : "h-auto"
      )}
      role="navigation"
    >
      <Stack
        spacing="20px"
        alignItems="start"
        px="16px"
        className="w-full lg:w-[246.5px] mx-auto"
      >
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo variant="dark" />

          <Menu isOpen={isOpen} setIsOpen={setIsOpen} variant="dark" />
        </Stack>

        <div className="w-full h-[1px] line-gradient mt-2" />

        <Dropdown
          className={clsx(
            "w-full max-w-[400px] lg:flex flex-col gap-6 mb-12",
            isOpen ? "flex" : "hidden"
          )}
        >
          {sideLinks.map((item) => (
            <SideLink
              key={item.id}
              icon={item.icon}
              text={item.text}
              path={item.path}
              active={pageTitle}
              handleClick={() => setIsOpen(false)}
            />
          ))}

          <Typography
            variant="span"
            weight="bold"
            className="pl-2 md:pl-4 text-sm md:text-base"
          >
            ACCOUNT PAGES
          </Typography>

          {accountLinks.map((item) => (
            <SideLink
              key={item.id}
              icon={item.icon}
              text={item.text}
              path={item.path}
              active={pageTitle}
              handleClick={() => setIsOpen(false)}
            />
          ))}
        </Dropdown>

        <Support isOpen={isOpen} />
      </Stack>
    </div>
  );
};

export default Sidebar;
