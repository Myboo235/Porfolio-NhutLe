import React from 'react'
import Cube from './Cube'

const About = () => {
  return (
    <section className='xl:h-[100vh] py-5 my-5'>
      <div className='h-full grid xl:grid-cols-2 justify-items-center items-center'>
        <div className='h-2/3 grid lg:grid-cols-3 items-center md:gap-5 gap-2'>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>150</span>
            <span className='p-2 self-end justify-self-center text-white'>Customer</span>
          </div>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>100</span>
            <span className='p-2 self-end justify-self-center text-white'>Customer</span>
          </div>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>200</span>
            <span className='p-2 self-end justify-self-center text-white'>Customer</span>
          </div>
        </div>
        <div className= 'h-full grid justify-items-center md:justify-items-start items-center'>
          <Cube />
        </div>
      </div>
    </section>
  )
}

export default About