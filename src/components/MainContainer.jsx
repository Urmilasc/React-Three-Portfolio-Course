import '../index.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import ReactLogo from './canvas/ReactLogo'
import StarsAnimated from './StarsAnimated'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Contact from './Contact'
import Earth from './canvas/Earth'
import { Perf } from 'r3f-perf'

const MainContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }
  return (
    <>
      <Canvas
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}>
        <Perf position='bottom-left' />
        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />

        <StarsAnimated />
        <Suspense fallback={null}>
          <ReactLogo />
          <Earth />
        </Suspense>
      </Canvas>
      <Loader />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
    </>
  )
}

export default MainContainer
