import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { MdArrowOutward } from "react-icons/md";
import { FiMail,FiArrowRight, FiArrowDown } from "react-icons/fi";
import { SiCss3, SiExpress, SiGit, SiGithub, SiGreensock, SiHtml5, SiJavascript, SiLinkedin, SiMongodb, SiReact, SiTailwindcss, SiVite, SiX,  } from "react-icons/si";
import profile from "../assets/images/image.jpg";
import { Typewriter } from "react-simple-typewriter";
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Profile from '../assets/images/image.jpg'

export default function RevealBento() {
  return (
    <div className=" px-4 py-12 bg-zinc-900 text-zinc-50">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid p-4 grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <CodeBlock />
        <SkillsBlock />
      </motion.div>
        <Projects/>
      {/* <Footer /> */}
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-8">
    <img
      src={profile}
      alt="avatar"
      className="mb-4 size-20 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Darshan Patil
      <span className="text-zinc-400">
       {/* <br />  <Typewriter
              words={["Front-End Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            /> */}
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
  <Block className="col-span-12 flex flex-row justify-around items-center gap-4  md:col-span-4">
  <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>

  <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
    
  </Block>
  <Block className="col-span-12 cursor-pointer md:col-span-4 ">
    <h1 className="text-center text-red-500 flex items-center justify-center gap-2 ">Work With Me <FiMail/> </h1>
  </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 w-full">
    <p className=" font-mono text-2xl text-start">
    I'm a final year Computer Science student
      <span className="text-zinc-400">, Passionate about front-end development.I enjoy making websites with HTML,CSS,JavaScript & React Js. I love making them look great and adding fun animations with GSAP to bring them to life. I'm actively learning backend technologies to enhance my skill set.
      </span>
    </p>
  </Block>
);

  const CodeBlock = () => (
    <Block className="col-span-12 flex flex-col items-center justify-center md:col-span-2 md:mb-24">
      <p className=" font-bold flex items-center justify-center text-white"> What I Code With <FiArrowRight className="size-4 ml-2 hidden md:block" />  <FiArrowDown className="size-4 ml-2 block md:hidden" /></p>
    </Block>
  );

  const SkillsBlock = () => (
    <Block className="col-span-12 grid md:grid-cols-12 grid-cols-5  md:flex-row justify-between items-center gap-10  md:col-span-10 md:mb-24">
    <SiHtml5 className="fill-red-400 size-10"/>
    <SiCss3 className="fill-blue-500 size-10"/>
    <SiJavascript className="fill-yellow-500 size-10"/>
    <SiReact className="fill-blue-500 size-10"/>
    <SiGreensock className="fill-green-500 size-10"/>
    <SiTailwindcss className="fill-blue-500 size-10"/>
    <SiExpress className="fill-green-500 size-10"/>
    <SiMongodb className="fill-white size-10" />
    <SiVite className="fill-red-500 size-10"/>
    <SiGithub className=" size-10"/>
    <SiGit className="fill-blue-500 size-10" />
    </Block>
  );

  
  const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Project Title 1",
        description: "Project Description 1",
        imgSrc:
          "https://private-user-images.githubusercontent.com/157952533/346267077-60bd3bfd-4d94-4f64-9c07-5e0210a5f228.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3NTk4OTksIm5iZiI6MTcyNjc1OTU5OSwicGF0aCI6Ii8xNTc5NTI1MzMvMzQ2MjY3MDc3LTYwYmQzYmZkLTRkOTQtNGY2NC05YzA3LTVlMDIxMGE1ZjIyOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOVQxNTI2MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMzI4NGNiMjFmY2VhNDJiMDlmMDNhZjQ0OGYyNGMwYjU2MTA0YTE0NGVlZGFkYTg3MWIwMGE3Y2ZkYThjZmExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9y6x_J-RbYT8geJUdx5jZVQvc2WL01dk7k2kYzS43-I",
        link: "#",
      },
      {
        id: 2,
        title: "Project Title 2",
        description: "Project Description 2",
        imgSrc:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
      },
      {
        id: 3,
        title: "Project Title 3",
        description: "Project Description 3",
        imgSrc:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
      },
      {
        id: 3,
        title: "Project Title 3",
        description: "Project Description 3",
        imgSrc:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
      },
    ];
  
    return (
     <Block className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 py-10 "> 

    <div className="flex justify-center mt-8">
      <h1 className="text-3xl">
        Projects
      </h1>
    </div>
      
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10  max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" rounded-lg overflow-hidden transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            >
              <figure className="mb-2">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="p-4 bg-zinc-900 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    {project.title}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    {project.description}
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="text-lg text-white font-light">LIVE VIEW</div>
                  <button className="flex justify-center p-3 rounded-full bg-zinc-700 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                    <a href={project.link}>
                      <MdArrowOutward />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     </Block>
    );
  };
  
  
const Footer = () => (
  <footer className="mt-12">
    <p className="text-center text-zinc-400">
      Made with ❤️ by Darshan Patil
      <a href="#" className="text-red-300 hover:underline">
      </a>
    </p>
  </footer>
);

