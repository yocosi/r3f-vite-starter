import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience() {

    const { cubeScale } = useControls('cube', {
        cubeScale: {
            value: 1.5,
            min: 1,
            max: 2,
            step: 0.01
        }
    })

    const { sphereRadius } = useControls('sphere', {
        sphereRadius: {
            value: 1,
            min: 0.5,
            max: 2,
            step: 0.01
        }
    })

    return <>
        <Perf position='top-left' />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh castShadow position-x={2}>
            <boxGeometry args={[cubeScale, cubeScale, cubeScale]} />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh castShadow position-x={-2}>
            <sphereGeometry args={[sphereRadius]} />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-1}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}