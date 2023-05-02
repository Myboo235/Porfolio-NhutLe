import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";

const RollerSkate = () => {
   const rollerskate = useGLTF("./roller_skate_with_wings/scene.gltf");
   return (
    <mesh>
      <hemisphereLight
       intensity={0.15} 
       groundColor="black"/>
      <pointLight intensity={0}/>
      <primitive 
        object={rollerskate.scene}
        scale={2}
      />

    </mesh>
  )
}

const RollerSkateCanvas = () =>{
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
      <Stage environment="" intensity={0.4}>
        <RollerSkate />
      </Stage>
      <Preload all/>
    </Canvas>
  )
}
export default RollerSkateCanvas;