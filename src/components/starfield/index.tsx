import { useRef, useMemo, MutableRefObject } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { BufferAttribute, TextureLoader } from 'three'

function Camera() {
  const camera = useRef()
  return <PerspectiveCamera ref={camera} fov={75} aspect={2} near={1.5} far={5} />
}

function Star({ count = 2000 }) {
  const starImage = useLoader(TextureLoader, '/assets/images/star.png')

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
    return new BufferAttribute(new Float32Array(p), 3)
  }, [count])

  const star = useRef() as MutableRefObject<THREE.Points>
  const { mouse, viewport } = useThree()
  useFrame(() => {
    star.current.rotation.z += 0.0001
    star.current.position.x = mouse.y * 0.02
    star.current.position.y = mouse.x * -0.02
  })
  return (
    <points ref={star} scale={viewport.width / 5}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.02} transparent map={starImage} />
    </points>
  )
}

function ShootingStar({ count = 10 }) {
  const starImage = useLoader(TextureLoader, '/assets/images/star.png')

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 3)
    return new BufferAttribute(new Float32Array(p), 3)
  }, [count])

  const shootingStar = useRef() as MutableRefObject<THREE.Points>
  const { mouse, viewport } = useThree()
  useFrame((state) => {
    if (shootingStar) {
      shootingStar.current.position.z += Math.sin(state.clock.elapsedTime) / 20
      shootingStar.current.position.x = mouse.y * 0.02
      shootingStar.current.position.y = mouse.x * -0.02
      shootingStar.current.visible =
        Math.tan(state.clock.elapsedTime + shootingStar.current.rotation.z) > 0.9
    }
  })
  return (
    <points ref={shootingStar} scale={viewport.width / 5}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.02} transparent map={starImage} />
    </points>
  )
}

const Starfield = () => {
  return (
    <Canvas
      style={{ position: 'absolute', zIndex: -1 }}
      className="bg-gradient-to-b from-base to-dark -z-1 top-0 left-0"
    >
      <Camera />
      <Star />
    </Canvas>
  )
}

export default Starfield
