/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 calculator_body.glb --transform --keepmeshes --keepmaterials 
Files: calculator_body.glb [56.37KB] > calculator_body-transformed.glb [6.51KB] (88%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3D_Assets/calculator_body-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials.Calculator_Body} />
      <mesh geometry={nodes.Cube008_1.geometry} material={materials['Screen.002']} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={materials.Screen_Inner_Rim_And_Back} />
      <mesh geometry={nodes.Mesh_2001_1.geometry} material={materials.Calculator_Body} />
    </group>
  )
}

useGLTF.preload('/3D_Assets/calculator_body-transformed.glb')