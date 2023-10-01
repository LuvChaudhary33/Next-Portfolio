"use client"
import React, {useRef} from "react"
import Image from "next/image"
import { useScroll, useTransform } from "framer-motion"
import { projectsData } from '@/lib/data'
import {motion} from "framer-motion"
import {TbWorld} from "react-icons/tb"

type ProjectProps =(typeof projectsData)[number]
export default function Project({
    title, description, link, tags, imageUrl
}: ProjectProps){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])
    return (
        <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0" style={{scale: scaleProgress, opacity: opacityProgress}}>
        <section  className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {link && <a target="_blank" href={link} className="flex justify-center items-center gap-1 bg-cyan-500/[0.7] px-2 py-1 w-[7rem] text-[0.9rem] uppercase text-white rounded-full dark:text-white/70 dark:bg-cyan-500/80"><TbWorld/>Live Demo</a>}
                {tags.map((tag, index) =>(
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" key={index}>{tag}</li>
                ))}
            </ul>
        </div>
        <Image className="absolute top-8 -right-40 w-[30rem] h-[17rem] rounded-t-lg shadow-2xl transition hidden sm:block group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40" src={imageUrl} alt="Project I worked on" quality={95} />
        </section>
        </motion.div>
    )
}