import React from 'react'
import Distort from './Canvas/Distort'

const Hero = () => {
  return (
    <section className='xl:h-[100vh]'>
        <div className="grid xl:grid-cols-2 h-full w-full justify-items-center items-center">
            <div className='relative h-full w-full grid justify-items-center items-center'>
                <Distort />
                <img className='xl:absolute ml-auto mr-auto left-0 right-0  max-w-xs w-[18rem]' src="./assets/Hero.png" alt="" />
            </div>
            <div className='grid justify-center align-middle w-2/3 xl:-ml-64 mt-5'>
                <p className='text-8xl text-justify font-bold  text-cyan-900'>Hello There</p> 
                <span className='py-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia dolor molestias! Nulla libero voluptate ut cupiditate tenetur nam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos asperiores modi. Harum tempore eius nesciunt quis, fugiat, quae laborum totam beatae minus, atque saepe.</span>
                <button className='bg-white xl:w-1/3 p-2 rounded-lg hover:bg-gray-300'>Learn more</button>
            </div>
        </div>
    </section>
  )
}

export default Hero