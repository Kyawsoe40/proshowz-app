
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import logo from './proshowzlogo.png'
const LoadingPage = () => {
    const isDark=useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${isDark?'bg-black':'bg-white'} bg-opacity-90 absolute  flex flex-col gap-y-4 justify-center items-center`} style={{zIndex:100}}>
        <img src={logo} style={{width:'100px',height:'100px'}} alt="logo" />
        <h2 className={` text-2xl font-bold text-pink`}>Loading ...</h2>
    </div>
  )
}

export default LoadingPage