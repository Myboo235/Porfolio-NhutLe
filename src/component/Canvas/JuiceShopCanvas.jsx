import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";

const JuiceShop = () => {
  const juiceshop = useGLTF("./juice_carton_shop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
       intensity={0.15} 
       groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive 
        object={juiceshop.scene}
        scale={2}
      />
      <ambientLight intensity={0.6}/>
    </mesh>
  )
}
const JuiceShopCanvas = () => {
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
      <Stage environment="" intensity={0.6}>
        <JuiceShop />
      </Stage>
      <Preload all/>
    </Canvas>
  )
}

export default JuiceShopCanvas