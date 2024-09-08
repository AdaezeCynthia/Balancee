import {
  HomeIcon,
  TableCellsIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { Reward, History,  } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/reward",
        element: <Reward/>,
      },
     
      {
        icon: <TableCellsIcon {...icon} />,
        name: "History",
        path: "/history",
        element: <History />,
      },
   
    ],
  },
  {
    title: "Repair",
    layout: "auth",
    pages: [
      {
        icon: <CogIcon {...icon} />,
        name: "Book Repair at station",
        path: "",
        element: "",
      },
      {
        icon: <CogIcon {...icon} />,
        name: "Book Repair",
        path: "  ",
        element: "",
      },
    ],
  },
];

export default routes;
