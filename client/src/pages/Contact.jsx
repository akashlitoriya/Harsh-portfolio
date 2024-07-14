import React, {useState} from 'react'
import CTAButton from '../components/CTAButton';
import { IoLogoInstagram,IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FaArtstation } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className='w-full min-h-screen flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='w-4/5 flex flex-col justify-center items-center'>
        {/* Input Boxes  */}
        <div className='w-full md:w-4/5 flex flex-col gap-6 md:gap-10 items-center'>
          <div className='w-full flex flex-col md:flex-row gap-6 md:gap-10'>
            <input onChange={(e)=> setName(e.target.value)} placeholder='NAME' className='w-full md:w-1/2 py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-base md:text-2xl border-b-2 md:border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>
            <input onChange={(e)=> setEmail(e.target.value)} placeholder='EMAIL' className='w-full md:w-1/2 py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-base md:text-2xl border-b-2 md:border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>
          </div>

          <input onChange={(e)=> setMessage(e.target.value)} placeholder='WRITE YOU MESSAGE HERE...' className='w-full py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-base md:text-2xl border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>

          {/* Button  */}
          <div className='w-full md:w-3/5 flex justify-center items-center'>
            <CTAButton text={"Connect"} primaryColor={"blue_primary"} textColor={"white"}/>
          </div>
          {/* Socials  */}
          <div className='w-full flex flex-row justify-between md:justify-center items-center gap-8 text-3xl text-text_secondary'>
            <a className='transition-all duration-200 hover:scale-125 hover:text-blue_primary' href='https://www.linkedin.com/in/harshmandloi/' target='_blank'><IoLogoLinkedin/></a>
            <a className='transition-all duration-200 hover:scale-125 hover:text-blue_primary' href='https://www.instagram.com/hxartzwall/' target='_blank'><IoLogoInstagram/></a>
            <a className='transition-all duration-200 hover:scale-125 hover:text-blue_primary' href='https://www.artstation.com/hxartz' target='_blank' ><FaArtstation /></a>
            <a className='transition-all duration-200 hover:scale-125 hover:text-blue_primary' href='https://www.youtube.com/@hxartz3' target='_blank'><IoLogoYoutube /></a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
