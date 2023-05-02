import React, { useState } from 'react';
import HeadCanvas from './Canvas/HeadCanvas';
import JuiceShopCanvas from './Canvas/JuiceShopCanvas';
import RollerSkateCanvas from './Canvas/RollerSkateCanvas';
import SocialMediaCanvas from './Canvas/SocialMediaCanvas';

const Work = () => {
  const data = ["Design","Development","Illustration","SocialMedia"];
  const [work,setWork] = useState("Design");
  

  return (
    <section className='h-[100vh] '>
      <div className="grid xl:grid-cols-2 h-full justify-items-center items-center">
        <ul 
          className='text-6xl text-transparent cursor-pointer'
          style={{WebkitTextStroke: '1px white'}}
        >
          {data?.map(e => {
            return(
              <li key={e} className='hover:text-white duration-500' onClick={() => setWork(e)}>{e}</li>
            )
          })}

        </ul>

        <div className='w-[20rem] h-full sm:w-[30rem] ]'>
          {work =="Design" ? <JuiceShopCanvas />
          :work =="Development" ? <HeadCanvas />
          :work == "Illustration" ? < RollerSkateCanvas/>: 
          <SocialMediaCanvas />}
        </div>
      </div>
      
    </section>
  )
}

export default Work