// src/components/MouseCube.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BoxGeometry, EdgesGeometry, LineBasicMaterial,} from 'three';

const MouseCube = () => {
  const outerCubeRef = useRef();
  const middleCubeRef = useRef();
  const innerCubeRef = useRef();

  useFrame(() => {
    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x += 0.003;
      outerCubeRef.current.rotation.y += 0.003;
    }
    if (middleCubeRef.current) {
      middleCubeRef.current.rotation.x += 0.004;
      middleCubeRef.current.rotation.y += 0.004;
    }
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x += 0.005;
      innerCubeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh>
      <lineSegments
        ref={outerCubeRef}
        geometry={new EdgesGeometry(new BoxGeometry(3, 3, 3))}
        material={new LineBasicMaterial({ color: 0xff0000 })}
      />
      <lineSegments
        ref={middleCubeRef}
        geometry={new EdgesGeometry(new BoxGeometry(2, 2, 2))}
        material={new LineBasicMaterial({ color: 0x00ff00 })}
      />
      <lineSegments
        ref={innerCubeRef}
        geometry={new EdgesGeometry(new BoxGeometry(1, 1, 1))}
        material={new LineBasicMaterial({ color: 0x0000ff })}
      />
    </mesh>
  );
};

const MouseCubeContainer = () => {
  return (
    <Canvas>
      <MouseCube />
    </Canvas>
  );
};

export default MouseCubeContainer;
