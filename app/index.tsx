import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'
import {Vector3} from "three";
import DefaultCubeDraco from './components/DefaultCubeDraco'

const DEFAULT_CAMERA_POSITION = new Vector3(0, 5, 5)

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
        <DefaultCubeDraco />
      </Suspense>
    </Canvas>
  )
}

export default HomeScreen
