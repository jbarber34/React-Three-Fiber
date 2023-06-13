import { Canvas } from '@react-three/fiber';
// import Box from './Box';
import * as React from 'react';
import * as THREE from 'three';
// import Polyhedron from './Polyhedron';
// import { Stats } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
// import { useMemo, useRef } from 'react';
// import Materials from './Materials';
import LightsComp from './Lights';
import Floor from './Floor';

function Lights() {
  const ambientCtl = useControls('Ambient Light', {
    visible: false,
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
  });

  const directionalCtl = useControls('Directional Light', {
    visible: true,
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    castShadow: true,
  });

  const pointCtl = useControls('Point Light', {
    visible: false,
    position: {
      x: 2,
      y: 0,
      z: 0,
    },
    castShadow: true,
  });

  const spotCtl = useControls('Spot Light', {
    visible: false,
    position: {
      x: 3,
      y: 2.5,
      z: 1,
    },
    castShadow: true,
  });

  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        castShadow={directionalCtl.castShadow}
      />
      <pointLight
        visible={pointCtl.visible}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
        castShadow={pointCtl.castShadow}
      />
      <spotLight
        visible={spotCtl.visible}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
        castShadow={spotCtl.castShadow}
      />
    </>
  );
}

export default function App() {
  // const polyhedron = useMemo(
  //   () => [
  //     new THREE.BoxGeometry(),
  //     new THREE.SphereGeometry(0.785398),
  //     new THREE.DodecahedronGeometry(0.785398),
  //   ],
  //   []
  // );

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
    <Canvas camera={{ position: [4, 4, 8] }} shadows>
      {/* <directionalLight position={[1, 1, 1]} /> */}
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

      {/* <Materials
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
      /> */}
      <Lights />
      <LightsComp
        name='meshBasicMaterial'
        position={[-3, 1, 0]}
        material={
          // @ts-ignore
          new THREE.MeshBasicMaterial({ color: 'yellow', flatShading: true })
        }
      />
      <LightsComp
        name='meshNormalMaterial'
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <LightsComp
        name='meshPhongMaterial'
        position={[1, 1, 0]}
        material={
          new THREE.MeshPhongMaterial({ color: 'lime', flatShading: true })
        }
      />
      <LightsComp
        name='meshStandardMaterial'
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            color: 0xff0033,
            flatShading: true,
          })
        }
      />
      <Floor />
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

// Lights Video
// function Lights() {
//   const ambientRef = useRef();
//   const directionalRef = useRef();
//   const pointRef = useRef();
//   const spotRef = useRef();

//   useControls('Ambient Light', {
//     visible: {
//       value: false,
//       onChange: (v) => {
//         // @ts-ignore
//         ambientRef.current.visible = v;
//       },
//     },
//     color: {
//       value: 'white',
//       onChange: (v) => {
//         // @ts-ignore
//         ambientRef.current.color = new THREE.Color(v);
//       },
//     },
//     intensity: {
//       value: 0.5,
//       min: 0,
//       max: 1,
//       step: 0.1,
//       onChange: (v) => {
//         // @ts-ignore
//         ambientRef.current.intensity = v;
//       },
//     },
//   });

//   useControls('Directional Light', {
//     visible: {
//       value: true,
//       onChange: (v) => {
//         // @ts-ignore
//         directionalRef.current.visible = v;
//       },
//     },
//     // @ts-ignore
//     position: {
//       x: 1,
//       y: 1,
//       z: 1,
//       onChange: (v) => {
//         // @ts-ignore
//         directionalRef.current.position.copy(v);
//       },
//     },
//     color: {
//       value: 'white',
//       onChange: (v) => {
//         // @ts-ignore
//         directionalRef.current.color = new THREE.Color(v);
//       },
//     },
//   });

//   useControls('Point Light', {
//     visible: {
//       value: false,
//       onChange: (v) => {
//         // @ts-ignore
//         pointRef.current.visible = v;
//       },
//     },
//     // @ts-ignore
//     position: {
//       x: 2,
//       y: 0,
//       z: 0,
//       onChange: (v) => {
//         // @ts-ignore
//         pointRef.current.position.copy(v);
//       },
//     },
//     color: {
//       value: 'white',
//       onChange: (v) => {
//         // @ts-ignore
//         pointRef.current.color = new THREE.Color(v);
//       },
//     },
//   });

//   useControls('Spot Light', {
//     visible: {
//       value: false,
//       onChange: (v) => {
//         // @ts-ignore
//         spotRef.current.visible = v;
//       },
//     },
//     // @ts-ignore
//     position: {
//       x: 3,
//       y: 2.5,
//       z: 1,
//       onChange: (v) => {
//         // @ts-ignore
//         spotRef.current.position.copy(v);
//       },
//     },
//     color: {
//       value: 'white',
//       onChange: (v) => {
//         // @ts-ignore
//         spotRef.current.color = new THREE.Color(v);
//       },
//     },
//   });

//   return (
//     <>
//       <ambientLight ref={ambientRef} />
//       <directionalLight ref={directionalRef} />
//       <pointLight ref={pointRef} />
//       <spotLight ref={spotRef} />
//     </>
//   );
// }
