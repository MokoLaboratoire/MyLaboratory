import React from 'react'
import { useGLTF } from '@react-three/drei/native'

function DefaultCubeDraco(props) {
  const { nodes, materials } = useGLTF('../../assets/glb/default_cube_draco.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('../../assets/glb/default_cube_draco.glb')

export default DefaultCubeDraco