import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router'
import { api, api_key } from '../api';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import './MoviesSection.css'
import { ThemeContext } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchSectionMovies, setPage } from '../redux/actions/movies';
import LoadingPage from '../LoadingPage/LoadingPage';

const MoviesSection = () => {
    const location=useLocation();
    const isDark=useContext(ThemeContext);
    const dispatch=useDispatch();
    const [page,setNewPage]=useState(useSelector(state=> state.movies.page))
    const initialPage=useSelector(state=> state.movies.page);
    console.log('before',page)
    const [pages,setPages]=useState(20);
    const path=location.pathname.replace('/movies/','');
    const [isLoading,setIsLoading]=useState(true)
    const fetchMovies=async ()=>{
        dispatch(fetchSectionMovies([]))
        setIsLoading(true)
        const res=await api.get(`/movie/${path}?api_key=${api_key}&page=${initialPage+1}`)
        setPages(res.data.total_pages-1)
        dispatch(fetchSectionMovies(res.data.results))
        dispatch(setPage(page))
        setIsLoading(false)
    }
    const handlePageClick = (event) => {
        setNewPage(event.selected)
      };
      const movies=useSelector(state=> state.movies.sectionMovies)
    useEffect(()=>{
        setNewPage(0)
    },[path])
    useEffect(()=>{
        fetchMovies()       
    },[page,path])

  return (
    isLoading&&movies.length>0?
    (<LoadingPage />):
    <div className='movies-section' style={{paddingTop:'200px'}}>
        <div className=''>
            <h2 className={`text-pink text-center text-4xl font-bold combo-font underline`}>
                {path==='popular'?'Popular Moives':''}
                {path==='now_playing'?'New Releases':''}
                {path==='top_rated'?'Top-Rated Moives':''}
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
            initialPage={initialPage}
            nextLabel={<AiOutlineArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pages}
            previousLabel={<AiOutlineArrowLeft />}
            containerClassName='pagination-box'
            pageClassName={`border ${isDark?'text-white border-white':'text-black border-black'} hover:text-pink-600 bg-transparent rounded-md h-8 flex items-center px-2 font-bold`}
            breakClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-2 font-bold`}
            nextClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-2 font-bold`}
            previousClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-2 font-bold`}
            activeClassName='text-pink'
            renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default MoviesSection