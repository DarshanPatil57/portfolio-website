import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Project Description 1",
      imgSrc:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      id: 2,
      title: "Project Title 2",
      description: "Project Description 2",
      imgSrc:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center underline">
          PRO<span className="text-indigo-800">JECTS</span>
        </p>
      </div>

      <div className=" w-full grid grid-cols-1 justify-center sm:grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-2xl rounded-lg p-4 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
          >
            <figure className="mb-2">
              <img
                src={project.imgSrc}
                alt=""
                className="h-64 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
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
                <button className="flex justify-center p-3 rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                  <a href={project.link} className="">
                    <MdArrowOutward />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
