import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { ClampToEdgeWrapping } from "three";

const Earth = () => {
  const earth = useGLTF("./helmet Copy/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="#915EFF" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={8}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={8} />
      <primitive object={earth.scene} scale={1.7} position={[0, 0, 0]} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
