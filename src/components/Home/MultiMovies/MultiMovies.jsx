import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MultiMovies = () => {
    const [isCheck1,setIsCheck1]=useState(true);
    const [isCheck2,setIsCheck2]=useState(false);
    const [isCheck3,setIsCheck3]=useState(false);
     const recentMovies=useSelector(state=> state.movies.newMovies)
     const popularMovies=useSelector(state=> state.movies.popularMovies)
     const trendMovies=useSelector(state=> state.movies.trendMovies)
  return (
    <div className='py-10 '>
        <div className="flex md:flex-row flex-col gap-3 px-10 py-10">
            <button onClick={()=>{setIsCheck1(!isCheck1);setIsCheck2(false);setIsCheck2(false)}} className={`py-2 px-3 ${isCheck1?'bg-pink text-white':'bg-gray-300 text-gray-500'}  font-bold text-xl rounded-md`}>Recent Movies</button>
            <button onClick={()=>{setIsCheck2(!isCheck2);setIsCheck1(false);setIsCheck3(false)}} className={`py-2 px-3 ${isCheck2?'bg-pink text-white':'bg-gray-300 text-gray-500'}  font-bold text-xl rounded-md`}>Popular Movies</button>
            <button onClick={()=>{setIsCheck3(!isCheck3);setIsCheck1(false);setIsCheck2(false)}} className={`py-2 px-3 ${isCheck3?'bg-pink text-white':'bg-gray-300 text-gray-500'}  font-bold text-xl rounded-md`}>Trend Movies</button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:px-20 px-6">
            {
                isCheck1?
                (recentMovies.slice(0,9).map(movie=>
                    <MovieCard key={movie.id} movie={movie} />
                ))
                :''
            }
            {   isCheck2?
                (popularMovies.slice(0,9).map(movie=>
                    <MovieCard key={movie.id} movie={movie} />
                ))
                :''
            }
            {   isCheck3?
                (trendMovies.slice(0,9).map(movie=>
                    <MovieCard key={movie.id} movie={movie} />
                ))
                :''
            }
            
        </div>
    </div>
  )
}

export default MultiMovies