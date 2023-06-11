import * as React from 'react';
import { useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';

interface Props {
  position: any;
  rotation: any;
  visible: any;
  polyhedron: any;
  color: any;
}

export default function Polyhedron({
  position,
  rotation,
  visible,
  polyhedron,
  color,
}: Props) {
  const ref = useRef();
  const [count, setCount] = useState(2);

  console.log(polyhedron[count].uuid);

  return (
    <mesh
      position={position}
      rotation={rotation}
      visible={visible}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );

  //  BEFORE Leva
  // const ref = useRef();
  // const [count, setCount] = useState(0);
  // console.log(polyhedron);
  // useFrame((_, delta) => {
  //   // @ts-ignore
  //   ref.current.rotation.x += delta;
  //   // @ts-ignore
  //   ref.current.rotation.y += 0.5 * delta;
  // });
  // return (
  //   <mesh
  //     position={position}
  //     ref={ref}
  //     onPointerDown={() => {
  //       setCount((count + 1) % 3);
  //     }}
  //     geometry={polyhedron[count]}
  //   >
  //     <meshBasicMaterial color={'lime'} wireframe />
  //     {/* Can add axes helper to each mesh if you want */}
  //     {/* <axesHelper /> */}
  //   </mesh>
  // );
}
