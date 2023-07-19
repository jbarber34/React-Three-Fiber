import { useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Euler, Vector3 } from 'three';

// Helper function to compute the world position of an object
function getWorldPosition(object: any) {
  const position = new THREE.Vector3();
  object.getWorldPosition(position);
  return position;
}

export function TestMeshSkeleton() {
  // Target Field
  const gltf = useLoader(GLTFLoader, './models/TargetField3Condensed.glb');
  const barbarian = useLoader(GLTFLoader, './models/ninja@baseballPitch.glb');

  const { scene } = useGLTF('./models/barbarian w-skeleton3.glb');

  // Access the armature and model nodes
  //   const armature = scene.getObjectByName('Skeleton');
  // const model = scene.getObjectByName('Model');

  //   const torso = {
  //     x: 0.994 * 3.28084,
  //     y: 0.188 * 3.28084,
  //     z: 0.935 * 3.28084,
  //   };

  //   const pelvisL = {
  //     x: 0.994 * 3.28084,
  //     y: 0.188 * 3.28084,
  //     z: 0.935 * 3.28084,
  //   };
  //   const pelvisR = {
  //     x: 0.994 * 3.28084,
  //     y: 0.188 * 3.28084,
  //     z: 0.935 * 3.28084,
  //   };

  //   const upperLegL = {
  //     x: 0.971 * 3.28084,
  //     y: 0.114 * 3.28084,
  //     z: 0.944 * 3.28084,
  //   };
  //   const upperLegR = {
  //     x: 1.016 * 3.28084,
  //     y: 0.262 * 3.28084,
  //     z: 0.928 * 3.28084,
  //   };
  //   const lowerLegL = {
  //     x: 0.847 * 3.28084,
  //     y: -0.144 * 3.28084,
  //     z: 0.501 * 3.28084,
  //   };
  //   const lowerLegR = {
  //     x: 0.748 * 3.28084,
  //     y: 0.449 * 3.28084,
  //     z: 0.512 * 3.28084,
  //   };
  //   const footL = {
  //     x: 1.029 * 3.28084,
  //     y: -0.372 * 3.28084,
  //     z: 0.124 * 3.28084,
  //   };
  //   const footR = {
  //     x: 0.989 * 3.28084,
  //     y: 0.574 * 3.28084,
  //     z: 0.119 * 3.28084,
  //   };

  const torso = new Vector3(0.994 * 3.28084, 0.188 * 3.28084, 0.935 * 3.28084);

  const upperLegL = new Vector3(
    0.971 * 3.28084,
    0.114 * 3.28084,
    0.944 * 3.28084
  );
  const upperLegR = new Vector3(
    1.016 * 3.28084,
    0.262 * 3.28084,
    0.928 * 3.28084
  );

  const lowerLegL = new Vector3(
    0.847 * 3.28084,
    -0.144 * 3.28084,
    0.501 * 3.28084
  );
  const lowerLegR = new Vector3(
    0.748 * 3.28084,
    0.449 * 3.28084,
    0.512 * 3.28084
  );

  const footL = new Vector3(1.029 * 3.28084, -0.372 * 3.28084, 0.124 * 3.28084);
  const footR = new Vector3(0.989 * 3.28084, 0.574 * 3.28084, 0.119 * 3.28084);

  // Calculate joint angles
  const torsoToUpperLegLAngle = torso.angleTo(upperLegL);
  const torsoToUpperLegRAngle = torso.angleTo(upperLegR);

  const upperLegLToLowerLegLAngle = upperLegL.angleTo(lowerLegL);
  const upperLegRToLowerLegRAngle = upperLegR.angleTo(lowerLegR);

  const lowerLegLToFootLAngle = lowerLegL.angleTo(footL);
  const lowerLegRToFootRAngle = lowerLegR.angleTo(footR);

  console.log('Torso to Upper Leg (Left) Angle:', torsoToUpperLegLAngle);
  console.log('Torso to Upper Leg (Right) Angle:', torsoToUpperLegRAngle);

  console.log(
    'Upper Leg (Left) to Lower Leg (Left) Angle:',
    upperLegLToLowerLegLAngle
  );
  console.log(
    'Upper Leg (Right) to Lower Leg (Right) Angle:',
    upperLegRToLowerLegRAngle
  );

  console.log('Lower Leg (Left) to Foot (Left) Angle:', lowerLegLToFootLAngle);
  console.log(
    'Lower Leg (Right) to Foot (Right) Angle:',
    lowerLegRToFootRAngle
  );

  //   const jointAngles = {
  //     torsoToUpperLegLAngle: torso.angleTo(upperLegL), // Set the calculated angle here
  //     torsoToUpperLegRAngle: torso.angleTo(upperLegR), // Set the calculated angle here
  //     upperLegLToLowerLegLAngle: upperLegL.angleTo(lowerLegL), // Set the calculated angle here
  //     upperLegRToLowerLegRAngle: upperLegR.angleTo(lowerLegR), // Set the calculated angle here
  //     lowerLegLToFootLAngle: lowerLegL.angleTo(footL), // Set the calculated angle here
  //     lowerLegRToFootRAngle: lowerLegL.angleTo(footR), // Set the calculated angle here
  //   };

  //   const rotateBone = (boneName: any, rotation: any) => {
  //     const bone = scene.getObjectByName(boneName);
  //     if (bone) {
  //       bone.rotation.copy(rotation);
  //     }
  //   };

  //   useFrame(() => {
  //     // Convert angles to radians
  //     const torsoToUpperLegLRotation = new Euler(
  //       0,
  //       jointAngles.torsoToUpperLegLAngle,
  //       0,
  //       'XYZ'
  //     );
  //     const torsoToUpperLegRRotation = new Euler(
  //       0,
  //       jointAngles.torsoToUpperLegRAngle,
  //       0,
  //       'XYZ'
  //     );
  //     const upperLegLToLowerLegLRotation = new Euler(
  //       0,
  //       jointAngles.upperLegLToLowerLegLAngle,
  //       0,
  //       'XYZ'
  //     );
  //     const upperLegRToLowerLegRRotation = new Euler(
  //       0,
  //       jointAngles.upperLegRToLowerLegRAngle,
  //       0,
  //       'XYZ'
  //     );
  //     const lowerLegLToFootLRotation = new Euler(
  //       0,
  //       jointAngles.lowerLegLToFootLAngle,
  //       0,
  //       'XYZ'
  //     );
  //     const lowerLegRToFootRRotation = new Euler(
  //       0,
  //       jointAngles.lowerLegRToFootRAngle,
  //       0,
  //       'XYZ'
  //     );

  //     // Rotate the bones
  //     rotateBone('UpperLegL', torsoToUpperLegLRotation);
  //     rotateBone('UpperLegR', torsoToUpperLegRRotation);
  //     rotateBone('LowerLegL', upperLegLToLowerLegLRotation);
  //     rotateBone('LowerLegR', upperLegRToLowerLegRRotation);
  //     rotateBone('FootL', lowerLegLToFootLRotation);
  //     rotateBone('FootR', lowerLegRToFootRRotation);
  //   });

  scene.getObjectByName('PelvisL').rotateZ(1.5708);
  scene.getObjectByName('UpperLegL').rotateZ(-1.8708);
  scene.getObjectByName('UpperLegL').rotateX(0.5708);
  scene.getObjectByName('UpperLegL').rotateY(0.5708);
  scene.getObjectByName('LowerLegL').rotateZ(0.5708);
  scene.getObjectByName('LowerLegL').rotateZ(0.5708);

  scene.getObjectByName('FootL').rotateZ(0.3708);
  scene.getObjectByName('Torso').rotateZ(0.3708);
  scene.getObjectByName('Torso').rotateY(0.4708);
  scene.getObjectByName('ForearmR').rotateX(2.3708);
  scene.getObjectByName('UpperArmL').rotateX(0.7708);
  scene.getObjectByName('UpperArmL').rotateZ(-0.3708);

  //   // y, z, x
  //   scene.getObjectByName('Torso').position.set(torso.y, torso.z, torso.x);
  //   // y, z, x
  //   scene.getObjectByName('PelvisL').position.set(torso.y, torso.z, torso.x);
  //   // y, z, x
  //   scene.getObjectByName('PelvisR').position.set(torso.y, torso.z, torso.x);
  //   // x, y, z
  //   scene
  //     .getObjectByName('UpperLegL')
  //     .position.set(
  //       -(upperLegL.x - torso.x),
  //       -(upperLegL.y - torso.y),
  //       -(upperLegL.z - torso.z)
  //     );
  //   scene
  //     .getObjectByName('UpperLegR')
  //     .position.set(
  //       upperLegR.x - torso.x,
  //       upperLegR.y - torso.y,
  //       upperLegR.z - torso.z
  //     );
  //   // x, z, y
  //   scene
  //     .getObjectByName('LowerLegL')
  //     .position.set(
  //       -(lowerLegL.x - upperLegL.x),
  //       -(lowerLegL.z - upperLegL.z),
  //       -(lowerLegL.y - upperLegL.y)
  //     );
  //   scene
  //     .getObjectByName('LowerLegR')
  //     .position.set(
  //       -(lowerLegR.x - upperLegR.x),
  //       -(lowerLegR.z - upperLegR.z),
  //       lowerLegR.y - upperLegR.y
  //     );
  //   scene
  //     .getObjectByName('FootL')
  //     .position.set(
  //       -(footL.x - lowerLegL.x),
  //       -(footL.z - lowerLegL.z),
  //       footL.y - lowerLegL.y
  //     );
  //   scene
  //     .getObjectByName('FootR')
  //     .position.set(
  //       footR.x - lowerLegR.x,
  //       -(footR.z - lowerLegR.z),
  //       footR.y - lowerLegR.y
  //     );

  // // Rotate the UpperLegL bone without affecting the LowerLegL bone
  // const upperLegLBone = scene.getObjectByName('UpperLegL');
  // const lowerLegLBone = scene.getObjectByName('LowerLegL');
  // if (upperLegLBone && lowerLegLBone) {
  //   // Create an intermediary object to perform the rotation
  //   const intermediaryObject = new THREE.Object3D();
  //   intermediaryObject.add(upperLegLBone);

  //   // Set the desired rotation for the UpperLegL bone
  //   intermediaryObject.rotation.set(0, 0, Math.PI / 2);

  //   // Update the position of the LowerLegL bone to account for the rotation change
  //   const lowerLegLPosition = new THREE.Vector3();
  //   lowerLegLBone.getWorldPosition(lowerLegLPosition);
  //   const inverseMatrix = new THREE.Matrix4();
  //   inverseMatrix.copy(intermediaryObject.matrixWorld).invert();
  //   lowerLegLPosition.applyMatrix4(inverseMatrix);
  //   lowerLegLBone.position.copy(lowerLegLPosition);
  // }

  // console.log(reactThreeFiberOrigin, modelOrigin, testHand, testTorso);
  // Calculate the offset between the armature's origin and the React Three Fiber coordinate system's origin
  // const offset = new THREE.Vector3();

  // Move the position of each bone globally to its respective target position
  // moveBonesToPosition(boneTargets, armature, offset);
  // console.log(barbarian.scene.children[0].children[1].children[0].children[0]);
  // console.log(barbarian.scene.children[1].children[1]);
  // console.log(barbarian.nodes);
  // barbarian.nodes.LowerLegL.position.z = 1;
  // barbarian.nodes.UpperLegL.position.y = 1;
  // const testX = barbarian.nodes.PelvisL.position.x;
  // const testY = barbarian.nodes.PelvisL.position.y;
  // const testZ = barbarian.nodes.PelvisL.position.z;
  // barbarian.nodes.Torso.position.x = 0;
  // barbarian.nodes.Torso.position.y = 0;
  // barbarian.nodes.Torso.position.z = 0;
  // // barbarian.nodes.Axe.position.x = 0
  // // barbarian.nodes.Axe.position.y = 0
  // // barbarian.nodes.Axe.position.z = 0
  // barbarian.nodes.Skeleton.position.y = 0;
  // const batTopData = {
  //   x: 1.287,
  //   y: -0.084,
  //   z: 1.72,
  // };

  // const batBottomData = {
  //   x: 0.597,
  //   y: 0.332,
  //   z: 1.506,
  // };

  // const handLeadData = {
  //   x: 0.624,
  //   y: 0.291,
  //   z: 1.511,
  // };

  // const handTrailData = {
  //   x: 0.714,
  //   y: 0.278,
  //   z: 1.559,
  // };

  // const wristLeadData = {
  //   x: 0.609,
  //   y: 0.274,
  //   z: 1.441,
  // };
  // barbarian.nodes.HandL.position.set(
  //   wristLeadData.x,
  //   wristLeadData.y,
  //   wristLeadData.z
  // );

  // const elbowLeadData = {
  //   x: 0.566,
  //   y: 0.082,
  //   z: 1.245,
  // };

  // const elbowTrailData = {
  //   x: 0.938,
  //   y: 0.565,
  //   z: 1.475,
  // };

  // const shoulderLeadData = {
  //   x: 0.773,
  //   y: -0.094,
  //   z: 1.426,
  // };

  // const shoulderTrailData = {
  //   x: 0.904,
  //   y: 0.248,
  //   z: 1.511,
  // };

  // const spineHighData = {
  //   x: 0.863,
  //   y: 0.11,
  //   z: 1.266,
  // };

  // const hipLeadData = {
  //   x: 0.942,
  //   y: 0.038,
  //   z: 0.939,
  // };

  // const hipTrailData = {
  //   x: 0.997,
  //   y: 0.19,
  //   z: 0.917,
  // };

  // const kneeLeadData = {
  //   x: -0.802,
  //   y: -0.225,
  //   z: 0.493,
  // };

  // const kneeTrailData = {
  //   x: 0.713,
  //   y: 0.413,
  //   z: 0.507,
  // };

  // const ankleLeadData = {
  //   x: 0.994,
  //   y: 0.441,
  //   z: 0.12,
  // };

  // const ankleTrailData = {
  //   x: 0.959,
  //   y: 0.512,
  //   z: 0.118,
  // };

  // const midfootLeadData = {
  //   x: 0.837,
  //   y: -0.439,
  //   z: 0.046,
  // };

  // const midfootTrailData = {
  //   x: 0.821,
  //   y: 0.58,
  //   z: 0.038,
  // };

  // const centerOfMassData = {
  //   x: 0.875,
  //   y: 0.113,
  //   z: 0.986,
  // };

  // const pelvisCOMData = {
  //   x: 0.969,
  //   y: 0.114,
  //   z: 0.928,
  // };

  console.log(barbarian);
  // barbarian.nodes.UpperLegL.rotation.y = -1.5707963267948966;

  return (
    <group>
      {/* Target Field */}
      <primitive
        object={gltf.scene}
        position={[-1.4, -2.11, 0.07]}
        children-0-castShadow
      />
      <primitive
        object={scene}
        // position={[-1.5, -2.22, 0.07]}
        children-0-castShadow
      />
    </group>
  );
}

useGLTF.preload('./models/shoe-draco.glb');
