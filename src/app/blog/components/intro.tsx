import React from 'react'

export default function Intro() {
  return (
    <div className='text-black h-screen mt-15 pt-18 md:mt-40 justify-center' id='1'>
      
      <div className='max-w-[800px]mt-[-96px] ml-10  mx-auto flex flex-col gap-y-10'>
      <div className=' text-white bg-black flex flex-col w-50 text-bold justify-center'>
        <p className='text-xl md:text-4xl font-bold'>About me</p>
      </div>
      <div>
        <p className='text-l md:text-2xl font-bold justify-center'>I'm a Master's in Computer Science at Northeastern University</p>
        <p className='text-l md:text-2xl font-bold justify-center'>My professional passion includes developing data-oriented software, fintech, and making tech more accessible </p>
        </div>
      </div>
    </div>
  )
}
