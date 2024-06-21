import React from 'react'
import profile from "../images/image.jpg";

function Projects() {
  return (
    <div className="w-full">
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-5">
    <div className="md:order-2 md:ml-5 flex-auto flex-shrink-0 ">
      <img
        className="w-32 md:w-48 mx-auto shadow-xl rounded-full drop-shadow-sm"
        src={profile}
        alt="profilepic"
      />
      <img
        className="w-32 md:w-48 mx-auto shadow-xl rounded-full drop-shadow-sm"
        src={profile}
        alt="profilepic"
      />
      
      
    </div>
  </div>
</div>
  )
}

export default Projects