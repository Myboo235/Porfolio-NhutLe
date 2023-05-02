import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";


const Head = () => {
  const head = useGLTF("./adamHead/adamHead.gltf");
  return (
    <mesh>
      <hemisphereLight
       intensity={0.15} 
       groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive 
        object={head.scene}
        scale={2}
      />
      <ambientLight intensity={0.6}/>
    </mesh>
  )
}


const HeadCanvas = () =>{
  return (
    <Canvas
     frameloop="demand"
     shadows
     camera={{position:[20,3,5],fov:25 }}
     gl={{ preserveDrawingBuffer :true }}
    >
      <OrbitControls 
       enableZoom={false} 
      />
      <Stage environment="city" intensity={0.6}>
        <Head />
      </Stage>
      <Preload all/>
    </Canvas>
  )
}


export default HeadCanvas;