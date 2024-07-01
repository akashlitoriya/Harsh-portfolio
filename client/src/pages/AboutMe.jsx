import React from 'react'
import {motion} from 'framer-motion'

const AboutMe = () => {
  const boxVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 100,
        transition: {
            delay: 0.2,
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.2, //apply stagger on the parent tag
        },
    },
};

const listVariant = {
    hidden: {
        x: -10, //move out of the site
        opacity: 0,
    },
    visible: {
        x: 0, // bring it back to nrmal
        opacity: 1,
    },
};
  return (
    <div className='h-screen w-full font-bold font-Montserrat flex flex-col justify-center items-center snap-start'>
      <div className='w-4/5 flex flex-col items-center gap-12'>
        {/* Heading  */}
        <div className='w-max'>
          <h1 className='text-white text-4xl w-fit'>What do i do</h1>
          <p className='h-1 bg-blue_primary'></p>
        </div>
        {/* Container  */}
        <div className='flex flex-col text-2xl w-full gap-5 text-white'>
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row gap-5'>
            <motion.p variants={listVariant} className='text-center border-2 border-white p-4 w-1/3'>3D Renders</motion.p>
            <motion.p variants={listVariant} className='text-center border-2 border-white p-4 w-1/3'>3D Animation</motion.p>
            <motion.p variants={listVariant} className='text-center border-2 border-white p-4 w-1/3'>Product Visualization</motion.p>
          </motion.div>
          
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row gap-5 justify-center'>
            <motion.p variants={listVariant} className='col-span-6 text-center border-2 border-white p-4 w-1/4'>Logo Design</motion.p>
            <motion.p variants={listVariant} className='col-span-6 text-center border-2 border-white p-4 w-1/4'>Visual Design</motion.p>
          </motion.div>
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row justify-center'>
            <motion.p variants={listVariant} className='col-span-12 text-center border-2 border-white p-4 w-1/4'>Branding</motion.p>
          </motion.div>

        </div>
        
      </div>
    </div>
  )
}

export default AboutMe
