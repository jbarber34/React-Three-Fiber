import * as React from 'react';

export default function Floor() {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  );
}
