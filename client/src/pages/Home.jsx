import React, { useRef } from 'react'
import hero_section_image from '../assets/hero_section_image.png'
import CTAButton from '../components/CTAButton'
import {delay, motion} from 'framer-motion'
const Home = () => {
  return (
    <div className=' w-full h-screen text-white text-5xl font-bold flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='flex flex-row items-center border-b-4 border-text_secondary'>
        <div className='flex flex-col gap-6'>
          <motion.h1 className='font-extrabold font-Montserrat text-5xl uppercase tracking-wider' initial={{opacity:0, y:-50}} whileInView={{opacity:100, y:0}} transition={{delay:0.3, duration:0.2}}>Harsh Mandloi</motion.h1>
          <motion.div className='flex flex-row items-center gap-5 font-Montserrat text-text_secondary text-2xl font-semibold mb-8' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.4, duration:0.2}}>
            <span>3D Artist</span>
            <span>Graphic Designer</span>
          </motion.div>
          <motion.div className='w-max' initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.6, duration:0.3}}>
            <CTAButton text={"Hire Me"} primaryColor={'blue_primary'} textColor={'white'}/>
          </motion.div>
          

        </div>
        <motion.div className='' initial={{'opacity':0, x:-100}} whileInView={{'opacity':100, x:0}} transition={{"delay":0.6, duration:0.3}}>
          <img src={hero_section_image}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
