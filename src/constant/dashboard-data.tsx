import CartIcon from "@/assets/icons/cart-icon";
import FileIcon from "@/assets/icons/file-icon";
import GlobeIcon from "@/assets/icons/globe-icon";
import WalletIcon from "@/assets/icons/wallet-icon";

// types
import { AnalyticsData } from "@/types/dashboard";

export const analyticsData: AnalyticsData[] = [
  {
    icon: <WalletIcon />,
    title: "Today's Money",
    figure: "$53,000",
    positive: true,
    rate: "+55%",
  },
  {
    icon: <GlobeIcon />,
    title: "Today's Users",
    figure: "2,300",
    positive: true,
    rate: "+5%",
  },
  {
    icon: <FileIcon />,
    title: "New Clients",
    figure: "+3,052",
    positive: false,
    rate: "-14%",
  },
  {
    icon: <CartIcon />,
    title: "Total Sales",
    figure: "$173,000",
    positive: true,
    rate: "+8%",
  },
];
