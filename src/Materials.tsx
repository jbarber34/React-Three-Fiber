import { useRef } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import * as React from 'react';
interface Props {
  name: string;
  position: any;
  material: any;
}

export default function Materials({ name, position, material }: Props) {
  const ref = useRef();

  useFrame((_, delta) => {
    // @ts-ignore
    ref.current.rotation.x += 0.2 * delta;
    // @ts-ignore
    ref.current.rotation.y += 0.05 * delta;
  });

  useControls(name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        // @ts-ignore
        ref.current.material.wireframe = v;
      },
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        // @ts-ignore
        ref.current.material.flatShading = v;
        // @ts-ignore
        ref.current.material.needsUpdate = true;
      },
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        // @ts-ignore
        ref.current.material.color = new THREE.Color(v);
      },
    },
  });

  return (
    <mesh position={position} material={material} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
