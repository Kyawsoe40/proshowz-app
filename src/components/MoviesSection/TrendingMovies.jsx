import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { api, api_key } from '../api';
import { ThemeContext } from '../context/ThemeContext';
import LoadingPage from '../LoadingPage/LoadingPage';
import { deleteSectionMoives, fetchSectionMovies } from '../redux/actions/movies';
import MovieCard from './MovieCard';
import './MoviesSection.css'
const TrendingMovies = () => {
    const [isLoading,setIsLoading]=useState(true)
    const dispatch=useDispatch()

    const isDark=useContext(ThemeContext);

    const [page,setPage]=useState(0)
    const [pages,setPages]=useState(20);
    const fetchMovies=async ()=>{
        dispatch(deleteSectionMoives())
        const res=await api.get(`/movie/top_rated?api_key=${api_key}&page=${page+1}`)
        setPages(res.data.total_pages>500?500:res.data.total_pages-1)
        dispatch(fetchSectionMovies(res.data.results))
        setIsLoading(false)
    }
    const handlePageClick = (event) => {
        setPage(event.selected)
    };
    const movies=useSelector(state=> state.movies.sectionMovies)
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    },[page])
    useEffect(()=>{
        fetchMovies()       
    },[page])

  return (
    isLoading&&movies.length<1?
    (<LoadingPage />):
    <div className='movies-section' style={{paddingTop:'200px'}}>
        <div className=''>
            <h2 className={`text-pink text-center text-4xl font-bold combo-font underline`}>
                Trending Movies
            </h2>
            <div className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:px-10 px-8  gap-4 py-20">
                {
                movies.map(movie=>
                    <MovieCard movie={movie}  key={movie.id} /> 
                )
                }
            </div>
        </div>
        <ReactPaginate
            breakLabel="..."
            initialPage={page}
            nextLabel={<AiOutlineArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pages}
            previousLabel={<AiOutlineArrowLeft />}
            containerClassName='pagination-box'
            pageClassName={`border ${isDark?'text-white border-white':'text-black border-black'} hover:text-pink-600 bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            breakClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            nextClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            previousClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            activeClassName='text-pink'
            renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default TrendingMovies