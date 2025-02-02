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
    <div className='h-screen w-screen font-bold font-Montserrat flex flex-col justify-center items-center snap-start relative'>
      <div className='w-11/12 md:w-4/5 flex flex-col items-center gap-3 md:gap-12 p-4 md:p-10 bg-white bg-opacity-5 backdrop-blur-md rounded-xl shadow-custom-inset'>
        {/* Heading  */}
        <div className='w-max'>
          <h1 className='text-white text-2xl lg:text-4xl w-fit uppercase'>My Expertise</h1>
        </div>
        {/* Container  */}
        <div className='flex flex-col  text-sm md:text-xl lg:text-2xl w-full gap-3 md:gap-5 text-white'>
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row gap-3 md:gap-5'>
            <motion.p variants={listVariant} className='text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/3'>CGI Ads</motion.p>
            <motion.p variants={listVariant} className='text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/3'>Product Modeling </motion.p>
            <motion.p variants={listVariant} className='text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/3'>Product Animations</motion.p>
          </motion.div>
          
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row gap-3 md:gap-5 justify-center'>
            <motion.p variants={listVariant} className='col-span-6 text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/4'>Brand Visuals</motion.p>
            <motion.p variants={listVariant} className='col-span-6 text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/4'>Clothing CGI</motion.p>
          </motion.div>
          <motion.div variants={boxVariant} initial={"hidden"} whileInView={"visible"} className='w-full flex flex-row justify-center'>
            <motion.p variants={listVariant} className='col-span-12 text-center bg-black bg-opacity-60 backdrop-blur-3xl rounded-md p-2 md:p-4 w-1/3 md:w-1/4'>Custom CGI Projects</motion.p>
          </motion.div>

        </div>
        
      </div>
    </div>
  )
}

export default AboutMe
