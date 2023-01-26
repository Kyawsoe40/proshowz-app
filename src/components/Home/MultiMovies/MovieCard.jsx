import React, { useContext } from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { GoDeviceDesktop } from 'react-icons/go'
import { ThemeContext } from '../../context/ThemeContext'

const MovieCard = ({movie}) => {
  const isDark=useContext(ThemeContext);
  return (
    <div className='flex border border-gray-400 hover:border-pink-600 transition duration-300 cursor-pointer rounded-lg'>
        <div className="w-1/2 relative">
            <img className='h-100 rounded-tl-lg rounded-bl-lg' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 border-2 border-white p-3 rounded-full text-white'><FaPlay /></div>
        </div>
        <div className={`w-1/2 ${isDark?'bg-zinc-900':'bg-gray-300'} rounded-tr-lg rounded-br-lg flex flex-col justify-center px-2 gap-1`} >
            <p className={`${isDark?'text-gray-400':'text-gray-500'} font-bold`}>English</p>
            <h2 className={`text-lg font-bold transition duration-300 ${isDark?'text-white':'text-black'}`}>{movie.title}</h2>
            <div className={`flex justify-between items-center text-sm ${isDark?'text-gray-400':'text-gray-500'}`}>
                <p className='flex items-center gap-2'><GoDeviceDesktop  className={``} /> {movie.popularity}</p>
                <p className='text-pink'><BsHeartFill /></p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard