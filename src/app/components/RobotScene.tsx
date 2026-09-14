"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Individual animated wavy line
function Tendril({ dir, u, v, phase, freq, amp, radius, points, color }: any) {
  const synapseRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(points * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [points]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const posArray = geometry.attributes.position.array as Float32Array;
    
    let endX = 0, endY = 0, endZ = 0;

    for (let j = 0; j < points; j++) {
      const t_param = j / (points - 1);
      
      // Start slightly inside the sphere so lines emerge seamlessly
      const startOffset = 0.5;
      const dist = startOffset + t_param * (radius - startOffset);
      
      // Exponential spread so the wave gets wider as it moves outward
      const spread = Math.pow(t_param, 1.5); 
      
      // Calculate 2D wave motion on the orthogonal u,v plane relative to direction
      const wave = Math.sin(t_param * freq * Math.PI * 2 - t * 3 + phase) * amp * spread;
      const wave2 = Math.cos(t_param * (freq * 1.2) * Math.PI * 2 - t * 2.5 + phase) * (amp * 0.8) * spread;
      
      const finalX = dir.x * dist + u.x * wave + v.x * wave2;
      const finalY = dir.y * dist + u.y * wave + v.y * wave2;
      const finalZ = dir.z * dist + u.z * wave + v.z * wave2;

      posArray[j * 3] = finalX;
      posArray[j * 3 + 1] = finalY;
      posArray[j * 3 + 2] = finalZ;

      if (j === points - 1) {
        endX = finalX;
        endY = finalY;
        endZ = finalZ;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    if (synapseRef.current) {
      synapseRef.current.position.set(endX, endY, endZ);
      // Pulsate the synapse
      const scale = 1 + Math.sin(t * 5 + phase) * 0.4;
      synapseRef.current.scale.set(scale, scale, scale);
    }
  });
  return (
    <group>
      {/* @ts-ignore - R3F line type conflicts with SVG line in Next.js */}
      <line geometry={geometry}>
        <lineBasicMaterial 
          color={color} 
          transparent 
          opacity={0.6} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false} 
        />
      </line>
      <mesh ref={synapseRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {/* Base attach glow to highlight connection to core */}
      <mesh position={[dir.x * 0.5, dir.y * 0.5, dir.z * 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function NeuralCore() {
  const count = 250; // Increased density for realistic neural look
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Position on the right side of the screen for desktop, center for mobile
  const isDesktop = viewport.width > 12;
  const positionX = isDesktop ? viewport.width * 0.20 : 0;
  
  const tendrils = useMemo(() => {
    const items = [];
    const color1 = new THREE.Color("#00f0ff"); // Cyan
    const color2 = new THREE.Color("#ff00a0"); // Neon Pink/Magenta
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      );
      
      const up = new THREE.Vector3(0, 1, 0);
      if (Math.abs(dir.y) > 0.99) up.set(1, 0, 0);
      const u = new THREE.Vector3().crossVectors(dir, up).normalize();
      const v = new THREE.Vector3().crossVectors(dir, u).normalize();
      
      const tempColor = new THREE.Color();
      const isMagenta = Math.random() > 0.6;
      tempColor.copy(isMagenta ? color2 : color1);
      
      items.push({
        key: i,
        dir, u, v,
        phase: Math.random() * Math.PI * 2,
        freq: 0.5 + Math.random() * 1.5,
        amp: 0.2 + Math.random() * 0.6, // Tighter curves
        radius: 2.0 + Math.random() * 3.5, // Less length for tendrils
        points: 40,
        color: tempColor
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    // Fixed position requested: No rotation
  });

  return (
    <group ref={groupRef} position={[positionX, 0, 0]} scale={0.45}>
      {/* Central dark core mimicking the image */}
      <Sphere args={[1.0, 32, 32]}>
        <meshBasicMaterial color="#000b24" />
      </Sphere>
      
      {/* Glowing outer cyan edge aura - highlighted heavily */}
      <Sphere args={[1.05, 32, 32]}>
        <meshBasicMaterial 
          color="#00f0ff" 
          transparent 
          opacity={0.9} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>

      {/* Larger soft glow aura - expanded */}
      <Sphere args={[1.4, 32, 32]}>
        <meshBasicMaterial 
          color="#00f0ff" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>
      
      {/* The wavy electric tendrils radiating out */}
      {tendrils.map(({ key, ...tProps }) => (
        <Tendril key={key} {...tProps} />
      ))}
    </group>
  );
}

export default function RobotScene() {
  return (
    <div className="w-full h-full cursor-move">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#b026ff" />
        
        <group>
          <NeuralCore />
        </group>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
