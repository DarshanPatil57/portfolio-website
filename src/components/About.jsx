import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import scrollIntoView from 'scroll-into-view';


function About() {
  return (
    <div className=''>
     
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Hey 👋  
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus amet hic quasi tempore voluptatibus esse, enim rerum delectus omnis impedit ducimus culpa ea vitae. Beatae nisi quae nobis sint pariatur!
        </p>

      
      
      </div>
      
      
      <scrollIntoView>

        <div className='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </scrollIntoView>
    </div>
  )
}

export default About
