import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { Perf } from 'r3f-perf';
import { OrbitControls, ContactShadows } from '@react-three/drei';
// import { TestMeshSkeleton } from './TestMeshSkeleton';
import { TestStickSkeleton } from './TestStickSkeleton';
import { useState } from 'react';

export default function CourseApp() {
  const [lerping, setLerping] = useState(false);

  return (
    <>
      <Canvas
        camera={{ position: [0, 1.1, 3.2] }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={2} />
        <directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

        <TestStickSkeleton
          // ref={ref}
          lerping={lerping}
          setLerping={setLerping}
        />
        <ContactShadows position={[0, -0.8, 0]} color={'#ffffff'} />
        <OrbitControls />
        <axesHelper args={[5]} />
        <Perf position='top-left' />
      </Canvas>
    </>
  );
}
