
import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import CarouselImage from './CarouselImage';
import './CarouselSlide.css';
const CarouselSlide = ({movies,genres}) => {
    const options = {
        items: 1,
        rewind:true,
        loop:true,

    };
    console.log(movies)
  return (
    movies&&genres?
    <div className='carousel-box py-5'>
        <OwlCarousel options={options} >
            <CarouselImage movie={movies[4]} genres={genres} />
            <CarouselImage movie={movies[5]} genres={genres} />
            <CarouselImage movie={movies[6]} genres={genres} />
        </OwlCarousel>
    </div>
    :''
  )
}

export default CarouselSlide