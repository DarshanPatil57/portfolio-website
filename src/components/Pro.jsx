
import React from 'react'
import Profile from '../assets/images/image.jpg'
import { SiGithub } from 'react-icons/si'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
export default function Pro() {
  return (
    <div className='px-4 py-28'>
        <h1 className='text-center text-2xl uppercase mb-10'>Projects</h1>
        <div className='flex flex-col gap-6 text-black md:grid grid-cols-3'>
            <div className="  rounded-2xl bg-red-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-4 flex flex-col items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                    <img className='rounded ' src={Profile} alt="" />
                    <div className='flex  items-center justify-around gap-8'>
                    <h3 className='text-left p-2 cursor-pointer rounded-full bg-black text-white'><SiGithub/></h3>
                    <h3 className='text-left p-2 cursor-pointer rounded-full'><BsFillArrowUpRightCircleFill className=' size-8 fill-black'/></h3>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl bg-red-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-4 flex flex-col items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                    <img className='rounded-full ' src={Profile} alt="" />
                    <h3>Project Title</h3>
                </div>
            </div>

            <div className="rounded-2xl bg-red-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-4 flex flex-col items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                    <img className='rounded-full ' src={Profile} alt="" />
                    <h3>Project Title</h3>
                </div>
            </div>

            <div className="rounded-2xl bg-red-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-4 flex flex-col items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                    <img className='rounded-full ' src={Profile} alt="" />
                    <h3>Project Title</h3>
                </div>
            </div>
        </div>
    </div> 
  )
}
