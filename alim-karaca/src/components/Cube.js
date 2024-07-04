// src/components/MouseCube.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BoxGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, MeshBasicMaterial, Mesh, SphereGeometry } from 'three';

const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

const MouseCube = () => {
  const outerCubeRef = useRef();
  const middleCubeRef = useRef();
  const innerCubeRef = useRef();
  const sphereRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ outer: { x: 0, y: 0 }, middle: { x: 0, y: 0 }, inner: { x: 0, y: 0 } });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const targetRotationOuter = {
      x: (mousePos.y / window.innerHeight) * 0.5 * Math.PI,
      y: (mousePos.x / window.innerWidth) * 0.5 * Math.PI,
    };
    const targetRotationMiddle = {
      x: (mousePos.y / window.innerHeight) * -1 * Math.PI,
      y: (mousePos.x / window.innerWidth) * -1 * Math.PI,
    };
    const targetRotationInner = {
      x: (mousePos.y / window.innerHeight) * 1.5 * Math.PI,
      y: (mousePos.x / window.innerWidth) * 1.5 * Math.PI,
    };

    setRotation((prevRotation) => ({
      outer: {
        x: lerp(prevRotation.outer.x, targetRotationOuter.x, 0.1),
        y: lerp(prevRotation.outer.y, targetRotationOuter.y, 0.1),
      },
      middle: {
        x: lerp(prevRotation.middle.x, targetRotationMiddle.x, 0.1),
        y: lerp(prevRotation.middle.y, targetRotationMiddle.y, 0.1),
      },
      inner: {
        x: lerp(prevRotation.inner.x, targetRotationInner.x, 0.1),
        y: lerp(prevRotation.inner.y, targetRotationInner.y, 0.1),
      },
    }));

    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x = rotation.outer.x;
      outerCubeRef.current.rotation.y = rotation.outer.y;
    }
    if (middleCubeRef.current) {
      middleCubeRef.current.rotation.x = rotation.middle.y;
      middleCubeRef.current.rotation.y = rotation.middle.x;
    }
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x = rotation.inner.x;
      innerCubeRef.current.rotation.y = rotation.inner.y;
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
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
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
