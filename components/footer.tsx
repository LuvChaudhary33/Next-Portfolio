import { FaHeart } from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {BiLogoGmail} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import logo from "@/public/logo.png"
import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-4 pt-10 pb-5 text-center bg-gray-100 text-gray-500 border-t-[1px] border-t-gray-80 dark:border-t-cyan-300 dark:bg-gray-800/40  outline-none dark:text-gray-200">
        <div className="flex flex-col items-center mb-8 mt-5">
          <Image className="fill-black" src={logo} width={100} height={100} alt="logo"/>
          </div>
          <p className="mb-4 text-lg">Learning, Exploring and Trying.</p>
        <ul className="mb-5 flex justify-center items-center gap-5 text-[2rem]" >
          <Link target="_blank" className="p-2 border-2 border-gray-500 rounded-full group dark:border-cyan-500 " href="https://www.linkedin.com/in/luv-chaudhary-a25b64121/"><AiFillLinkedin className="group-hover:fill-blue-500 dark:group-hover:fill-cyan-500" /></Link>
          <Link target="_blank" className="p-2 border-2 border-gray-500 rounded-full group dark:border-cyan-500 " href="https://github.com/LuvChaudhary33"><AiFillGithub className="group-hover:fill-purple-500 dark:group-hover:fill-cyan-500" /></Link>
          <Link target="_blank" className="p-2 border-2 border-gray-500 rounded-full group dark:border-cyan-500 " href="https://mail.google.com/mail/?view=cm&fs=1&to=chaudharyluv33@gmail.com"><BiLogoGmail className="group-hover:fill-red-500 dark:group-hover:fill-cyan-500" /></Link>
          <Link target="_blank" className="p-2 border-2 border-gray-500 rounded-full group dark:border-cyan-500 " href="#"><BsTwitter className="group-hover:fill-sky-500 dark:group-hover:fill-cyan-500" /></Link>
          <Link target="_blank" className="p-2 border-2 border-gray-500 rounded-full group dark:border-cyan-500 " href="#"><AiOutlineInstagram className="group-hover:fill-fuchsia-500 dark:group-hover:fill-cyan-500" /></Link>
        </ul>
        <div className="flex items-center justify-center gap-2 text-2xl">Made with <FaHeart className="text-red-600" /> by Luv</div>
        <small className="mb-1 block text-xs">
            &copy; 2023 Luv. All rights reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> Built with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}

export default Footer