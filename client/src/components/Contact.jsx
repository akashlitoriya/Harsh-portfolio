import React from 'react'
import contact_desktop from '../assets/contact-section-desktop.mp4';
import { IoMdMail, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaArtstation } from "react-icons/fa";
import ContactForm from './Contact_US/ContactForm';

const Contact = () => {
  return (
    <div className='w-full h-full relative'>
        <video
            src = {contact_desktop}
            autoPlay
            loop
            muted
            className='w-full h-full object-cover'
        />

        <div className='absolute top-1/2 left-1/2 w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 rounded-3xl backdrop-blur-sm bg-black/50 p-11'>
            <div className='flex w-full h-full gap-4'>
                <div className='w-1/2 p-12 content-center flex justify-center items-center'>
                        {/* Text container */}
                  <div className='flex flex-col gap-8'>
                    <h1 className='text-6xl font-bold text-gray-200 text-center'>HXARTZ</h1>
                    <p className='text-center text-lg text-gray-300'>Ready to collaborate with HXARTZ and bring your creative vision to life? Reach out! Here are the various ways to get in touch:</p>
                    <div className='flex justify-evenly'>
                      <a href='mailto:harshm1933@gmail.com' target='_blank' className='hover:scale-125 transition-all duration-150'>
                        <IoMdMail className='text-3xl text-gray-300'/>
                      </a>
                      <a href='https://www.instagram.com/hxartzwall/?igsh=MWgwbHRzNnhjcHV5eQ%3D%3D' target='_blank' className='hover:scale-125 transition-all duration-150'>
                        <IoLogoInstagram className='text-3xl text-gray-300'/>
                      </a>
                      <a href='https://www.linkedin.com/in/harshmandloi/' target='_blank' className='hover:scale-125 transition-all duration-150'>
                        <IoLogoLinkedin className='text-3xl text-gray-300'/>
                      </a>
                      <a href='https://hxartz.artstation.com/' target='_blank'  className='hover:scale-125 transition-all duration-150'>
                        <FaArtstation className='text-3xl text-gray-300'/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-[1px] h-full bg-white border-2 border-white'>
                        {/* Division  */}
                </div>
                <div className='p-12 w-1/2'>
                  <h1 className='text-3xl font-bold text-gray-100 text-center'>Write Review</h1>
                  <ContactForm />
                  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact
