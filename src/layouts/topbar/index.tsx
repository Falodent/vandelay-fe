import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";

// assets
import ProfileIcon from "@/assets/icons/navbar/profile-icon";
import Settings from "@/assets/svg/settings.svg";
import BellIcon from "@/assets/icons/bell-icon";

// components
import Breadcrumb from "@/components/breadcrumbs";
import Typography from "@/components/typography";
import Search from "@/components/search";

interface TopbarProps {
  pageTitle: string;
}

const Topbar = ({ pageTitle }: TopbarProps) => {
  return (
    <div className="w-full lg:h-13.5 flex flex-col gap-4 sm:flex-row justify-between items-start lg:px-4">
      <Box>
        <Breadcrumb pageTitle={pageTitle} />

        <Typography variant="span" weight="bold">
          {pageTitle}
        </Typography>
      </Box>

      <Stack direction="row" alignItems="center" spacing="18px">
        <Search />

        <Link to="/signin" className="flex items-center gap-1 text-grey-300">
          <ProfileIcon />
          <Typography variant="h6" weight="bold" className="text-grey-300">
            Sign In
          </Typography>
        </Link>

        <button
          aria-label="notification"
          type="button"
          className="cursor-pointer text-grey-300"
        >
          <BellIcon />
        </button>

        <button aria-label="settings" type="button" className="cursor-pointer">
          <img src={Settings} alt="settings" />
        </button>
      </Stack>
    </div>
  );
};

export default Topbar;
