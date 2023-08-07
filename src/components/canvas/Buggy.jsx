import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { MeshStandardMaterial, DirectionalLight, PointLight, HemisphereLight } from "three"; // Import the lighting components

import CanvasLoader from "../Loader";

const Buggy = ({ material }) => {
  const buggy = useGLTF("./planet/buggy.gltf");

  // Apply the material to the loaded model
  buggy.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <primitive object={buggy.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};

const BuggyCanvas = () => {
  // Create a material
  const material = new MeshStandardMaterial({
    color: "white",
    roughness: 0.7,
    metalness: 0.5,
  });

  // Create the lights
  const directionalLight = new DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(5, 10, 5);
  directionalLight.castShadow = true;

  const pointLight = new PointLight(0xffffff, 0.8);
  pointLight.position.set(-5, 5, 5);

  const hemisphereLight = new HemisphereLight("skyblue", "lightgray", 0.4);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Lights */}
        <primitive object={directionalLight} />
        <primitive object={pointLight} />
        <primitive object={hemisphereLight} />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Buggy material={material} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BuggyCanvas;
