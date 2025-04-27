import CartIcon from "@/assets/icons/cart-icon";
import RegisterIcon from "@/assets/icons/sidebar/register-icon";
import SettingIcon from "@/assets/icons/sidebar/setting-icon";
import WalletIcon from "@/assets/icons/wallet-icon";

interface Overview {
  icon: React.ReactElement;
  title: string;
  figure: string;
  completion: number;
}

export const userOverview: Overview[] = [
  {
    icon: <WalletIcon size="12.5" />,
    title: "Users",
    figure: "32,984",
    completion: 65,
  },
  {
    icon: <RegisterIcon size="12.5" />,
    title: "Clicks",
    figure: "2,42m",
    completion: 85,
  },
  {
    icon: <CartIcon size="12.5" />,
    title: "Sales",
    figure: "2,400$",
    completion: 35,
  },
  {
    icon: <SettingIcon size="12.5" />,
    title: "Items",
    figure: "320",
    completion: 65,
  },
];
