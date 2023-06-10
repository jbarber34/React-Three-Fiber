import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

interface Props {
  position: number[];
  name: string;
  color: {};
  wireframe?: boolean;
}

export default function Box({ position, name, color, wireframe }: Props) {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  });

  useFrame((_, delta) => {
    // @ts-ignore
    ref.current.rotation.x += 1 * delta;
    // @ts-ignore
    ref.current.rotation.y += 0.5 * delta;
    // @ts-ignore
    // ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2;
  });

  return (
    <mesh position={position} name={name} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}
