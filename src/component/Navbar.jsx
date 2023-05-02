import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav,SetShowNav] = useState(true);
  const toggleNav = () =>{
    SetShowNav(!showNav);
  }
  return (
    <section className='h-[15rem] sm:h-2'>
        <div className='grid grid-cols-2 pt-4'>
            <div className='z-20'>
                <img className='cursor-pointer max-w-[10rem]' src="../assets/Logo.png" alt="" />
            </div>
            <div className='grid xl:grid justify-items-end sm:justify-items-center mx-5'>
                <div className={`mt-4 sm:hidden ${showNav ? 'hidden' :''}`} onClick={toggleNav}>
                    <RxHamburgerMenu size={25}/>
                </div>

                <div className={`mt-4 sm:hidden ${showNav ? '' :'hidden'}`} onClick={toggleNav}>
                    <AiOutlineClose size={25}/>
                </div>
                
                
                <ul className={`
                    mt-8
                    sm:mt-4
                    cursor-pointer
                    sm:text-black
                    bg-slate-500
                    sm:bg-transparent
                    sm:mx-16
                    w-[10rem] 
                    h-[10rem] 
                    flex 
                    flex-col
                    sm:flex-row
                    gap-2 
                    sm:gap-10
                    items-center
                    justify-center
                    text-white
                    ${showNav ? '' : 'hidden'}
                    `}>
                    <li className='sm:hover:text-[#2C3E50] border-b-2 border-transparent hover:border-white'>Home</li>
                    <li className='sm:hover:text-[#2C3E50] border-b-2 border-transparent hover:border-white'>About</li>
                    <li className='sm:hover:text-[#2C3E50] border-b-2 border-transparent hover:border-white'>Work</li>
                    <li className='sm:hover:text-[#2C3E50] border-b-2 border-transparent hover:border-white'>Contact</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar