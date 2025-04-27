import { Outlet, useLocation } from "react-router-dom";

// components
import Entrance from "@/animated/entrance";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import Footer from "../footer";

// helpers
import { getPageTitle } from "@/helpers/getPageTitle";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <Entrance className="w-full lg:h-screen bg-grey-200 lg:overflow-y-hidden grid lg:grid-cols-[280px_auto]">
      <Sidebar pageTitle={pageTitle} />

      <Stack
        spacing={6}
        className="h-screen py-[23.5px] px-5 lg:pl-8 lg:pr-[22px] overflow-y-scroll"
      >
        <Topbar pageTitle={pageTitle} />
        <Stack spacing={7}>
          <Outlet />
          <Footer align="between" />
        </Stack>
      </Stack>
    </Entrance>
  );
};

export default DashboardLayout;
