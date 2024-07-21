import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import workCategories from '../utils/workCategories';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState(workCategories);

  function leftSlide(){
    console.log("LEFT BUTTON CLICKED")
    const temp = categoryList;
    const first = temp.shift();
    setCategoryList([...temp, first]);
  }

  function rightSlide(){
    console.log("RIGHT BUTTON CLICKED")
    const temp = categoryList;
    const last = temp.pop();
    setCategoryList([last, ...temp])
  }

  return (
    <div className='min-h-screen text-5xl font-bold flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='w-4/5 flex flex-col items-center'>
        {/* Heading  */}
        <motion.div initial={{scale: 0}} whileInView={{scale:1}} transition={{delay:0.3, duration:0.3}} className='w-max'>
          <h1 className='text-white text-3xl lg:text-4xl w-fit'>Selected Work</h1>
          <p className='h-[2px] md:h-1 bg-blue_primary'></p>
        </motion.div>

        {/* Gallery  */}
        <div className='flex items-center'>
          {/* <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3, duration:0.3}} onClick={()=>leftSlide()} className='p-3 text-white rotate-180 rounded-full bg-text_secondary text-2xl'><FaArrowRightLong/></motion.button> */}

          <div className='flex flex-col md:flex-row items-center gap-6 md:gap-20 p-10 text-base mt-3 md:mt-10'>
             {
              categoryList.length > 0 && categoryList.map((category, index) =>(
                <motion.div onClick={() => navigate(category.navigate)} initial={{opacity:0}} animate={{opacity:100}} transition={{duration:0.3, delay: 0.3}} key={category.id} className={`flex flex-col justify-center items-center cursor-pointer ${index === 1 ? "w-52 h-56 md:w-72 md:h-80": "w-40 h-40 md:w-44 md:h-44"}`}>
                  <motion.img initial={{opacity: 0}} animate={{opacity:100}} transition={{duration: 0.6, delay:0.1}} src={category.banner} alt='category banner' className={`rounded-full ${index === 1 ? "w-48 md:w-64": "w-28 md:w-36"}`}/>
                  <p className={`text-center mt-4 ${index === 1 ? "text-base md:text-xl text-white": "text-sm md:text-base text-gray-300"}`}>{category.name}</p>
                </motion.div>
              ))
             }

          </div>
          
          {/* <motion.button initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.3, duration:0.3}} onClick={()=>rightSlide()} className='p-3 text-white rounded-full bg-text_secondary text-2xl'><FaArrowRightLong/></motion.button> */}
          
        </div>
      </div>
    </div>
  )
}

export default Work
