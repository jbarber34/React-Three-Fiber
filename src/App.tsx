import { Canvas } from '@react-three/fiber';
import Box from './Box';
import * as React from 'react';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box />
    </Canvas>
  );
}
