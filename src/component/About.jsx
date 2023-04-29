import React from 'react'

const About = () => {
  return (
    <section className='h-[100vh] py-5'>
      <div className='h-full grid grid-cols-2 justify-items-center items-center'>
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
        <div>
          <p>hrloo</p>
        </div>
      </div>
    </section>
  )
}

export default About