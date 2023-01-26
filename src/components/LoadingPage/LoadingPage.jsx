import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import Television from './Television';
const LoadingPage = () => {
    const isDark=useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${isDark?'bg-black':'bg-white'} bg-opacity-90 absolute  flex flex-col justify-center items-center`} style={{zIndex:100}}>
        <Canvas >
            <OrbitControls enableZoom={false} enableRotate={false}  />
            <Television />
            <ambientLight intensity={1} color={0xDF0E62} />
            <directionalLight position={[0,0,0]} intensity={1} color={0x000000} />           
        </Canvas>
        <h2 className={`absolute top-1/2 pt-5 text-2xl font-bold text-pink`}>Loading ...</h2>
    </div>
  )
}

export default LoadingPage