import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
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
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "",
        element: "",
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "  ",
        element: "",
      },
    ],
  },
];

export default routes;
