import React, { useContext, useLayoutEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import {IoLocation, IoMailOpenOutline} from 'react-icons/io5'
import './Contact.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
const Contact = () => {
    const isDark=useContext(ThemeContext)
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
      },[])
  return (
    <div style={{paddingTop:'200px'}}>
        <div className="contact-form">
        <h3 className='text-center text-blue md:text-2xl text-xl roboto-font'>Contact Us</h3>
        <h2 className={`${isDark?'text-white':'text-black'} py-2 uppercase combo-font font-bold md:text-3xl text-2xl text-center`}>LEAVE A MESSAGE</h2>
        <p className={`text-center ${isDark?'text-gray-400':'text-gray-600'} px-3`} >If you have a question regarding our services, feel free to contact us using the form below .</p>
        <form action="" className='lg:w-2/3 px-3 mx-auto py-5'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 gap-y-5 py-3">
                <input type='text' placeholder='Enter your name *' className='py-1 px-2 h-[50px]' />
                <input type='text' placeholder='Enter subject *' className='py-1 px-2 h-[50px]' />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 gap-y-5 py-3">
                <input type='email' placeholder='Enter your email *' className='py-1 px-2 h-[50px]' />
                <input type='number' placeholder='Enter your phone number *' className='py-1 px-2 h-[50px]' />
            </div>
            <div className="py-3">
                <textarea className='w-full' rows={6} placeholder='Type your query here'></textarea>
            </div>
            <div className="flex py-3 justify-end">
            <button className='bg-pink py-2 px-3 rounded-md text-white text-lg'>Submit Message</button>
            </div>
        </form>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:px-20 px-3 py-10">
            <div className={`flex md:px-5 px-2 items-center gap-5 rounded-md py-10 ${isDark? 'bg-secondary-dark':'bg-gray-200'}`}>
                <div className="">
                    <div className={`p-5 rounded-full ${isDark?'bg-white':'bg-black'}`}><IoLocation className='text-pink text-2xl' /></div>
                </div>
                <div className="">
                    <h2 className={`${isDark?'text-white':'text-black'} text-xl font-bold`}>Address :</h2>
                    <p className={`${isDark?'text-gray-400':'text-gray-500'}`}>Kamayut Township, Yangon, Myanmar </p>
                </div>
            </div>
            <div className={`flex md:px-5 px-2 items-center gap-5 rounded-md py-10 ${isDark? 'bg-secondary-dark':'bg-gray-200'}`}>
                <div className="">
                    <div className={`p-5 rounded-full ${isDark?'bg-white':'bg-black'}`}><BsFillTelephoneFill className='text-pink text-2xl' /></div>
                </div>
                <div className="">
                    <h2 className={`${isDark?'text-white':'text-black'} text-xl font-bold`}>Phone :</h2>
                    <p className={`${isDark?'text-gray-400':'text-gray-500'}`}>+95-796-753-281 </p>
                    <p className={`${isDark?'text-gray-400':'text-gray-500'}`}>+95-796-753-382 </p>
                </div>
            </div>
            <div className={`flex md:px-5 px-2 items-center gap-5 rounded-md py-10 ${isDark? 'bg-secondary-dark':'bg-gray-200'}`}>
                <div className="">
                    <div className={`p-5 rounded-full ${isDark?'bg-white':'bg-black'}`}><IoMailOpenOutline className='text-pink text-2xl' /></div>
                </div>
                <div className="">
                    <h2 className={`${isDark?'text-white':'text-black'} text-xl font-bold`}>Mail :</h2>
                    <p className={`${isDark?'text-gray-400':'text-gray-500'}`}>kyawsoe31501@gmail.com</p>
                    <p className={`${isDark?'text-gray-400':'text-gray-500'}`}>kyawsoehmh@gmail.com</p>
                </div>
            </div>

        </div>
        <div className=" border-8 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30552.479024252036!2d96.11217624110445!3d16.823385337891274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194caf1b44735%3A0x699d28c8674522a3!2sKamayut%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1675530489237!5m2!1sen!2smm" width="100%" height="350"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contact