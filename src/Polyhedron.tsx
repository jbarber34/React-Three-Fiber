import * as React from 'react';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

interface Props {
  position: THREE.Vector3;
  polyhedron: any;
}

export default function Polyhedron({ position, polyhedron }: Props) {
  const ref = useRef();
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    // @ts-ignore
    ref.current.rotation.x += delta;
    // @ts-ignore
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
      {/* Can add axes helper to each mesh if you want */}
      {/* <axesHelper /> */}
    </mesh>
  );
}
