import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { api,api_key } from '../api';
import { ThemeContext } from '../context/ThemeContext';
import LoadingPage from '../LoadingPage/LoadingPage';
import {  fetchReviews, fetchSimilarMovies, selectedMovie } from '../redux/actions/movies';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import ReviewCard from './ReviewCard';
import './MovieDetails.css'
import { Link } from 'react-router-dom';

const MovieDetails = () => {
    const [isLoading,setIsLoading]=useState(true)
    
    const {movie_id}=useParams();
    const dispatch=useDispatch()
    useLayoutEffect(()=>{
      window.scrollTo(0, 0)
    },[movie_id])
    const navigate=useNavigate()
    const isDark=useContext(ThemeContext)
    const options1 = {
        items: 2,
        rewind: true,
        autoplay: false,
        dots:true,
        autoplayTimeout:3000,
        loop:true,
        margin:30,
        responsive : {
          0 : {
            items: 1,
            margin:10
          },
          480 : {
            items: 1,
            margin:10
          },

          768 : {
            items: 1,
          },
          1024 : {
            items: 2,
          },
      }
    };
    const options2 = {
        items: 1,
        rewind: true,
        autoplay: false,
        margin:30,
        mouseDrag:false,
        responsive : {
          0 : {
            items: 1,
            margin:10
          },
          480 : {
            items: 1,
            margin:10
          },

          768 : {
            items: 1,
            margin:10
          },
          1024 : {
            items: 1,
          },
      }
    };
    console.log(movie_id)
    const getMovie=async ()=>{
        const res=await api.get(`/movie/${movie_id}?api_key=${api_key}`)
        dispatch(selectedMovie(res.data))
    }
    const getSimilarMovies=async ()=>{
        const res=await api.get(`/movie/${movie_id}/similar?api_key=${api_key}`)
        console.log('similar',res.data)
        dispatch(fetchSimilarMovies(res.data.results))
    }
    const getReviews=async ()=>{
        const res=await api.get(`/movie/${movie_id}/reviews?api_key=${api_key}`)
        dispatch(fetchReviews(res.data.results))
        setIsLoading(false)
    }
    const movie=useSelector(state=> state.movies.movie)
    const similarMovies=useSelector(state=> state.movies.similarMovies)
    const reviews=useSelector(state=> state.movies.reviews)  
      useEffect(()=>{
        getMovie()
        getSimilarMovies()
        getReviews()
      },[movie_id])
  return (
    isLoading?
    (<LoadingPage />):
    (<div style={{paddingTop:'200px'}} className='movie-details'>
        <div className='w-full px-2 flex lg:flex-row flex-col gap-2 py-10'>
            <div className='lg:w-2/3 h-100 md:px-5 px-1'>
                <img className='h-full rounded-sm' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center gap-2 lg:px-1 sm:px-10 px-2 " >
                <p className={`${isDark?'text-white':'text-black'} flex items-start text-3xl gap-2`}><span>{movie.title}</span></p>
                <p className={`${isDark?'text-white':'text-black'}`}>{movie.overview}</p>
                <ul className='bg-red flex md:gap-2 gap-1 flex-wrap'>
                    {movie.genres.map(genre =>
                    <Link to={`../../search/genre=${genre.id}`}><li className='rounded md:py-2 py-1 cursor-pointer md:px-4 px-3 bg-yellow-300' key={genre.id}>{genre.name}</li></Link>
                    )}
                </ul>
                <p className={`${isDark?'text-white':'text-black'}`}>produced by <span className='text-pink tracking-wide md:text-lg text-base'> 
                    {
                        movie.production_companies.map(company=> company.name).toString()
                    }</span> 
                </p>
                <p className={`${isDark?'text-white':'text-black'} `}>Aired Date - <span className='text-pink tracking-wide md:text-lg text-base'>{movie.release_date}</span></p>
                <p className={`${isDark?'text-white':'text-black'}`}>Languages - <span className='text-pink tracking-wide md:text-lg text-base'>
                    {movie.spoken_languages.map(lan=> lan.english_name).toString()
                    }
                    </span>
                </p>
                <p className={`${isDark?'text-white':'text-black'} flex gap-2`}>Rating - 
                <span className='flex items-center gap-1'>{movie.vote_average.toFixed(1)}<AiFillStar className=' text-yellow-400 text-xl' /> </span>
                <span className='text-pink'>voted by {movie.vote_count} viewers</span>
                </p>
            </div>
        </div>
        <div className={`${isDark?'bg-secondary-dark':'bg-secondary-light'} py-10`}>
            <h2 className={`${isDark?'text-white':'text-black'} combo-font text-4xl text-center underline underline-offset-4`}>Reviews</h2>
            <div className="py-10 md:px-10 px-2">
                {
                    reviews.length>0?
                    (<OwlCarousel options={reviews.length>1?options1:options2}>
                        {
                            reviews.map(review=>
                                <ReviewCard key={review.id} review={review} />
                            )
                        }
                    </OwlCarousel>):(<p className={`text-pink text-xl text-center`}>There is no reviews yet for this Movie!</p>)
                }
            </div>
        </div>
        <div className="py-10">
            <h2 className={`${isDark?'text-white':'text-black'} text-3xl combo-font py-5 pl-5`}>Similar Movies</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 px-4">
            {
                similarMovies.slice(0,4).map(similarMovie=>
                <div key={similarMovie.id} className="h-100 flex flex-col justify-between">
                    <div>
                    <img className='rounded-sm' src={`https://image.tmdb.org/t/p/original${similarMovie.backdrop_path}`} alt="" />
                    <h2 className={`${isDark?'text-white':'text-black'} roboto-font py-2 text-xl`}>{similarMovie.title}</h2>
                    </div>    
                    <button onClick={()=> navigate(`../movie/${similarMovie.id}`)} className='py-2 ' >See More</button>
                </div>
                )
            }
            </div>
        </div>
    </div>)
  )
}

export default MovieDetails