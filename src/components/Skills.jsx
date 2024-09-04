import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVite, SiGreensock } from 'react-icons/si';

function Skills() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-4 mt-20'>
      <p className='text-2xl font-mono text-black text-center sm:text-4xl pt-4 font-bold'> 
        Skills 
      </p>
      
      {/* Technologies Section */}
      <p className='text-xl opacity-25 text-black text-center sm:text-2xl pt-4 font-bold'>
        Technologies
      </p>
      <div className='flex flex-wrap justify-center pt-2'>
        <div className='flex flex-col w-28 p-5 m-4 overflow-hidden bg-white'>
          <FaReact color="#2196f3" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-32 p-5 m-4 overflow-hidden bg-white sm:w-36">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white  sm:w-36">
          <SiJavascript color="#ffdf00" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white  sm:w-36">
          <FaHtml5 color="#e34c26" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white  sm:w-36">
          <FaCss3Alt color="#264de4" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white   sm:w-36">
          <SiGreensock color="#88CE02" className="mx-auto text-6xl" />
        </div>
      </div>
      
      {/* Tools Section */}
      <p className='text-xl opacity-25 text-black text-center sm:text-2xl pt-4 font-bold'>
        Tools
      </p>
      <div className='flex flex-wrap justify-center pt-2'>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white sm:w-36">
          <FaGitAlt color="#F05032" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white sm:w-36">
          <FaGithub color="#171515" className="mx-auto text-6xl" />
        </div>
        <div className="flex flex-col w-28 p-5 m-4 overflow-hidden bg-white sm:w-36">
          <SiVite color="#646CFF" className="mx-auto text-6xl" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
