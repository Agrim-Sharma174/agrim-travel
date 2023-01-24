import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:[700px]'>
        <Image className='blur-[2px] ' src={"/vacation3.jpg"} 
        layout='fill' objectFit='cover' />
        <div className='absolute top-1/2 w-full text-center'>
            <h1 className='text-lg sm:text-5xl font-bold text-gray-800 -mt-4'>Your buddy to plan your next trip.</h1>

            <button className='text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150'>Click here!</button>
        </div>
    </div>
  )
}

export default Banner