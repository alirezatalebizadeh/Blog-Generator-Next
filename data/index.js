import { MdHome, MdPeople, MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter, MdCreate, MdImage, MdListAlt } from "react-icons/md";





export const menuItems = [
  {
    title: "بخش ها",
    list: [
      {
        title: "سازنده ی بلاگ ",
        path: "/dashboard",
        icon: <MdCreate className="size-5" />,
      },
      {
        title: "ساختن عکس",
        path: "/dashboard/users",
        icon: <MdImage className="size-5" />,
      },
      {
        title: "نمایش تمام بلاگ ها",
        path: "/dashboard/products",
        icon: <MdListAlt className="size-5" />,
      },
    ],
  }
];

export const navbarLink = [
  {
    title: "صفحه اصلی",
    path: "/",
    icon: <MdHome className="size-5" />,
  },
  {
    title: "سازنده ی بلاگ",
    path: "/dashboard",
    icon: <MdCreate className="size-5" />,
  },
  {
    title: "ساختن عکس",
    path: "/dashboard/users",
    icon: <MdImage className="size-5" />,
  },
  {
    title: "نمایش تمام بلاگ ها",
    path: "/dashboard/products",
    icon: <MdListAlt className="size-5" />,
  },
];
