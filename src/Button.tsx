import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Color } from 'three';
import * as React from 'react';

interface Props {
  key: number;
  position: any;
}

const black = new Color('black');

export default function Button({ key, position }: Props) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const colorTo = useMemo(
    () => new Color(Math.floor(Math.random() * 16777216)),
    []
  );

  useFrame(() => {
    // @ts-ignore
    ref.current.rotation.x = hovered
      ? // @ts-ignore
        MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
      : // @ts-ignore
        MathUtils.lerp(ref.current.rotation.x, 0, 0.025);

    // @ts-ignore
    ref.current.position.z = selected
      ? // @ts-ignore
        MathUtils.lerp(ref.current.position.z, 0, 0.025)
      : // @ts-ignore
        MathUtils.lerp(ref.current.position.z, -3, 0.025);

    // @ts-ignore
    ref.current.material.color.lerp(selected ? colorTo : black, 0.025);
  });

  return (
    <mesh
      key={key}
      position={position}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1.0}
      />
    </mesh>
  );
}
