import React from 'react'

const Work = () => {
  return (
    <section className='h-[100vh]'>
      <div className="grid md:grid-cols-2 h-full justify-items-center items-center">
        <ul 
          className='text-6xl text-transparent cursor-pointer'
          style={{'-webkit-text-stroke': '1px white'}}
        >
          <li className='hover:text-white duration-500'>Design</li>
          <li className='hover:text-white duration-500'>Development</li>
          <li className='hover:text-white duration-500'>Illustration</li>
          <li className='hover:text-white duration-500'>SocialMedia</li>
        </ul>

      </div>
      
    </section>
  )
}

export default Work