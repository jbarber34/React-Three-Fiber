import { Canvas } from '@react-three/fiber';
// import Box from './Box';
import * as React from 'react';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';
// import { Stats } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { useMemo } from 'react';
import Materials from './Materials';

export default function App() {
  const polyhedron = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398),
    ],
    []
  );

  // const options = useMemo(() => {
  //   return {
  //     x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     visible: true,
  //     color: { value: 'lime' },
  //   };
  // }, []);

  // const pA = useControls('Polyhedron A', options);
  // const pB = useControls('Polyhedron B', options);

  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <directionalLight position={[1, 1, 1]} />
      {/* <Box
        position={new THREE.Vector3(-0.75, 0, 0)}
        name='A'
        primaryColor={0x00ff00}
        secondaryColor={0xff0000}
        wireframe={true}
      />
      <Box
        position={new THREE.Vector3(0.75, 0, 0)}
        name='B'
        primaryColor={0xff0000}
        secondaryColor={0x00ff00}
        wireframe={false}
      /> */}
      {/* <Polyhedron
        position={new THREE.Vector3(-0.75, -0.75, 0)}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={new THREE.Vector3(0.75, -0.75, 0)}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedron={polyhedron}
      /> */}
      {/* <Polyhedron
        position={new THREE.Vector3(-0.75, 0.75, 0)}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={new THREE.Vector3(0.75, 0.75, 0)}
        polyhedron={polyhedron}
      /> */}
      <Materials
        name='meshBasicMaterial'
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <Materials
        name='meshNormalMaterial'
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <Materials
        name='meshPhongMaterial'
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <Materials
        name='meshStandardMaterial'
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls
      // enableDamping={false}
      // enablePan={false}
      // enableRotate={false}
      // Limit the amount of rotation
      // minAzimuthAngle={-Math.PI / 4}
      // maxAzimuthAngle={Math.PI / 4}
      // minPolarAngle={Math.PI / 6}
      // maxPolarAngle={Math.PI - Math.PI / 6}
      />
      <axesHelper args={[5]} />
      <gridHelper
        args={[20, 20, 0xff0000, 'teal']}
        // rotation-x={Math.PI / 4} //  Target a specific axis
        rotation={[Math.PI / 4, 0, 0]} // Do X, Y, and Z all at once.
      />

      {/* Show Megabytes Used as default */}
      {/* <Stats showPanel={2} /> */}
      {/* More advance monitoring than Stats */}
      <Perf position='top-left' />
    </Canvas>
  );
}
