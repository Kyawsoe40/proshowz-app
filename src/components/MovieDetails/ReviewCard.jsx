import React, { useContext } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import userLogo from '../../assets/images/programmer.png'
import { BsClock } from 'react-icons/bs'
const ReviewCard = ({review}) => {
    const isDark=useContext(ThemeContext)
  return (
    <div className={`${isDark?'bg-white':'bg-gray-300'} review-box rounded-md sm:p-4 p-3 flex flex-col gap-5`}>
        <p className='text-pink text-2xl'><FaQuoteLeft /> </p>
        <p className='h-[200px] overflow-y-scroll overflow-x-hidden review-text'>
        {review.content}
        </p>
        <p className='text-pink self-end text-2xl'><FaQuoteRight /></p>
        <div className="flex flex-wrap items-center justify-between lg:px-5 md:px-3 sm:px-2 px-0">
            <div className="flex items-center md:gap-3 sm:gap-2 gap-1">
            <div className={`sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] review-img rounded-full flex ${isDark?'bg-gray-300':'bg-white'}`}>
                <img src={userLogo} className='rounded-full' alt="" />
            </div>
            <h5 className='md:text-2xl text-xl'>{review.author_details.username}</h5>
            </div>
            <p className='flex items-center sm:gap-2 gap-1 sm:text-base text-sm text-black font-bold'><BsClock className='text-lg' /> {review.updated_at.substr(0,10)}</p>
        </div>
    </div>
  )
}

export default ReviewCard