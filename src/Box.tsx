import * as React from 'react';

interface Props {
  position: number[];
  name: string;
  color: {};
  wireframe?: boolean;
}

export default function Box({ position, name, color, wireframe }: Props) {
  return (
    <mesh position={position} name={name}>
      <boxGeometry />
      <meshBasicMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}
