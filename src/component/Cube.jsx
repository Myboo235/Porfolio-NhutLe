import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

import CubeText from './CubeText'

const Cube = () => {
  return (
    <div className='h-[calc(100vh*2/3)] max-w-[30rem] lg:scale-125'>
       <Canvas >
           <OrbitControls enableZoom={false} autoRotate />
           <ambientLight intensity={1}/>
           <directionalLight position={[2,3,2]} />
           <CubeText />
       </Canvas>
    </div>
  )
}

export default Cube