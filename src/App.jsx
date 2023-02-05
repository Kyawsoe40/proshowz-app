import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import ScrollToTop from "react-scroll-to-top";
import About from "./components/About/About";
import { api, api_key } from "./components/api";
import Contact from "./components/Contact/Contact";
import { ThemeContext } from "./components/context/ThemeContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoadingPage from './components/LoadingPage/LoadingPage'
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NewReleases from "./components/MoviesSection/NewRelease";
import PopularMovies from "./components/MoviesSection/PopularMovies";
import TrendingMovies from "./components/MoviesSection/TrendingMovies";
import { fetchMovies, GetGenres } from "./components/redux/actions/movies";
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";
import SearchResults from "./components/SearchResults/SearchResults";
import './style.css';

function App() {
  const [theme,setTheme]=useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch();
  const [isDark,setIsDark]=useState(theme)
  const [upcomingMoviesQty,setUpcomingMoviesQty]=useState(0)
  const getMovies=async ()=>{
    setIsLoading(true)
    const res=await api.get(`/movie/upcoming?api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results))
    setUpcomingMoviesQty(res.data.total_results)
  }
  const getGenre=async ()=>{
    const res=await api.get(`/genre/movie/list?api_key=${api_key}`)
    dispatch(GetGenres(res.data.genres))
    setIsLoading(false)
  }
  useEffect(()=>{
    getMovies()
    getGenre()
  },[])
  useEffect(()=>{
    setIsDark(theme)
},[theme])
  return (
    <>
      <ThemeContext.Provider value={isDark}>
      {
        isLoading?
          (<LoadingPage />):
          (
            <div className={`${isDark?'bg-dark':'bg-white'} relative w-full`} >
              <Header theme={theme} setTheme={setTheme} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies/popular" element={<PopularMovies />} />
                <Route path="movies/now_playing" element={<NewReleases />} />
                <Route path="movies/top_rated" element={<TrendingMovies />} />
                <Route path="movie/:movie_id" element={<MovieDetails />} />
                <Route path="search/:keyword" element={<SearchResults />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About upcomingMoviesQty={upcomingMoviesQty} />} />
              </Routes>
              <ScrollToTop style={{background:'transparent',boxShadow:'none',width:'50px',height:'50px'}} top={300} viewBox="0 0 24 24" smooth component={<ScrollTopBtn />} />
              <Footer />
            </div>
          )
      }
      </ThemeContext.Provider>
    </>
  );
}

export default App;
