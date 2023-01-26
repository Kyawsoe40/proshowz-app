import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import {FiPlayCircle} from 'react-icons/fi'
import {GoDeviceDesktop} from 'react-icons/go'
import {BsHeartFill} from 'react-icons/bs'
import { useNavigate } from 'react-router';


const NewReleasedMovie = ({movie}) => {
    const isDark=useContext(ThemeContext);
    const navigate=useNavigate();
    
  return (
    <div className={`${!isDark?'bg-gray-200 shadow-slate-300':'bg-black shadow-slate-800'} h-[500px] shadow-lg cursor-pointer` }style={{borderRadius:'8px'}}>
        <div className='movie-card '>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        <div className='text-white text-5xl play-icon'><FiPlayCircle /></div>
        <div className='movie-info text-white px-3'>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'><GoDeviceDesktop style={{color:'white'}} className='text-white' /> {movie.popularity}</p>
                <p className='text-pink'><BsHeartFill /></p>
            </div>
        </div>
        </div>
        <div className='flex flex-col h-[170px] gap-2 justify-between'>
        <div className='py-1'>
        <h2 className={`${isDark?'text-white':'text-black'} text-lg px-1`}>{movie.title}</h2>
        <p className={`${isDark?'text-gray-300':'text-gray-600'} text-sm px-1`}>{movie.overview.substr(0,20)}</p>
        </div>
        <button onClick={()=> navigate(`movie/${movie.id}`)} className='py-2 rounded-md content-end '>See More</button>
        </div>
    </div>
  )
}

export default NewReleasedMovie