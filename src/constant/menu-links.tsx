// navbar assets
import DashboardIcon from "@/assets/icons/navbar/dashboard-icon";
import ProfileIcon from "@/assets/icons/navbar/profile-icon";
import SigninIcon from "@/assets/icons/navbar/signin-icon";
import SignupIcon from "@/assets/icons/navbar/signup-icon";
import BillingIcon from "@/assets/icons/sidebar/billing-icon";

// sidebar assets
import HomeIcon from "@/assets/icons/sidebar/home-icon";
import LoginIcon from "@/assets/icons/sidebar/login-icon";
import RegisterIcon from "@/assets/icons/sidebar/register-icon";
import SettingIcon from "@/assets/icons/sidebar/setting-icon";
import TableIcon from "@/assets/icons/sidebar/table-icon";

// types
import { Links } from "@/types/navbar";

export const navLinks: Links[] = [
  { id: 1, icon: <DashboardIcon />, text: "Dashboard", path: "/dashboard" },
  {
    id: 2,
    icon: <ProfileIcon />,
    text: "Profile",
    path: "/dashboard/profile",
  },
  { id: 3, icon: <SignupIcon />, text: "Sign Up", path: "/" },
  { id: 4, icon: <SigninIcon />, text: "Sign In", path: "/signin" },
];

export const sideLinks: Links[] = [
  { id: 1, icon: <HomeIcon />, text: "Dashboard", path: "/dashboard" },
  {
    id: 2,
    icon: <TableIcon />,
    text: "Tables",
    path: "/dashboard/tables",
  },
  {
    id: 3,
    icon: <BillingIcon />,
    text: "Billing",
    path: "/dashboard/billing",
  },
  {
    id: 4,
    icon: <SettingIcon />,
    text: "RTL",
    path: "/dashboard/settings",
  },
];

export const accountLinks: Links[] = [
  {
    id: 5,
    icon: <ProfileIcon size="15" />,
    text: "Profile",
    path: "/dashboard/profile",
  },
  { id: 6, icon: <LoginIcon />, text: "Sign In", path: "/signin" },
  { id: 7, icon: <RegisterIcon />, text: "Sign Up", path: "/" },
];
