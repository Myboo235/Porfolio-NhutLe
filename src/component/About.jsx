import React from 'react'
import Cube from './Canvas/Cube'
import { useSpring, animated } from 'react-spring'

const About = () => {
  const customer = useSpring({
    from:{cnt : 0},
    to:{cnt : 1500},
    delay:100,
  });

  const designs = useSpring({
    from:{cnt : 0},
    to:{cnt : 2000},
    delay:100,
  });

  const staffs = useSpring({
    from:{cnt : 0},
    to:{cnt : 1000},
    delay:100,
  });

  return (
    <section className='xl:h-[100vh] py-5 my-5'>
      <div className='h-full grid xl:grid-cols-2 justify-items-center items-center'>
        <div className='h-2/3 grid lg:grid-cols-3 items-center md:gap-5 gap-2'>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>
              <animated.div>
                  {customer.cnt.to((val)=>Math.floor(val))}
              </animated.div>  
            </span>
            <span className='p-2 self-end justify-self-center text-white'>Customer</span>
          </div>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>
              <animated.div>
                  {designs.cnt.to((val)=>Math.floor(val))}
              </animated.div>
            </span>
            <span className='p-2 self-end justify-self-center text-white'>Products</span>
          </div>
          <div className='grid w-[10rem] h-[10rem] border-2 rounded-lg '>
            <span className='p-2 self-center justify-self-center text-white text-5xl'>
              <animated.div>
                  {staffs.cnt.to((val)=>Math.floor(val))}
              </animated.div>
            </span>
            <span className='p-2 self-end justify-self-center text-white'>Staffs</span>
          </div>
        </div>
        <div className= 'h-full grid justify-items-center sm:justify-items-start items-center'>
          <Cube />
        </div>
      </div>
    </section>
  )
}

export default About