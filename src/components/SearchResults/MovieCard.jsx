import React, { useContext } from 'react'

import {FiPlayCircle} from 'react-icons/fi'
import {GoDeviceDesktop} from 'react-icons/go'
import {BsHeartFill} from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
    const isDark=useContext(ThemeContext);
    const navigate=useNavigate()
    const genres=useSelector(state=> state.movies.genres)
    let movieGenres;
    if(genres.length>0&&movie){
        movieGenres=genres.filter(genre=> movie.genre_ids.includes(genre.id))
        console.log(movieGenres)
    }
    return (
      <div className={`${!isDark?'bg-gray-200 shadow-slate-300':'bg-black shadow-slate-800'} h-auto shadow-lg cursor-pointer` }style={{borderRadius:'8px'}}>
          <div className='movie-card '>
          <img className='object-top' src={movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:'https://i.pinimg.com/564x/cb/26/60/cb26602c5f403fbecc8e8f49e0cb5082.jpg'} alt="" />
          <div className='text-white text-5xl play-icon'><FiPlayCircle /></div>
          <div className='movie-info text-white px-3'>
              <div className='flex justify-between items-center'>
                  <p className='flex items-center gap-2'><GoDeviceDesktop style={{color:'white'}} className='text-white' /> {movie.popularity}</p>
                  <p className='text-pink'><BsHeartFill /></p>
              </div>
          </div>
          </div>
          <div className='flex flex-col h-[calc(100%-330px)] gap-2 justify-between'>
          <div className='py-1'>
          <h2 className={`${isDark?'text-white':'text-black'} text-xl p-1`}>{movie.title}</h2>
          <p className={`${isDark?'text-gray-300':'text-gray-600'} text-sm px-1`}>{movie.overview.substr(0,100)}</p>
          <div className='flex flex-wrap gap-1 gap-y-2 py-2 px-1'>
            {movieGenres.map(genre =>
                <Link key={genre.id} to={`../../search/genre=${genre.id}`}><span className='rounded  py-1 px-2 cursor-pointer bg-yellow-300' key={genre.id}>{genre.name}</span></Link>
            )}
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className={`${isDark?'text-white':'text-black'} px-1 flex justify-between items-center`}>
                <p>Rating</p>
                <p className={`flex items-center gap-1 `}><AiFillStar className=' text-yellow-400 text-xl' /> {movie.vote_average}</p>
                
            </div>
            <button onClick={()=> navigate(`../movie/${movie.id}`)} className='py-2 rounded-md content-end '>See More</button>
          </div>
          </div>
      </div>
    )
}

export default MovieCard