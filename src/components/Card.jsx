import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import profile from "../assets/images/image.jpg";
import { Typewriter } from "react-simple-typewriter";

function Card() {
  return (
    <div className="w-full lg:mt-36 mt-10">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto md:shadow-none md:border-none shadow-md border rounded-xl p-5">
        <div className="flex-shrink-0">
          <img
            className="w-32 md:w-48 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profilepic"
          />
        </div>
        <div className="text-center mt-5 md:mt-0">
          <p className="text-2xl sm:text-3xl mt-2 text-gray-900">
            Hi, I'm Darshan Patil
          </p>
          <p className="text-sm sm:text-lg text-gray-600 pt-2">
            A{" "}
            {/* <Typewriter
              words={["Front-End Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            /> */}
          </p>
          <div className="flex justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
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
          <button className="mt-4 px-4 py-2 font-semibold rounded transition duration-500 ease-in-out bg-black text-white shadow-lg transform hover:-translate-y-1 hover:scale-100">
            <a target="_blank" href="https://www.google.com/">
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
