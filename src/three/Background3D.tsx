import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <Stars 
      ref={ref} 
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
};

const Background3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <color attach="background" args={['#020617']} />
      <ParticleField />
      <fog attach="fog" args={['#020617', 10, 50]} />
    </Canvas>
  );
};

export default Background3D;
