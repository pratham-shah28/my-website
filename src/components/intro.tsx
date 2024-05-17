import React from 'react'

export default function Intro() {
  return (
    <div className='h-screen scroll-offset' id = '1'>
    <div className=' mt-16 md:mt-24 justify-center'>
      
      <div className='max-w-[800px] mt-[-9px] ml-10  mx-auto flex flex-col gap-y-10'>
      <div className=' text-purple-300 flex flex-col w-50 text-bold justify-center' >
        <p className='text-xl md:text-2xl font-bold'>About me</p>
      </div>
      <div className='text-white'>
        <p className='text-l md:text-xl font-bold justify-center' >I'm a Master's in Computer Science at Northeastern University.</p>
        <p className='text-l md:text-xl font-bold justify-center'>My professional passion includes developing data-oriented software, fintech, and making tech more accessible. I can help you with your backend, frontend, database, deployment, and data solutions. </p>
        <p className='text-l md:text-xl font-bold justify-center mt-6'>...that's not all. I also like to write (about experiences, ideas, literally anything), click photographs (of anything that pleases the eye)</p>
        </div>
      </div>
    </div>
    </div>
  )
}
