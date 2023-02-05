import React from 'react'
import './CarouselSection.css'
import {FaPlay} from 'react-icons/fa'
const CarouselImage = ({movie}) => {

  return (

    <div className='carousel-img-box md:h-[600px] h-[420px] '>
        <img className='object-cover rounded-lg'  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="The Last of us"/>
        <div className='carousel-text lg:w-2/3 w-5/6 lg:ml-5 ml-2 md:gap-4 gap-2'>
            <h2 className='text-3xl roboto-font text-pink'>Latest Moive Trailers</h2>
            <p className='text-gray-300'>{movie.overview.substr(0,150)}</p>
            <div className='flex items-center gap-5 cursor-pointer'>
                <div className='text-pink bg-white p-4 rounded-full play-icon transition-all ease-in-out duration-400'><FaPlay /></div>
                <p className='combo-font text-lg font-bold text-white'>Watch Trailer</p>
            </div>
        </div>
    </div>

  )
}

export default CarouselImage