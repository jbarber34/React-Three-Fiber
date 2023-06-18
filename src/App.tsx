import { Canvas, useLoader } from '@react-three/fiber';
// import Box from './Box';
import * as React from 'react';
// import * as THREE from 'three';
// import Polyhedron from './Polyhedron';
// import { Stats } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {
  // Circle,
  OrbitControls,
  Environment,
  // ContactShadows,
  useGLTF,
  Clone,
  Html,
  ContactShadows,
} from '@react-three/drei';
// import { Leva, useControls } from 'leva';
// import { useMemo, useRef } from 'react';
// import Materials from './Materials';
// import LightsComp from './Lights';
// import Floor from './Floor';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Suspense, useState } from 'react';
import { Model } from './Shoe';
// @ts-ignore
// import Models from './models';

// interface Props {
//   url: string;
// }

// function Model({ url }: Props) {
//   const { scene } = useGLTF(url);
//   return <Clone object={scene} />;
// }

// Annotations
// function Model({ url }: Props) {
//   const { scene } = useGLTF(url);
//   const [cache, setCache] = useState<any>({});

//   if (!cache[url]) {
//     const annotations: any = [];

//     scene.traverse((o) => {
//       if (o.userData.prop) {
//         annotations.push(
//           <Html
//             key={o.uuid}
//             position={[o.position.x, o.position.y, o.position.z]}
//             distanceFactor={0.25}
//             // occlude
//             // transform
//           >
//             <div className='annotation'>{o.userData.prop}</div>
//           </Html>
//         );
//       }
//     });

//     console.log('Caching JSX for url ' + url);
//     setCache({
//       ...cache,
//       [url]: <primitive object={scene}>{annotations}</primitive>,
//     });
//   }
//   // @ts-ignore
//   return cache[url];
// }

export default function App() {
  // const { title } = useControls({
  //   title: {
  //     options: Models.map(({ title }) => title),
  //   },
  // });
  // Annotations
  // const { model } = useControls({
  //   model: {
  //     value: 'hammer',
  //     options: Object.keys(Models),
  //   },
  // });
  // End Annotations
  // const texture = useLoader(THREE.TextureLoader, './img/grid.png');
  // Target Field
  // const gltf = useLoader(GLTFLoader, './models/TargetField3Condensed.glb');
  // const gltf = useLoader(GLTFLoader, './models/scene.glb');

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
    <>
      <Canvas camera={{ position: [0, 0, 1.66], near: 0.025 }} shadows>
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
        {/* <Lights />
      <LightsComp
        name='meshBasicMaterial'
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ map: texture })}
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
          new THREE.MeshPhongMaterial({ flatShading: true, map: texture })
        }
      />
      <LightsComp
        name='meshStandardMaterial'
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            flatShading: true,
            map: texture,
          })
        }
      />
      <Floor /> */}
        {/* <Env />
        <Model /> */}
        {/* <directionalLight position={[-3, 100, 100]} intensity={4} castShadow />
      <directionalLight position={[3, -100, -100]} intensity={4} castShadow /> */}
        {/* <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} /> */}
        {/* <primitive
        object={gltf.scene}
        // position={[0, 1, 0]}
        // children-0-castShadow
      /> */}
        {/* Target Field */}
        {/* <primitive
        object={gltf.scene}
        position={[-1.5, -2.22, 0.07]}
        children-0-castShadow
      /> */}
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
        {/* <Environment files='./img/spiaggia_di_mondello_2k.exr' background /> */}
        <Environment preset='forest' />

        {/* <Suspense>
          <Model url={Models[Models.findIndex((m) => m.title === title)].url} />
        </Suspense> */}
        {/* Annotations
        <group>
          <Model url={Models[model]} />
        </group> */}
        <Model />
        <ContactShadows
          // scale={150}
          position={[0, -0.08, 0]}
          // opacity={1.5}
          color={'#ffffff'}
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
          // target={[0, 1, 0]}
          autoRotate
          // maxPolarAngle={Math.PI / 2}
        />
        <axesHelper args={[5]} />
        {/* <gridHelper
        args={[20, 20, 0xff0000, 'teal']}
        // rotation-x={Math.PI / 4} //  Target a specific axis
        rotation={[Math.PI / 4, 0, 0]} // Do X, Y, and Z all at once.
      /> */}

        {/* Show Megabytes Used as default */}
        {/* <Stats showPanel={2} /> */}
        {/* More advance monitoring than Stats */}
        <Perf position='top-left' />
      </Canvas>
      {/* <span id='info'>The {title} is selected.</span> */}
      {/* Annotations
         <span id='info'>
        The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.
      </span> */}
      {/* <Leva collapsed /> */}
    </>
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

// Shadow Video
// function Lights() {
//   const ambientCtl = useControls('Ambient Light', {
//     visible: false,
//     intensity: {
//       value: 1.0,
//       min: 0,
//       max: 1.0,
//       step: 0.1,
//     },
//   });

//   const directionalCtl = useControls('Directional Light', {
//     visible: true,
//     position: {
//       x: 3.3,
//       y: 1.0,
//       z: 4.4,
//     },
//     castShadow: true,
//   });

//   const pointCtl = useControls('Point Light', {
//     visible: false,
//     position: {
//       x: 2,
//       y: 0,
//       z: 0,
//     },
//     castShadow: true,
//   });

//   const spotCtl = useControls('Spot Light', {
//     visible: false,
//     position: {
//       x: 3,
//       y: 2.5,
//       z: 1,
//     },
//     castShadow: true,
//   });

//   return (
//     <>
//       <ambientLight
//         visible={ambientCtl.visible}
//         intensity={ambientCtl.intensity}
//       />
//       <directionalLight
//         visible={directionalCtl.visible}
//         position={[
//           directionalCtl.position.x,
//           directionalCtl.position.y,
//           directionalCtl.position.z,
//         ]}
//         castShadow={directionalCtl.castShadow}
//       />
//       <pointLight
//         visible={pointCtl.visible}
//         position={[
//           pointCtl.position.x,
//           pointCtl.position.y,
//           pointCtl.position.z,
//         ]}
//         castShadow={pointCtl.castShadow}
//       />
//       <spotLight
//         visible={spotCtl.visible}
//         position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
//         castShadow={spotCtl.castShadow}
//       />
//     </>
//   );
// }

// useLoader Video
// function Lights() {
//   const directionalRef = React.useRef();

//   useControls('Directional Light', {
//     intensity: {
//       value: 1,
//       min: 0,
//       max: 5,
//       step: 0.1,
//       onChange: (v) => {
//         // @ts-ignore
//         directionalRef.current.intensity = v;
//       },
//     },
//     // @ts-ignore
//     position: {
//       x: 3.3,
//       y: 1.0,
//       z: 4.4,
//       onChange: (v) => {
//         // @ts-ignore
//         directionalRef.current.position.copy(v);
//       },
//     },
//   });

//   return <directionalLight ref={directionalRef} castShadow />;
// }

// Advanced GLTF Example
// function Model() {
//   const { scene } = useLoader(GLTFLoader, './models/scene.glb');

//   const {
//     x,
//     y,
//     z,
//     visible,
//     color,
//     metalness,
//     roughness,
//     clearcoat,
//     clearcoatRoughness,
//     transmission,
//     ior,
//     thickness,
//   } = useControls('Suzanne', {
//     x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//     y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//     z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//     visible: true,
//     color: { value: '#861eff' },
//     metalness: { value: 0, min: 0, max: 1.0, step: 0.01 },
//     roughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
//     clearcoat: { value: 1, min: 0, max: 1.0, step: 0.01 },
//     clearcoatRoughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
//     transmission: { value: 1.0, min: 0, max: 1.0, step: 0.01 },
//     ior: { value: 1.74, min: 1, max: 5, step: 0.01 },
//     thickness: { value: 3.12, min: 0, max: 5, step: 0.01 },
//   });

//   return (
//     <primitive
//       object={scene}
//       children-4-rotation={[x, y, z]}
//       children-4-visible={visible}
//       children-4-material-color={color}
//       children-4-material-metalness={metalness}
//       children-4-material-roughness={roughness}
//       children-4-material-clearcoat={clearcoat}
//       children-4-material-clearcoatRoughness={clearcoatRoughness}
//       children-4-material-transmission={transmission}
//       children-4-material-ior={ior}
//       children-4-material-thickness={thickness}
//     />
//   );
// }

// function Env() {
//   const { height, radius, scale } = useControls('Ground', {
//     height: { value: 10, min: 0, max: 100, step: 1 },
//     radius: { value: 115, min: 0, max: 1000, step: 1 },
//     scale: { value: 100, min: 0, max: 1000, step: 1 },
//   });
//   return (
//     <Environment
//       // preset="sunset"
//       files='./img/spiaggia_di_mondello_2k.exr'
//       blur={0}
//       background
//       ground={{
//         height: height,
//         radius: radius,
//         scale: scale,
//       }}
//     />
//   );
// }
