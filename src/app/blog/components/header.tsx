"use client";
import { Libre_Barcode_128 } from 'next/font/google'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react'


export default function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  function smoothScroll(targetId: string) {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  return (
    // <header className='top-0 z-[999] relative'>
    // <nav className="bg-white p-2 mt-0 fixed w-full z-10 top-0">
    //     <div className="container mx-auto flex flex-wrap items-center">
    //         <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
    //             <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
    //                 <span className="text-2xl pl-2 text-black"><i className="em em-grinning"></i> Pratham Shah</span>
    //             </a>
    //         </div>
    //         <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
    //             <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
    //               <li className="mr-3">
    //                 <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
    //               </li>
    //               <li className="mr-3">
    //                 <a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
    //               </li>
    //               <li className="mr-3">
    //                 <a className="inline-block text-black  font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
    //               </li>
    //                 <li className="mr-3">
    //                 <a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
    //               </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    // </header>
    
    <div className='absolute sticky top-0 w-full flex justify-between items-center h-24 text-black bg-red-200 mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-black'>Pratham Shah</h1>
      <ul className='hidden md:flex bg-red-200'>
      <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" onClick={() => smoothScroll('1')}>About</a>
        </li>
        <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" onClick={() => smoothScroll('2')}>Link</a>
        </li>
        <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full ease-in-out duration-300' : ' fixed left-[-100%]'}>

        <ul className='pt-24 block md:hidden justify-center items-center w-[60%]'>
        <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
        </li>
        <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
        </li>
        <li className='p-4'><a className="inline-block text-black font-extrabold no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">Link</a>
        </li>

        </ul>
      </div>
      </div>
  )
}
