import { Suspense, useState } from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Calculator from "./Calculator";

export default function CalculatorContainer() {

    return (
        <div id="calculator-container">
            <Canvas id="three-canvas">
                <PerspectiveCamera makeDefault position={[0, 25, 5]} />
                <OrbitControls />
                <ambientLight intensity={2} color="#FFFED0" />
                <directionalLight position={[0, 0, 10]} intensity={2} color="#FFFED0" />
                <Suspense fallback={null}>
                    <Calculator />
                </Suspense>
            </Canvas>
        </div>
    )
}