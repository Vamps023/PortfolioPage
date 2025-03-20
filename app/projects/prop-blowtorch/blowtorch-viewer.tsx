"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows, Html, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import { Vector3 } from "three"
import type * as THREE from "three"

function BlowTorchModel() {
  const { scene } = useGLTF(
    "https://dim0sowrs6vsgste.public.blob.vercel-storage.com/Gld/propBlowTorch-haig9gGl91RrfdbmwylYNwvNLwaSZd.glb",
  )
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (modelRef.current && !state.pointer.buttons) {
      // Gentle rotation when not being controlled
      modelRef.current.rotation.y += delta * 0.2
    }
  })

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone()

  return <primitive ref={modelRef} object={clonedScene} scale={1.5} position={[0, -0.5, 0]} />
}

function LoadingScreen() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-[#FF4500] border-opacity-50 rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg ">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

export default function BlowTorchViewer() {
  return (
    <Canvas shadows>
      <Suspense fallback={<LoadingScreen />}>
        {/* Use PerspectiveCamera from drei instead of manipulating camera directly */}
        <PerspectiveCamera makeDefault position={[0, 0.5, 2]} fov={50} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <BlowTorchModel />

        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />

        <Environment preset="forest" />

        <OrbitControls />
      </Suspense>

      {/* Controls Hint */}
      <Html position={new Vector3(0, -1, 0)} center>
        <div className="bg-black bg-opacity-70 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm text-center">
          Interact with the model
        </div>
      </Html>
    </Canvas>
  )
}

