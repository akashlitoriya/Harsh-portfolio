import React, { useRef } from 'react'
import hero_section_image from '../assets/hero_section_image.png'
import {delay, motion} from 'framer-motion'
const Home = () => {
  return (
    <div className=' w-full h-max min-h-screen text-white text-5xl font-bold flex justify-center items-center snap-start relative'>
      {/* Container  */}
      <div className='sm:hidden w-11/12 md:w-4/5 sm:min-h-[500px] lg:w-fit flex flex-col md:flex-row items-center shadow-custom-inset bg-white bg-opacity-5 rounded-xl px-4 py-8 md:px-10 md:py-10 backdrop-blur-md  z-50'>
        <div className='flex flex-col gap-3 md:gap-6'>
          <motion.h1 className='font-extrabold font-Montserrat text-4xl lg:text-5xl uppercase tracking-wider text-center md:text-left' initial={{opacity:0, y:-50}} whileInView={{opacity:100, y:0}} transition={{delay:0.3, duration:0.2}}>Harsh Mandloi</motion.h1>
          <motion.div className='w-full flex flex-row justify-center md:justify-start items-center gap-5 font-Montserrat text-center text-gray-300 text-lg lg:text-2xl font-semibold mb-4 md:mb-8' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.4, duration:0.2}}>
            <span className='uppercase'>CGI Artist</span>
          </motion.div>
          {/* <motion.div className='w-max' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.6, duration:0.3}}>
            <CTAButton text={"Hire Me"} primaryColor={'blue_primary'} textColor={'white'}/>
          </motion.div> */}
          

        </div>
        <motion.div className='z-50' initial={{'opacity':0, x:-100}} whileInView={{'opacity':100, x:0}} transition={{"delay":0.6, duration:0.3}}>
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
