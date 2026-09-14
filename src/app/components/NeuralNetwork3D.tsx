"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, OrbitControls, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Generates random points on a sphere
function getPointsOnSphere(numPoints: number, radius: number) {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(-1 + (2 * i) / numPoints);
    const theta = Math.sqrt(numPoints * Math.PI) * phi;
    
    points.push(new THREE.Vector3(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    ));
  }
  return points;
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create nodes (outer shell and inner core)
  const outerRadius = 4.5;
  const nodes = useMemo(() => getPointsOnSphere(60, outerRadius), []);
  
  // Create connecting lines between close nodes
  const lines = useMemo(() => {
    const connections = [];
    const maxDist = 2.5; // How close nodes need to be to connect
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          connections.push([nodes[i], nodes[j]]);
        }
      }
      // Connect to center core
      if (Math.random() > 0.7) {
         connections.push([nodes[i], new THREE.Vector3(0, 0, 0)]);
      }
    }
    return connections;
  }, [nodes]);

  // Animate the entire network rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        
        {/* Central Core */}
        <Sphere args={[1.2, 32, 32]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.9} />
        </Sphere>
        {/* Core Glow */}
        <Sphere args={[1.5, 32, 32]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </Sphere>
        <Sphere args={[2.5, 32, 32]}>
           <meshBasicMaterial color="#00f0ff" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
        </Sphere>

        {/* Nodes */}
        {nodes.map((pos, i) => (
          <Sphere key={i} position={pos} args={[0.08, 16, 16]}>
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} />
          </Sphere>
        ))}

        {/* Outer node glow for some nodes */}
        {nodes.map((pos, i) => (
          i % 4 === 0 && (
            <Sphere key={`glow-${i}`} position={pos} args={[0.2, 16, 16]}>
              <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
            </Sphere>
          )
        ))}

        {/* Synapse Lines */}
        {lines.map((line, i) => (
          <Line 
            key={i} 
            points={line} 
            color="#00f0ff" 
            lineWidth={1.5} 
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        ))}

        {/* Orbital Rings to match mockup */}
        <Torus args={[5.2, 0.015, 16, 100]} rotation={[Math.PI / 3, 0.5, 0]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </Torus>
        <Torus args={[6, 0.01, 16, 100]} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </Torus>
        <Torus args={[6.8, 0.005, 16, 100]} rotation={[0, Math.PI / 2, Math.PI / 8]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
        </Torus>

      </Float>
    </group>
  );
}

export default function NeuralNetwork3D() {
  return (
    <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] relative">
      {/* Background glow behind canvas */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        {/* Transparent background so HTML shows through */}
        <ambientLight intensity={0.5} />
        <Network />
        
        {/* Soft orbit controls disabled zoom to prevent scrolling issues */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
