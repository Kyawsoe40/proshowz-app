import React, { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import NewReleasedMovie from './NewReleasedMovie';
import './NewReleases.css'

const NewReleases = ({movies}) => {
  const isDark=useContext(ThemeContext);
    const options = {
        items: 5,
        nav: true,
        rewind: true,
        autoplay: true,
        dots:false,
        autoplayTimeout:3000,
        loop:true,
        margin:20,
        responsive : {
          0 : {
            items: 1,
            margin:30
          },
          480 : {
            items: 2,
            margin:30
          },

          768 : {
            items: 3,
            margin:30
          },
          999:{
            items: 4,
            margin:20
          },
          1024:{
            items: 5,
            margin:20
          }
      }
    };
  return (
    <>
    {
        movies.length>2?
        (
        <div className=" py-10  new-releases">
          <div className='container mx-auto flex justify-between items-center py-10 md:px-20 px-10 '>
            <h2 className={`md:text-3xl text-2xl combo-font font-bold ${isDark?'text-white':'text-black'}`}>New Releases</h2>
            <Link className='text-pink md:text-xl text-lg font-bold hover:underline' to='movies/now_playing'>Show all</Link>
          </div>
          <div className="lg:px-2 px-5">
          <OwlCarousel options={options}  >
          {
            movies.map(movie=>
                (
                  <NewReleasedMovie key={movie.id} movie={movie} />
                )
                )
          }
        </OwlCarousel>
          </div>
          </div>
            ):'Loading'
    }</>
  )
}

export default NewReleases