import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import ScrollToTop from "react-scroll-to-top";
import { api, api_key } from "./components/api";
import { ThemeContext } from "./components/context/ThemeContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoadingPage from './components/LoadingPage/LoadingPage'
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import { fetchMovies, GetGenres } from "./components/redux/actions/movies";
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";
import './style.css';

function App() {
  const [theme,setTheme]=useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch();
  const [isDark,setIsDark]=useState(theme)
  
  const getMovies=async ()=>{
    setIsLoading(true)
    const res=await api.get(`/movie/upcoming?api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results))
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
            <div className={`${isDark?'bg-dark':'bg-white'} w-full`} >
              <Header theme={theme} setTheme={setTheme} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies/popular" element={<MoviesSection />} />
                <Route path="movies/now_playing" element={<MoviesSection />} />
                <Route path="movies/top_rated" element={<MoviesSection />} />
                <Route path="movie/:movie_id" element={<MovieDetails />} />
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
