import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const CubeText = () => {
  const textRef = useRef();
//   useFrame(state => {textRef.current.position.y = Math.sin(state.clock.elapsedTime*3)})
  // useFrame(state => {textRef.current.position.x = Math.sin(state.clock.elapsedTime)})

  return (
   <mesh>
             <torusKnotGeometry  args={[0.01, 2, 100, 7 ,20 ,1]} />
             {/* <boxGeometry args={[2,2,2]}/> */}
             {/* <dodecahedronGeometry args={[2,1]}/> */}
             <meshStandardMaterial flatShading={true}>
              <RenderTexture attach="map">
                <PerspectiveCamera 
                  makeDefault
                  position={[0,0,7]}
                  
                />
                
                <color attach="background" args={["#2C3E50"]} />
                {/* <Text ref={textRef} fontSize={3} color="#5D6D7E">
                  x_o 
                </Text> */}


                {/* <Text ref={textRef} fontSize={0.5} color="#5D6D7E">
                  {">>-I--Love--Design-->>> "}
                </Text> */}
              </RenderTexture>
             </meshStandardMaterial>
    </mesh>
  )
}

export default CubeText