import React, { useRef } from 'react'
import hero_section_image from '../assets/hero_section_image.png'
import {delay, motion} from 'framer-motion'
const Home = () => {
  return (
    <div className='w-screen md:w-full h-max min-h-screen text-white text-5xl font-bold flex justify-center sm:justify-end items-center snap-start relative'>
      {/* Container  */}
      <div className=' w-11/12 sm:w-fit mr-0 sm:mr-28 mb-0 sm:mb-28 absolute sm:static top-2/4  flex flex-col md:flex-row sm:items-center shadow-custom-inset bg-white bg-opacity-5 rounded-xl px-4 py-8 md:px-10 md:py-10 backdrop-blur-md  z-50'>
        <div className='flex flex-col gap-3 md:gap-6 justify-center'>
          <div>
            <motion.h1 className='w-full font-semibold font-Montserrat text-4xl lg:text-5xl uppercase tracking-wider text-center' initial={{opacity:0, y:-50}} whileInView={{opacity:100, y:0}} transition={{delay:0.3, duration:0.2}}>Harsh</motion.h1>
            <motion.h1 className='w-full font-semibold font-Montserrat text-4xl lg:text-5xl uppercase tracking-wider text-center' initial={{opacity:0, y:-50}} whileInView={{opacity:100, y:0}} transition={{delay:0.3, duration:0.2}}>Mandloi</motion.h1>
          </div>
          <motion.div className='w-full flex flex-row justify-center md:justify-start items-center gap-5 font-Montserrat text-center text-white text-lg lg:text-2xl font-semibold mb-4 md:mb-0 whitespace-nowrap' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.4, duration:0.2}}>
            <span className='uppercase w-full text-center px-5 py-3 rounded bg-black bg-opacity-60 sm:bg-opacity-25 backdrop-blur-md'>CGI Artist</span>
          </motion.div>
          {/* <motion.div className='w-max' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.6, duration:0.3}}>
            <CTAButton text={"Hire Me"} primaryColor={'blue_primary'} textColor={'white'}/>
          </motion.div> */}
          

        </div>     
        <motion.div className='z-50 hidden' initial={{'opacity':0, x:-100}} whileInView={{'opacity':100, x:0}} transition={{"delay":0.6, duration:0.3}}>
          <img src={hero_section_image} className='mx-auto w-4/5 '/>
        </motion.div>


      </div>
      {/* <div className='w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-60 absolute top-40 right-72 z-0'></div> */}
      {/* <div>
        <img src={back} className='w-full h-full object-cover absolute top-0 left-0 z-0'/>
      </div> */}
    </div>
  )
}

export default Home
