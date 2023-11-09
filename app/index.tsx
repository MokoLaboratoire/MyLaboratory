import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'

import DefaultCube from './components/DefaultCube'

function Box() {
  const refMesh = useRef();

  useFrame(() => {
    // @ts-ignore
    refMesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={refMesh}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

function HomeScreen(): React.JSX.Element {



  return (
    <Canvas>
      <ambientLight />
      <Box />
      <Suspense>
        <DefaultCube />
      </Suspense>
    </Canvas>
  )
}

export default HomeScreen