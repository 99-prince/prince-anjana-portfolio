import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial, Sphere, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const SignatureObject = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.2;
      sphereRef.current.rotation.z = t * 0.1;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.3;
      icoRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#0ea5e9"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <Icosahedron ref={icoRef} args={[2.2, 0]} scale={1}>
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.15}
          />
        </Icosahedron>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
      
      <SignatureObject />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
    </Canvas>
  );
};

export default Hero3D;
