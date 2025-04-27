import BellIcon from "@/assets/icons/bell-icon";
import CartIcon from "@/assets/icons/cart-icon";
import BillingIcon from "@/assets/icons/sidebar/billing-icon";
import Xd from "@/assets/svg/company1.svg";
import HTML from "@/assets/svg/html.svg";
import Dropbox from "@/assets/svg/dropbox.svg";

interface Order {
  icon: React.ReactElement;
  title: string;
  date: string;
  color: string;
}

export const ordersOverview: Order[] = [
  {
    icon: (
      <div className="text-teal-100">
        <BellIcon size="16" />
      </div>
    ),
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "#4caf50",
  },
  {
    icon: <img src={HTML} alt="xd" className="w-4 h-4" />,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "#f44336",
  },
  {
    icon: (
      <div className="text-blue-100">
        <CartIcon size="16" />
      </div>
    ),
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "#2196f3",
  },
  {
    icon: (
      <div className="text-orange-100">
        <BillingIcon />
      </div>
    ),
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "#ff9800",
  },
  {
    icon: <img src={Dropbox} alt="xd" className="w-4 h-4" />,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "#9c27b0",
  },
  {
    icon: <img src={Xd} alt="xd" className="w-5 h-[19.5px]" />,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    color: "#e91e63",
  },
];
