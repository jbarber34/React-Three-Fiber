import { useFrame, useLoader } from '@react-three/fiber';
import { useControls, button } from 'leva';
import * as React from 'react';
import { useState } from 'react';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface Props {
  controls: any;
  lerping: any;
  setLerping: any;
}

export default function Camera({ controls, lerping, setLerping }: Props) {
  const { scene } = useLoader(GLTFLoader, './models/TargetField3Condensed.glb');
  const [to, setTo] = useState(new Vector3(10, 10, 10));

  const [target, setTarget] = useState(new Vector3(0, 1, 0));

  const cameraViews = [
    {
      title: 'Pitcher',
      position: {
        x: 0,
        y: 1.1,
        z: 3.2,
      },
      lookAt: {
        x: 0,
        y: 1.1,
        z: 3.2,
      },
    },
    {
      title: 'Catcher',
      position: {
        x: 0,
        y: 1.1,
        z: -3,
      },
      lookAt: {
        x: 0,
        y: 1.1,
        z: -3,
      },
    },
    {
      title: 'Side',
      position: {
        x: -3,
        y: 1.1,
        z: 0,
      },
      lookAt: {
        x: -3,
        y: 1.1,
        z: 0,
      },
    },
    {
      title: 'Overhead',
      position: {
        x: 0,
        y: 3,
        z: -0.4318,
      },
      lookAt: {
        x: 0,
        y: 3,
        z: -0.4318,
      },
    },
  ];
  useControls('Camera', () => {
    // using reduce
    const _buttons = cameraViews.reduce(
      (acc, a) =>
        Object.assign(acc, {
          [a.title]: button(() => {
            setTo(a.position as Vector3);
            // @ts-ignore
            setTarget(new Vector3(a.lookAt[0], a.lookAt[1], a.lookAt[2]));
            setLerping(true);
          }),
        }),
      {}
    );
    return _buttons;
  });
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta);
      controls.current.target.lerp(target, delta);
    }
  });

  return (
    <>
      <primitive
        object={scene}
        position={[-0.068, -2.09, -1.385]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate by 90 degrees around the Y axis
        castShadow
        receiveShadow
        // material-envMapIntensity={0.4}
        onDoubleClick={(e: any) => {
          setTo(e.camera.position.clone());
          setTarget(e.intersections[0].point.clone());
          setLerping(true);
        }}
      />
    </>
  );
}
