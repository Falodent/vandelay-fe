import Company1 from "@/assets/svg/company1.svg";
import Company2 from "@/assets/svg/company2.svg";
import Company3 from "@/assets/svg/company3.svg";
import Company4 from "@/assets/svg/company4.svg";
import Company5 from "@/assets/svg/company5.svg";
import Company6 from "@/assets/svg/company6.svg";

// Members
import Member1 from "@/assets/png/member1.png";
import Member2 from "@/assets/png/member2.png";
import Member3 from "@/assets/png/member3.png";
import Member4 from "@/assets/png/member4.png";
import Member5 from "@/assets/png/member5.png";

export const projectHeaders = ["Companies", "Members", "Budget", "Completion"];

export const variantProjectHeaders = [
  "Companies",
  "Budget",
  "Status",
  "Completion",
  "",
];

export const projectData = [
  {
    company: "Chakra Soft UI Version",
    members: [Member1, Member2, Member3, Member4, Member5],
    budget: "$14,000",
    completion: 60,
    logo: Company1,
    status: "Working",
  },
  {
    company: "Add Progress Track",
    members: [Member1, Member2],
    budget: "$3,000",
    completion: 10,
    logo: Company2,
    status: "Canceled",
  },
  {
    company: "Fix Platform Errors",
    members: [Member1, Member2],
    budget: "Not set",
    completion: 100,
    logo: Company3,
    status: "Done",
  },
  {
    company: "Launch our Mobile App",
    members: [Member1, Member2, Member3, Member4],
    budget: "$32,000",
    completion: 100,
    logo: Company4,
    status: "Done",
  },
  {
    company: "Add the New Pricing Page",
    members: [Member1, Member2, Member3, Member4, Member5],
    budget: "$400",
    completion: 25,
    logo: Company5,
    status: "Working",
  },
  {
    company: "Redesign New Online Shop",
    members: [Member1, Member2],
    budget: "$7,600",
    completion: 40,
    logo: Company6,
    status: "Working",
  },
];
