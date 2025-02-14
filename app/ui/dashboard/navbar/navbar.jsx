"use client";
import { menuItems, navbarLink } from "@/data";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdOutlineDarkMode, MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("dark-mode", newMode);
    document.body.classList.toggle("dark", newMode);
  };

  return (
    <nav className="relative flex lg:hidden items-center justify-between p-5 rounded-[10px] bg-bgSoft">
      {/*//! دکمه منوی موبایل */}
      <button className="md:hidden text-textSoft text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* //!لینک‌های دسکتاپ */}
      <ul className="hidden md:flex items-center gap-5">
        {navbarLink.map((item) => (
          <li key={item.title}>
            <Link href={item.path} className="text-textSoft font-bold text-[16px]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/*//! منوی موبایل */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-bgSoft flex flex-col items-start gap-5 p-5 mx-auto shadow-md -mt-2 ">
          {navbarLink.map((item) => (
            <li key={item.title}>
              <Link href={item.path} className="text-textSoft font-bold text-[16px] " onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/*//! دکمه تغییر تم */}
      <button onClick={toggleTheme} className="text-2xl bg-transparent border-none">
        {isDarkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </nav>
  );
}
