
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const LoadingPage = () => {
    const isDark=useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${isDark?'bg-black':'bg-white'} bg-opacity-90 absolute  flex flex-col justify-center items-center`} style={{zIndex:100}}>
        
        <h2 className={`absolute top-1/2 text-2xl font-bold text-pink`}>Loading ...</h2>
    </div>
  )
}

export default LoadingPage