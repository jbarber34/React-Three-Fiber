import { Canvas } from '@react-three/fiber';
// import Box from './Box';
import * as React from 'react';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      {/* <Box
        position={new THREE.Vector3(-0.75, 0, 0)}
        name='A'
        primaryColor={0x00ff00}
        secondaryColor={0xff0000}
        wireframe={true}
      />
      <Box
        position={new THREE.Vector3(0.75, 0, 0)}
        name='B'
        primaryColor={0xff0000}
        secondaryColor={0x00ff00}
        wireframe={false}
      /> */}
      <Polyhedron
        position={new THREE.Vector3(-0.75, -0.75, 0)}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={new THREE.Vector3(0.75, -0.75, 0)}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={new THREE.Vector3(-0.75, 0.75, 0)}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={new THREE.Vector3(0.75, 0.75, 0)}
        polyhedron={polyhedron}
      />
    </Canvas>
  );
}
