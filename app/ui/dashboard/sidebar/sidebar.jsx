import React from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
// !===============>> Icons
import { MdLogout, MdPeople } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter, MdCreate, MdImage, MdListAlt } from "react-icons/md";

const menuItems = [
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
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="sticky top-10 min-h-screen">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          alt="avatar"
          height={50}
          width={50}
        />
        <div className="flex flex-col">
          <span className="font-medium">علیرضا طالبی زاده</span>
          <span className="text-xs text-textSoft">ادمین  سایت</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((item) => (
          <li key={item.title} className="">
            <span className="text-textSoft font-bold text-[13px] my-[10px] mx-0">
              {item.title}
            </span>

            {item.list.map((link) => (
              <MenuLink key={link} className="w-5 h-5 " item={link} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-[10px] cursor-pointer rounded-[10px] p-5 my-[5px] mx-0 border-none text-text hover:bg-[#2e374a] w-full">
        <MdLogout />
        <span>خروج</span>
      </button>
    </div>
  );
}
