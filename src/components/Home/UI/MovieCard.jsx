import React from 'react'
import {FiPlayCircle} from 'react-icons/fi'
import {GoDeviceDesktop} from 'react-icons/go'
import {BsHeartFill} from 'react-icons/bs'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    
     movie?
       (
        <div className='movie-card '>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        <div className='text-white text-5xl play-icon'><FiPlayCircle /></div>
        <div className='movie-info text-white px-3'>
            <p className='font-bold pb-2'>{movie.title}</p>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'><GoDeviceDesktop style={{color:'white'}} className='text-white' /> {movie.popularity}</p>
                <p className='text-pink'><BsHeartFill /></p>
            </div>
        </div>
        </div>
       ):''
    
  )
}

export default MovieCard