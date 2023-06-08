import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const ConceptCar = () => {
  const model = useGLTF("./concept_car/scene.gltf");
  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={0} />
        <primitive object={model.scene} scale={2} />
      </mesh>
    </>
  );
};

const ConceptCarCanvas = () => {
  return (
    <Canvas
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls enableZoom={false}></OrbitControls>
      <Stage>
        <ConceptCar />
      </Stage>
    </Canvas>
  );
};

export default ConceptCarCanvas;
