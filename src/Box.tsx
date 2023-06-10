import * as React from 'react';
import { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  position: THREE.Vector3;
  name: string;
  primaryColor: {};
  secondaryColor: {};
  wireframe?: boolean;
}

export default function Box({
  position,
  name,
  primaryColor,
  secondaryColor,
  wireframe,
}: Props) {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  );

  useEffect(() => {
    // @ts-ignore
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    // @ts-ignore
    ref.current.rotation.x += delta;
    // @ts-ignore
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      position={position}
      name={name}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );

  // BEFORE useMemo
  // const ref = useRef();
  // const [hovered, setHover] = useState(false);
  // const [rotate, setRotate] = useState(false);

  // useEffect(() => {
  //   console.log('Effect Fired');
  // });

  // useFrame((_, delta) => {
  //   if (rotate) {
  //     // @ts-ignore
  //     ref.current.rotation.x += 1 * delta;
  //     // @ts-ignore
  //     ref.current.rotation.y += 0.5 * delta;
  //     // @ts-ignore
  //     // ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2;
  //   }
  // });

  // return (
  //   <mesh
  //     position={position}
  //     name={name}
  //     ref={ref}
  //     // onPointerDown={(e) => console.log('pointer down', e.eventObject.name)}
  //     // onPointerUp={(e) => console.log('pointer up', e.eventObject.name)}
  //     // onPointerOver={(e) => console.log('pointer over', e.eventObject.name)}
  //     // onPointerOut={(e) => console.log('pointer out', e.eventObject.name)}
  //     // onUpdate={(e: any) => console.log(e)}
  //     scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
  //     onPointerDown={() => setRotate(!rotate)}
  //     onPointerOver={() => setHover(true)}
  //     onPointerOut={() => setHover(false)}
  //   >
  //     <boxGeometry />
  //     <meshBasicMaterial
  //       color={hovered ? secondaryColor : primaryColor}
  //       wireframe={wireframe}
  //     />
  //   </mesh>
  // );
}
