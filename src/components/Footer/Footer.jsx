import React from 'react'
import './Footer.css'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsEnvelope } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaInstagram, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    const movies=useSelector(state=> state.movies.movies)
    const datas=[
        {
        title: 'Movies',
        items: ['Popular Moives','New Releases','Trending Movies','Upcoming Movies','Contact Us']
        },
        {
            title: 'Information',
            items: ['Home','About','Tv Series','Blogs','Login']
        },
        {
            title: 'Locations',
            items: ['SEAsia','United States','Japan','Korea','United Kingdom']
            },
    ]
  return (
    movies.length>1?
    (<div>
        <div className="py-20" style={{background:'#111111'}}>
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 md:px-20 px-10">
                <img className='md:rounded-md rounded-sm' src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`} alt="" />
                <img className='md:rounded-md rounded-sm' src={`https://image.tmdb.org/t/p/original${movies[1].backdrop_path}`} alt="" />
                <img className='md:rounded-md rounded-sm' src={`https://image.tmdb.org/t/p/original${movies[2].backdrop_path}`} alt="" />
                <img className='md:rounded-md rounded-sm' src={`https://image.tmdb.org/t/p/original${movies[3].backdrop_path}`} alt="" />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 md:px-20 px-10 py-5">
                {
                    datas.map((data,index)=>(
                        <div key={index} className="flex flex-col gap-3">
                            <h2 className='text-white text-2xl font-bold'>{data.title}</h2>
                            <div className="flex flex-col">
                                {data.items.map((item,index)=>
                                <span key={index} className='text-gray-400 text-lg footer-link'>{item}</span>
                                )}
                            </div>
                        </div>
                    ))
                }
                        <div className="flex flex-col gap-3" >
                            <h2 className='text-white text-2xl font-bold'>New Letter</h2>
                            <div className='footer-contact-box'>
                                <input placeholder='Enter your Email here' />
                                <button><BsEnvelope /></button>
                            </div>
                            <p className='text-gray-400 text-md'>Enter your email and receive the latest news, updates and special offers from us.</p>
                        </div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col gap-y-2 py-3 justify-evenly items-center" style={{background:'#222'}}>
            <p className='text-gray-400 md:text-base text-sm'>&copy; 2023 ProShowz.All rights served | Coded by Kyaw Soe Han</p>
            <div className='flex gap-5'>
                <a href='https://www.facebook.com/spyblue61/' target='_blank' className='footer-icons'><FaFacebookF /></a>
                <Link className='footer-icons'><FaTwitter /></Link>
                <Link className='footer-icons'><FaInstagram /></Link>
                <a href='https://github.com/Kyawsoe40' target='_blank' className='footer-icons'><FaGithub /></a>
            </div>
        </div>
    </div>):''
  )
}

export default Footer