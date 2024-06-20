import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import profile from "../images/image.jpg";

function Card() {
  return (
<div className="w-full">
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-2xl mx-auto bg-white shadow-2xl rounded-xl p-5">
    <div className="md:order-2 md:ml-5 flex-shrink-0">
      <img
        className="w-32 md:w-48 mx-auto shadow-xl rounded-full drop-shadow-sm"
        src={profile}
        alt="profilepic"
      />
    </div>
    <div className="text-center md:text-left mt-5 md:mt-0 md:flex-grow">
      <p className="text-2xl sm:text-3xl text-gray-900"> Hi, I'm Darshan Patil</p>
      <p className="text-sm sm:text-lg text-gray-600 pt-2 px-1 w-auto inline-block">
       A Front-End Developer
      </p>
      <div className="flex  justify-center md:justify-start">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href=""
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href=""
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
          href=""
        >
          <FaRegEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  </div>
</div>



  );
}

export default Card;
