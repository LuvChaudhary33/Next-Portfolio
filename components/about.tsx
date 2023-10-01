"use client";

import SectionHeading from "./section-heading"
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import {SiLeetcode} from "react-icons/si"

const About = () => {
  const {ref} = useSectionInView("About")
  
  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.175}} id="about">
        <SectionHeading >About Me</SectionHeading >
        <p className="mb-3">
        I am currently in Pre-final Year of {" "}
        <span className="font-medium">B.Tech</span>{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem({" "}<a className="text-blue-500 hover:underline" target="_blank" href="https://leetcode.com/Luvchaudhary/">checkout my Leetcode <SiLeetcode className="inline" /></a>{" "}). My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and MySQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, anime and learning <span className="font-medium">history and philosophy</span>. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about  <span className="font-medium">Machine Learning and DevOps</span>.
      </p>
    </motion.section>
  )
}

export default About


// I am currently
// learning about{" "}
// <span className="font-medium">history and philosophy</span>.