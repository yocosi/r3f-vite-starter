import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience() {
    return <>
        <Perf position='top-left' />

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh castShadow position-x={2}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh castShadow position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}