"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ButtenDemo = ({ title }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        <button onClick={toggleTheme} className="flex items-center gap-1 text-textSoft font-bold text-[16px]">
            {isDarkMode ? <MdLightMode className='size-7 dark:text-white' /> : <MdOutlineDarkMode className='size-7  dark:text-white' />}
            {title && <span>
                تغییر حالت
            </span>}

        </button>
    )
}

export default ButtenDemo
