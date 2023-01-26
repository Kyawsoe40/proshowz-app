import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import './CarouselSection.css'

import CarouselImage from './CarouselImage';
const CarouselSection = ({movies}) => {

    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true,
        dots:false,
        loop:true,
        stagePadding:200,
        margin:50,
        responsive : {
          0 : {
            stagePadding:40,
            margin:10
          },
          480 : {
            stagePadding:80,
            margin:20
          },

          768 : {
            stagePadding:100,
            margin:30
          },
          1024:{
            stagePadding: 200,
            margin:40
          }
      }
    };
  return (
    <>
    {
        movies.length>2?
        (
        
          <div className='carousel-section'>
            <OwlCarousel  options={options} >
              <CarouselImage movie={movies[5]} />
              <CarouselImage movie={movies[6]} />
              <CarouselImage movie={movies[1]} />
            </OwlCarousel>
          </div>

   
            ):'Loading'
    }</>
  )
}

export default CarouselSection