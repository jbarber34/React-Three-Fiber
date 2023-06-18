import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as React from 'react';

interface Props {
  position: any;
  boxSelected?: boolean;
  keyMapInput: any;
}

export default function Box({ position, boxSelected, keyMapInput }: Props) {
  const ref = useRef<any>();
  const keyMap = keyMapInput;
  const [selected, setSelected] = useState(boxSelected);

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta);
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta);
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta);
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta);
    keyMap['KeyE'] && selected && (ref.current.position.y += 1 * delta);
    keyMap['KeyF'] && selected && (ref.current.position.y -= 1 * delta);
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerDown={() => setSelected(!selected)}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  );
}
