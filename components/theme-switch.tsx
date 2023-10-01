"use client"
import { useTheme } from "@/context/theme-context"
import { BsMoon, BsSun } from "react-icons/bs"

const ThemeSwitch = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <button className="fixed bottom-7 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-20 backdrop-blur-[0.2rem] border-2 border-gray-200 dark:border-cyan-300 border-opacity-40 shadow-4xl rounded-full flex items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all dark:bg-gray-900/20 "
    onClick={toggleTheme}
    >
        {theme === 'light' ? (
            <BsSun />
        ):(<BsMoon />)}
    </button>
  )
}

export default ThemeSwitch