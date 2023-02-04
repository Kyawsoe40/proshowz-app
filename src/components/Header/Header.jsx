import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {RiArrowDownSLine,RiSearchLine} from "react-icons/ri";
import { BsSun,BsMoon} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"
import {ImCross} from 'react-icons/im'
import {GoSearch} from 'react-icons/go'
import './Header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useSelector } from 'react-redux';
const Header = ({theme,setTheme}) => {

    const [dropdown1,setDropdown1]=useState(false)
    const [dropdown2,setDropdown2]=useState(false)
    const [changeNavbar,setChangeNavbar]=useState(false)
    const [isToggleOn,setIsToggleOn]=useState(false)
    const [isModalOn,setIsModalOn]=useState(false)
    const [isCrossBtn,setIsCrossBtn]=useState(false)
    const searchRef=useRef()
    const navigate=useNavigate()
    const isDark=useContext(ThemeContext);
    const linkHandler=()=>{
        setIsToggleOn(false)
        setDropdown1(false)
    }
    const searchHandler=(e)=>{
        e.preventDefault();
        if(searchRef.current.value!==''){
            console.log(searchRef.current.value)
            navigate(`search/query='${searchRef.current.value}'`)
        }
        setIsModalOn(false)
        setIsToggleOn(false)
    }
    const genres=useSelector(state=> state.movies.genres)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setChangeNavbar(true);
            } else {
                setChangeNavbar(false);
            }
        });
    }, []);
    useEffect(()=>{
        if(isModalOn){
            window.document.body.style.overflow='hidden'
        }else{
            window.document.body.style.overflow='auto'
        }
    },[isModalOn])

  return (
    <div className="">
        <div className={`flex fixed w-full justify-evenly items-center top-10 py-6 transition duration-300 z-40 ${isDark?'bg-dark dark':'bg-white'} ${ changeNavbar?'nav-shadow':''}`}>
        <Link to=''><h2 className={`${isDark?'text-white':'text-black'} z-30 text-white text-3xl combo-font`}>ProShowz</h2></Link>
        <div className={`${isDark?'bg-dark':'bg-white'}  lg:flex ${isToggleOn?'flex':'hidden'} items-center gap-x-5 lg:flex-row flex-col lg:order-none order-3 lg:static absolute lg:h-auto h-96 lg:w-auto w-full top-16 left-50  justify-center gap-y-5 `}>
            <ul className='flex justify-evenly items-baseline gap-x-6 gap-y-5 lg:flex-row flex-col'>
                <li><Link onClick={()=>setIsToggleOn(false)} to="" className={`${isDark?'text-white':'text-black'} roboto-font font-bold lg:text-sm text-lg tracking-wider`}>Home</Link></li>
                <li><Link onClick={()=>setIsToggleOn(false)} to="about" className={`${isDark?'text-white':'text-black'} roboto-font font-bold lg:text-sm text-lg tracking-wider`}>About</Link></li>
                <li className='relative'>
                <button onClick={()=>{setDropdown1(!dropdown1); setDropdown2(false);}} className={`${isDark?'text-white':'text-black'} roboto-font lg:text-sm text-lg font-bold tracking-wider flex items-center gap-x-1`} >Movies <RiArrowDownSLine /> </button>     
                <div className={`${dropdown1?'flex':'hidden'} bg-white lg:w-[150px] w-[200px] py-2 absolute top-10 left-0 rounded-md flex-col z-10`} >
                    <Link onClick={linkHandler} to='movies/popular' className={` roboto-font lg:text-sm text-lg font-semibold tracking-wider pl-2 py-1`}>Popular Movies</Link>
                    <Link onClick={linkHandler} to='movies/now_playing' className={` roboto-font lg:text-sm text-lg font-semibold tracking-wider pl-2 py-1`}>New Releases</Link>
                    <Link onClick={linkHandler} to='movies/top_rated' className={` roboto-font lg:text-sm text-lg font-semibold tracking-wider pl-2 py-1`}>Trend Moives</Link>
                </div>
                </li>
                <li><Link onClick={()=>setIsToggleOn(false)} to="contact" className={`${isDark?'text-white':'text-black'} roboto-font font-bold lg:text-sm text-lg tracking-wider`}>Contact</Link></li>
            </ul>
            <button onClick={()=>setIsModalOn(!isModalOn)} className='bg-pink hover:bg-sky-600 transition duration-500 lg:py-1 lg:px-4 py-2 px-6 rounded-md text-white flex items-center gap-x-2'>Seach <RiSearchLine /></button>
        </div>
        <button onClick={()=>{setTheme(!theme)}} className={`${isDark?'text-white':'text-black'} text-white text-2xl font-bold z-30`}>{isDark?<BsSun  />:<BsMoon />}</button>
        <button onClick={()=>setIsToggleOn(!isToggleOn)} className={` border py-1 px-2 rounded-sm ${isDark?'text-white border-white':'text-black border-black'} lg:hidden block z-30 text-xl`}>
            {!isToggleOn?<GiHamburgerMenu />:<RxCross1 />}
        </button>
        </div>
        <div className={`${isModalOn?'translate-y-0':'-translate-y-[200%]'} fixed w-full transition-all duration-300 h-screen bg-black bg-opacity-70 z-50 l-0 t-0`}>
            <div className="md:p-10 p-5 flex justify-end">
                <button onClick={()=>setIsModalOn(false)} className='text-white hover:text-gray-400 transition duration-200 text-2xl font-bolder'><ImCross /></button>
            </div>
            <div className="">
                <div className='flex justify-center'>
                    <form onSubmit={searchHandler} className="lg:w-[600px] w-5/6 lg:h-[60px] h-[50px] bg-white search-input flex justify-between">
                        <div className="w-[90%] flex justify-between">
                        <input onChange={()=>{searchRef.current.value===''?setIsCrossBtn(false):setIsCrossBtn(true)}} ref={searchRef} className='w-[500px]' type="text" />
                        <button type='reset' onClick={()=>{searchRef.current.value='';setIsCrossBtn(false)}} className={`${isCrossBtn?'flex':'hidden'} text-xs text-blue-400 justify-start items-center `}><ImCross /></button>
                        </div>
                        <button  className={`text-2xl w-[10%] flex items-center justify-center px-1`}><GoSearch /></button>
                    </form>
                </div>
                <div className="py-5">
                    <h2 className='text-center md:text-3xl text-2xl underline underline-offset-2 font-bold text-white py-5 combo-font'>BROWSE ALL:</h2>
                    <div className="flex flex-wrap h-[50vh]  lg:py-10 py-5 lg:gap-5 md:gap-3 gap-x-2 gap-y-3 md:w-1/2 w-3/4 mx-auto justify-center items-center">
                        {
                            genres.map(genre=>
                                <Link to={`search/genre=${genre.id}`} onClick={()=>{setIsModalOn(false);setIsToggleOn(false)}} key={genre.id} 
                                className='genre-link lg:text-xl text-base uppercase font-bold roboto-font'
                                >{genre.name}</Link>    
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header