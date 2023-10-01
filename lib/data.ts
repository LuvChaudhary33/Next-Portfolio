import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Next from "@/public/NextPedia.png";
import Blog from "@/public/Blog.png";
import AI from "@/public/AI-Image.png";
import FramerMotion from "@/public/Framer-Motion.png";
import C from "@/public/C.png";
import Express from "@/public/Express.png";
import Git from "@/public/Git.png";
import JavaScript from "@/public/JavaScript.png";
import MongoDB from "@/public/MongoDB.png";
import Mongoose from "@/public/Mongoose.png";
import MySQL from "@/public/MySQL.png";
import Prisma from "@/public/Prisma.png";
import react from "@/public/React.png";
import Redux from "@/public/Redux.png";
import Sass from "@/public/Sass.png";
import Tailwind from "@/public/Tailwind.png";
import TypeScript from "@/public/TypeScript.png";
import node from "@/public/Node.png";
import next from "@/public/Next.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Currently Pursuing",
    location: "Rohini, Delhi",
    description:
      "I am currently in Pre-final year of my B.Tech in Information Technology from GGSIPU(Delhi). Currently learning Data Structures, Operating System, DBMS and System design.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Delhi",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to part-time opportunities. Currently I am learning Cloud and DevOps, also exploring Machine Learning.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NextPedia",
    description:
      "A full-stack website showcasing a dynamic portfolio, empowering users to create and manage their blog posts seamlessly. Implemented Next-Auth and Google Auth for user convenience.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Redux"],
    link: "",
    imageUrl: Next,
  },
  {
    title: "Luv’s Blog",
    description:
      "A full-stack blogging platform with responsive UI, allowing users to create, publish, and manage blog posts.",
    tags: ["React", "NodeJS", "MongoDB", "Tailwind", "Redux"],
    link: "https://sparkling-pika-7550d8.netlify.app/",
    imageUrl: Blog,
  },
  {
    title: "AI Image",
    description:
      "A full Stack Ai Image generator using OpenAI and Cloudinary. Also showcases all the Images created by users with their propmt.",
    tags: ["React", "NodeJS", "OpenAI", "Tailwind", "MongoDB", "Cloudinary"],
    link: "",
    imageUrl: AI,
  },
] as const;

export const skillsData = [
  {skill: "TypeScript", icon: TypeScript},
  {skill: "JavaScript",icon: JavaScript},
  {skill: "C++",icon: C},
  {skill: "React",icon: react},
  {skill: "Next.js",icon: next},
  {skill: "Node.js",icon: node},
  {skill: "Tailwind",icon: Tailwind},
  {skill: "Prisma",icon: Prisma},
  {skill: "MongoDB",icon: MongoDB},
  {skill: "Mongoose",icon: Mongoose},
  {skill: "MySQL",icon: MySQL},
  {skill: "Redux",icon: Redux},
  {skill: "Express",icon: Express},
  {skill: "Git",icon: Git},
  {skill: "Sass",icon: Sass},
  {skill: "Framer Motion",icon: FramerMotion },
] as const;