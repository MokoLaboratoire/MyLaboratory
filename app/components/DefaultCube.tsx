

import {useGLTF} from "@react-three/drei/native";
import defaultCube from '../assets/glb/default_cube.gltf'

export default function Model() {
    
  const { nodes, materials } = useGLTF(defaultCube, false);

  return (
      <group dispose={null}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      </group>
  );
}
