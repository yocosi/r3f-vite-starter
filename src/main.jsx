import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import './index.css'
import Experience from './Experience.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Leva collapsed={false} />
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [1, 2, 6]
            }}
        >
            <color args={['ivory']} attach="background" />
            <Experience />
        </Canvas>
    </StrictMode>,
)
