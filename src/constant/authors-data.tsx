// Members
import Author1 from "@/assets/png/author1.png";
import Author2 from "@/assets/png/author2.png";
import Author3 from "@/assets/png/author3.png";
import Author4 from "@/assets/png/author4.png";
import Author5 from "@/assets/png/author5.png";
import Author6 from "@/assets/png/author6.png";

interface Author {
  avatar: string;
  name: string;
  email: string;
  position: string;
  department: string;
  status: "Online" | "Offline";
  date: string;
}

export const authorHeaders = ["Author", "Function", "Status", "Employed", ""];

export const authorData: Author[] = [
  {
    avatar: Author1,
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    position: "Manager",
    department: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    avatar: Author2,
    name: "Sidra Holland",
    email: "sidra@vandelay.com",
    position: "Programmer",
    department: "Developer",
    status: "Offline",
    date: "14/06/21",
  },
  {
    avatar: Author3,
    name: "Cosmo Kramer",
    email: "kramer@vandelay.com",
    position: "Executive",
    department: "Projects",
    status: "Online",
    date: "14/06/21",
  },
  {
    avatar: Author4,
    name: "Newman",
    email: "newman@usps.com",
    position: "Manager",
    department: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    avatar: Author5,
    name: "Frank Costanza",
    email: "frank@vandelay.com",
    position: "Programmer",
    department: "Developer",
    status: "Offline",
    date: "14/06/21",
  },
  {
    avatar: Author6,
    name: "Art VanDelay",
    email: "art.ie@vandelay.com",
    position: "Designer",
    department: "UI/UX Design",
    status: "Offline",
    date: "14/06/21",
  },
];
