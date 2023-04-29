import React from 'react'

const Hero = () => {
  return (
    <section className='h-[100vh]'>
        <nav>
          <div className='grid'>

          </div>
        </nav>
        <div className="grid lg:grid-cols-2 h-full justify-items-center items-center">
            <div className='animate-bounce-slow'>
                <img className='max-w-xs lg:max-w-sm' src="../src/assets/Hero.png" alt="" />
            </div>
            <div className='grid justify-center align-middle w-1/2 md:mt-0 mt-5'>
                <p className='text-8xl text-justify font-bold  text-cyan-900'>Hello There</p> 
                <span className='py-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia dolor molestias! Nulla libero voluptate ut cupiditate tenetur nam possimus.</span>
                <button className='bg-white xl:w-1/3 p-2 rounded-lg hover:bg-gray-300'>Learn more</button>
            </div>
        </div>
    </section>
  )
}

export default Hero