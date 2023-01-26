import React from 'react'
import { Link } from 'react-router-dom'
import {RiArrowDownSLine,RiSearchLine} from "react-icons/ri";
import { BsSun,BsMoon} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"
import './Header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Header = ({theme,setTheme}) => {

    const [dropdown1,setDropdown1]=useState(false)
    const [dropdown2,setDropdown2]=useState(false)
    const [changeNavbar,setChangeNavbar]=useState(false)
    const [isToggleOn,setIsToggleOn]=useState(false)
    const isDark=useContext(ThemeContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setChangeNavbar(true);
            } else {
                setChangeNavbar(false);
            }
        });
    }, []);

  return (
    <div className={`flex fixed w-full justify-evenly items-center top-10 py-6 transition duration-300 z-40 ${isDark?'bg-dark dark':'bg-white'} ${ changeNavbar?'nav-shadow':''}`}>
        <h2 className={`${isDark?'text-white':'text-black'} z-30 text-white text-3xl combo-font font-bold`}>ProShowz</h2>
        <div className={`${isDark?'bg-dark':'bg-white'}  lg:flex ${isToggleOn?'flex':'hidden'} items-center gap-x-5 lg:flex-row flex-col lg:order-none order-3 lg:static absolute lg:h-auto h-80 lg:w-auto w-full top-16 left-50  justify-center gap-y-3 `}>
            <ul className='flex justify-evenly items-baseline gap-x-6 gap-y-3 lg:flex-row flex-col'>
                <li><Link to="/" className={`${isDark?'text-white':'text-black'} roboto-font font-bold text-sm tracking-wider`}>Home</Link></li>
                <li><Link to="" className={`${isDark?'text-white':'text-black'} roboto-font font-bold text-sm tracking-wider`}>About</Link></li>
                <li className='relative'>
                <button onClick={()=>{setDropdown1(!dropdown1); setDropdown2(false);}} className={`${isDark?'text-white':'text-black'} roboto-font text-sm font-bold tracking-wider flex items-center gap-x-1`} >Movies <RiArrowDownSLine /> </button>     
                <div className={`${dropdown1?'flex':'hidden'} bg-white w-[150px] py-2 absolute top-10 left-0 rounded-md flex-col z-10`} >
                    <Link to='movies/popular' className={` roboto-font text-sm font-semibold tracking-wider pl-2 py-1`}>Popular Movies</Link>
                    <Link to='movies/now_playing' className={` roboto-font text-sm font-semibold tracking-wider pl-2 py-1`}>New Releases</Link>
                    <Link to='movies/top_rated' className={` roboto-font text-sm font-semibold tracking-wider pl-2 py-1`}>Trend Moives</Link>
                </div>
                </li>
                <li><Link to="" className={`${isDark?'text-white':'text-black'} roboto-font font-bold text-sm tracking-wider`}>Plans</Link></li>
                <li className='relative'>
                <button onClick={()=>{setDropdown2(!dropdown2); setDropdown1(false);}} className={`${isDark?'text-white':'text-black'} roboto-font text-sm font-bold tracking-wider flex items-center gap-x-1`} >Blog <RiArrowDownSLine /> </button>     
                <div className={`${dropdown2?'flex':'hidden'} bg-white w-[150px] py-2 absolute top-10 left-0 rounded-md flex-col`} >
                    <Link to='' className={`roboto-font text-sm font-semibold tracking-wider pl-2 py-1`}>Blog</Link>
                    <Link to='' className={` roboto-font text-sm font-semibold tracking-wider pl-2 py-1`}>Blog Single</Link>
                </div>
                </li>
                <li><Link to="" className={`${isDark?'text-white':'text-black'} roboto-font font-bold text-sm tracking-wider`}>Contact</Link></li>
            </ul>
            <button className='bg-pink py-1 px-4 rounded-md text-white flex items-center gap-x-2'>Seach <RiSearchLine /></button>
        </div>
        <button onClick={()=>{setTheme(!theme)}} className={`${isDark?'text-white':'text-black'} text-white text-2xl font-bold z-30`}>{isDark?<BsSun  />:<BsMoon />}</button>
        <button onClick={()=>setIsToggleOn(!isToggleOn)} className={` border py-1 px-2 rounded-sm ${isDark?'text-white border-white':'text-black border-black'} lg:hidden block z-30 text-xl`}>
            {!isToggleOn?<GiHamburgerMenu />:<RxCross1 />}
        </button>
    </div>
  )
}

export default Header