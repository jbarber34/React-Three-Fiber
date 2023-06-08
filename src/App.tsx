import { Canvas } from '@react-three/fiber';
import Box from './Box';
import * as React from 'react';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box
        position={[-0.75, 0, 0]}
        name='A'
        color={0x00ff00}
        wireframe={true}
      />
      <Box
        position={[0.75, 0, 0]}
        name='B'
        color={0xff0000}
        wireframe={false}
      />
    </Canvas>
  );
}
