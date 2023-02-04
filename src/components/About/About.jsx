import React, { useContext, useLayoutEffect } from 'react'
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import poster from '../../assets/images/movie_poster1.png'
import { ThemeContext } from '../context/ThemeContext'
import './About.css'
const About = ({upcomingMoviesQty}) => {
    const isDark=useContext(ThemeContext)
    const genres=useSelector(state=> state.movies.genres)
    const genreQty=genres.length
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
      },[])
  return (
    <div style={{paddingTop:'200px'}}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-20 md:px-5 px-0 py-5">
            <div className="">
                <img className='w-full md:h-[400px] sm:h-[300px] h-[250px] object-center' src={poster} alt="" />
            </div>
            <div className="flex flex-col justify-center md:px-0 px-5">
                <h2 className={`md:text-3xl text-2xl combo-font pb-5 font-semibold ${isDark?'text-white':'text-black'}`} >The Best Movie Review Website</h2>
                <p className={`${isDark?'text-white':'text-black'}`}><span className='text-2xl font-bold text-pink'>ProShowz</span> is the world’s most trusted recommendation resources for quality entertainment. As the leading online aggregator of movie and TV show reviews from critics, we provide fans with a comprehensive guide to what’s Fresh – and what’s Rotten – in theaters and at home. And the Tomatometer is just the beginning. We also serve movie and TV fans with original editorial content on our site and through social channels, produce fun and informative video series, and hold live events for fans across the country, with our ‘Your Opinion Sucks’ live shows. If you’re an entertainment fan looking for a recommendation, or to share an opinion, you’ve come to the right place.</p>
            </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:px-20 px-5  py-10">
            <div className="number-boxes py-6 text-center">
                <h2 className={`${isDark?'text-white':'text-black'} text-2xl font-bold`}><CountUp
                    start={0}
                    end={upcomingMoviesQty}
                    delay={1}
                    duration={3}
                    separator=','
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    /></h2>
                <p className={`${isDark?'text-white':'text-black'}`}>Upcoming Movies</p>
            </div>
            <div className="number-boxes py-6 text-center">
                <h2 className={`${isDark?'text-white':'text-black'} text-2xl font-bold`}><CountUp
                    start={0}
                    end={71680}
                    delay={1}
                    duration={5}
                    separator=','
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    /></h2>
                <p className={`${isDark?'text-white':'text-black'}`}>Recent Movies</p>
            </div>
            <div className="number-boxes py-6 text-center">
                <h2 className={`${isDark?'text-white':'text-black'} text-2xl font-bold`}><CountUp
                    start={0}
                    end={genreQty}
                    delay={1}
                    duration={2}
                    separator=','
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    /></h2>
                <p className={`${isDark?'text-white':'text-black'}`}>Genres</p>
            </div>
            <div className="number-boxes py-6 text-center">
                <h2 className={`${isDark?'text-white':'text-black'} text-2xl font-bold`}><CountUp
                    start={0}
                    end={35000}
                    delay={1}
                    duration={4}
                    separator=','
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    /></h2>
                <p className={`${isDark?'text-white':'text-black'}`}>Users</p>
            </div>
        </div>
    </div>
  )
}

export default About