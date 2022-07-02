import { useRef, useMemo } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { BufferAttribute, TextureLoader } from 'three'

function Camera() {
  const camera = useRef()
  return <PerspectiveCamera ref={camera} fov={75} aspect={2} near={1.5} far={5} />
}

function Star({ count = 1000 }) {
  const starImage = useLoader(TextureLoader, '/assets/images/star.png')

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
    return new BufferAttribute(new Float32Array(p), 3)
  }, [count])

  const star = useRef()
  const { mouse, viewport } = useThree()
  useFrame(() => {
    star.current.rotation.z += 0.0001
    star.current.position.x = mouse.y * 0.01
    star.current.position.y = mouse.x * -0.01
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

function ShootingStar({ count = 1 }) {
  const starImage = useLoader(TextureLoader, '/assets/images/star.png')

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
    return new BufferAttribute(new Float32Array(p), 3)
  }, [count])

  const shootingStar = useRef()
  const { mouse, viewport } = useThree()
  useFrame(() => {
    shootingStar.current.position.x += 0.1
    shootingStar.current.position.x = mouse.y * 0.02
    shootingStar.current.position.y = mouse.x * -0.02
  })
  return (
    <points ref={shootingStar} scale={viewport.width / 5}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.5} transparent map={starImage} />
    </points>
  )
}

const Starfield = () => {
  return (
    <Canvas className="bg-base -z-1">
      <Camera />
      <Star />
      <ShootingStar />
    </Canvas>
  )
}

export default Starfield
