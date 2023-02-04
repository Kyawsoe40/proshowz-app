import React from 'react'
import {FaPlay} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const CarouselImage = ({movie,genres}) => {
  let movieGenres;
  if(genres.length>0&&movie){
    movieGenres=genres.filter(genre=> movie.genre_ids.includes(genre.id))
    console.log(movieGenres)
  }
 
  return (
    movie&&genres&&movieGenres?
    (<div className='carousel-box-item'>
        <img className='object-cover object-top' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
        <div className='carousel-box-text h-full z-10 flex flex-col justify-center gap-3 lg:pl-10 pl-5'>
          
          <ul className='bg-red flex md:gap-2 gap-1 flex-wrap'>
              {movieGenres.map(genre =>
                <Link key={genre.id} to={`search/genre=${genre.id}`}><li className='rounded md:py-2 py-1 md:px-4 px-3 cursor-pointer bg-yellow-300' key={genre.id}>{genre.name}</li></Link>
              )}
          </ul>
          <h2 className='text-3xl font-bold text-white'>{movie.title}</h2>
          <p className='text-lg text-gray-300'>Release Date - {movie.release_date}</p>
          <div className='flex gap-5 items-center cursor-pointer'>
            <div className='p-4 border border-white rounded-full play-icon text-white' ><FaPlay /></div>
            <p className='text-2xl text-white'>Watch Trailer</p>
          </div>

        </div>
    </div>):''
  )
}

export default CarouselImage