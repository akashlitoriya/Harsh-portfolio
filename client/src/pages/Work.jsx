import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import workCategories from '../utils/workCategories';
import { motion } from 'framer-motion';

const Work = () => {
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
    <div className='h-screen text-5xl font-bold flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='w-4/5 flex flex-col items-center'>
        {/* Heading  */}
        <motion.div initial={{scale: 0}} whileInView={{scale:1}} transition={{delay:0.3, duration:0.3}} className='w-max'>
          <h1 className='text-white text-4xl w-fit'>Selected Work</h1>
          <p className='h-1 bg-blue_primary'></p>
        </motion.div>

        {/* Gallery  */}
        <div className='flex items-center'>
          <motion.button initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.3, duration:0.3}} onClick={()=>leftSlide()} className='p-3 text-white rotate-180 rounded-full bg-text_secondary text-2xl'><FaArrowRightLong/></motion.button>

          <div className='flex flex-row items-center gap-20 p-10 text-base mt-10'>
             {
              categoryList.length > 0 && categoryList.map((category, index) =>(
                <motion.div initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:0.3, delay: 0.3}} key={category.id} className={`${index === 1 ? "w-72 h-80": "w-40 h-44"}`}>
                  <img src={category.banner} alt='category banner' className={`rounded-full ${index === 1 ? "w-64": "w-36"}`}/>
                  <p className={`text-center mt-4 ${index == 1 && "text-white text-xl"} line-clamp-1`}>{category.name}</p>
                </motion.div>
              ))
             }

          </div>
          
          <motion.button initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.3, duration:0.3}} onClick={()=>rightSlide()} className='p-3 text-white rounded-full bg-text_secondary text-2xl'><FaArrowRightLong/></motion.button>
          
        </div>
      </div>
    </div>
  )
}

export default Work
