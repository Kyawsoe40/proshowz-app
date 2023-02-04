
import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { api, api_key } from '../api';
import LoadingPage from '../LoadingPage/LoadingPage';
import { deleteReviews, deleteSelectedMoive, fetchMovies, fetchNewMovies, fetchPopularMovies, fetchTrendMovies } from '../redux/actions/movies';
import CarouselSection from './Carousel/CarouselSection';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import MultiMovies from './MultiMovies/MultiMovies';
import NewReleases from './NewReleases/NewReleases';
import PopularMovies from './PopularMovies/PopularMovies';

const Home = () => {
    const dispatch=useDispatch();
    useLayoutEffect(()=>{
      window.scrollTo(0, 0)
    },[])
    const [isLoading,setIsLoading]=useState(false)
    const getPopularMovies=async ()=>{
        setIsLoading(true)
        const res=await api.get(`/movie/popular?api_key=${api_key}`)
        dispatch(fetchPopularMovies(res.data.results));
    }
    const getNewReleases=async ()=>{
      const res=await api.get(`/movie/now_playing?api_key=${api_key}&page=2`)
      dispatch(fetchNewMovies(res.data.results));
    }
    const getTrendMovies=async ()=>{
      const res=await api.get(`/movie/top_rated?api_key=${api_key}&page=2`)
      dispatch(fetchTrendMovies(res.data.results))
      setIsLoading(false)
    }

    const popularMovies=useSelector(state=> state.movies.popularMovies)
    const newMovies=useSelector(state=> state.movies.newMovies)
    const genres=useSelector(state=> state.movies.genres)
    useEffect(()=>{
        getPopularMovies();
        getNewReleases();
        getTrendMovies();
    },[])
    

  return (
    isLoading? 
      (<LoadingPage />)
      :
    (<div style={{paddingTop:'200px'}}>
       
          <>
          <CarouselSection movies={newMovies}  />
          <PopularMovies movies={popularMovies} />
          <NewReleases movies={newMovies} />
          <CarouselSlide movies={popularMovies} genres={genres} />
          <MultiMovies />
          </>
         
    </div> )
  )
}

export default Home