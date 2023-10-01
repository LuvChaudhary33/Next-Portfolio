"use client";
import React from "react"
import {skillsData} from "@/lib/data"
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image"

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (0.02 * index),
      },
    }),
  };

const Skills = () => {
  const {ref} = useSectionInView("Skills")
  return (
    <section ref={ref} id="skills" className='mb-28 max-w-[53rem] scroll-mt-24 sm:mb-40 shadow-xl dark:shadow-cyan-400/20 p-10 sm:pt-5 sm:p-20 rounded-[1.25rem]'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap items-center justify-center gap-5 text-sm sm:text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
              <React.Fragment key={index}>
                <motion.li
                className="flex items-center justify-center gap-3 bg-white border-2 border-cyan-400 rounded-xl p-3 sm:px-5 sm:py-3 hover:bg-cyan-400 hover:text-white dark:bg-white/10 dark:text-white/80 dark:hover:bg-cyan-400"
                
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <span className="hidden sm:block">{skill.skill}</span>
                <Image className="inline w-10 h-10" src={skill.icon} alt="" />
              </motion.li>
                </React.Fragment>
            ))}
        </ul>
    </section>
  )
}

export default Skills