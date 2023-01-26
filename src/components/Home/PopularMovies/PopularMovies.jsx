import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import MovieCard from '../UI/MovieCard'

const PopularMovies = ({movies}) => {

    const isDark=useContext(ThemeContext);
  return (
   
    movies?
    ( <div className='md:container mx-auto  md:px-20 px-6 py-2'>
    <div className=' flex justify-between items-center py-5'>
        <h2 className={`md:text-3xl text-2xl combo-font font-bold ${isDark?'text-white':'text-black'}`}>Popular Movies</h2>
        <Link className='text-pink md:xtext-xl text-lg font-bold hover:underline' to='movies/popular'>Show all</Link>
    </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:px-2 px-4  grid-cols-1 sm:gap-4 gap-2'>
       <MovieCard movie={movies[0]} />
       <MovieCard movie={movies[1]} />
       <MovieCard movie={movies[2]} />
       <MovieCard movie={movies[3]} />

    </div>
</div>):''
   
  )
}

export default PopularMovies