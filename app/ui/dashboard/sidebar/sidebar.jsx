import React from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import { menuItems } from "@/data";
// !===============>> Icons
import { MdLogout } from "react-icons/md";




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
