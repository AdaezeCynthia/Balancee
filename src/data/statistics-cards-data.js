import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Earning",
    value: "₦53,000",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Current Balance",
    value: " ₦2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Total Booking",
    value: "4",
    footer: {
      color: "text-green-500",
      value: "+2%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Cashback",
    value: " ₦12,600",
    footer: {
      color: "text-green-500",
      value: "+2%",
      label: "than last month",
    },
  },
];

export default statisticsCardsData;
