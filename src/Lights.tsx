import { useRef } from 'react';
// import { useControls } from 'leva';
// import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import * as React from 'react';
interface Props {
  name: string;
  position: any;
  material: any;
}

export default function Lights({ name, position, material }: Props) {
  const ref = useRef();

  useFrame((_, delta) => {
    // @ts-ignore
    ref.current.rotation.x += 0.2 * delta;
    // @ts-ignore
    ref.current.rotation.y += 0.05 * delta;
  });

  return (
    <mesh name={name} position={position} material={material} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
