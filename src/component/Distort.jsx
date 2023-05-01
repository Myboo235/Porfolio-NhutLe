import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Distort = () => {
    
  return (
    <div className='hidden xl:block h-full w-full  max-w-[100rem]'>
    <Canvas>
        <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#2C3E50"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  />
            </Sphere>
    </Canvas>
    </div>
  )
}

export default Distort