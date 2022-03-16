/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  const Wave = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/wave.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.n326654.geometry} material={materials.Standard_E4FC27} />
    </group>
  )
}

useGLTF.preload('/wave.glb')