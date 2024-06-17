import React from 'react'
import profile from '../images/image.jpg'

function Card () {
  return (
    <div className=' w-full'>
        <div className=''>
            <img className= 'w-32 mx-auto shadow-xl rounded-full' src={profile} alt="profilepic" />
            <h1 className=' text-center'>Darshan Patil</h1>
        </div>
    </div>
  )
}

export default Card