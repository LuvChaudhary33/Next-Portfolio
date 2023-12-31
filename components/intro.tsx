"use client";
import Image from "next/image"
import {motion} from "framer-motion"
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import luv from "@/public/profile.jpg"

const Intro = () => {
    const {ref} = useSectionInView("Home" , 0.5)
  return (
    <section ref={ref} id="home" className="mb-28 -mt-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{
                    type: "tween", duration: 0.2,
                }}>
                <Image src={luv} alt="Luv potrait" width="120" height="120" quality={100} priority={true} className="h-[8rem] w-[8rem] rounded-full object-none border-[0.35rem] border-white shadow-xl" />
                </motion.div>
                <motion.span className="text-3xl absolute bottom-0 right-0" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7,}}>👋</motion.span>
            </div>
        </div>
        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-[2rem]" initial={{opacity: 0, y: 100}} animate={{opacity:1, y: 0}}>
        <span className="font-bold">Hello, I'm Luv.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> Currently a student,{" "}
        <span className="font-bold"> B.Tech. Sophomore at MAIT, Delhi.</span> I enjoy
        building <span className="italic">sites & apps, explore around</span> and helping out others. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.h1>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium" initial={{y: 100, opacity: 0}} animate={{opacity: 1, y: 0}}>
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here <BsArrowRight className="group-hover:translate-x-1 transition" /></Link>

            <a href="/Luv Chaudhary Resume.pdf" target="_blank" download className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90">Download CV <HiDownload className="opacity-60 group-hover:transition" /></a>

            <a href="https://www.linkedin.com/in/luv-chaudhary-a25b64121/" target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90"><BsLinkedin  /></a>

            <a href="https://github.com/LuvChaudhary33" target="_blank"  className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90"><FaGithubSquare  /></a>
        </motion.div>
    </section>
  )
}

export default Intro