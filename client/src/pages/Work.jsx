import React, { useState } from 'react';
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
      <div className='w-11/12 md:w-4/5 flex flex-col items-center p-4 md:p-10 bg-white bg-opacity-5 backdrop-blur-md rounded-xl'>
        {/* Heading  */}
        <motion.div initial={{scale: 0}} whileInView={{scale:1}} transition={{delay:0.3, duration:0.3}} className='w-max'>
          <h1 className='text-white text-3xl lg:text-4xl w-fit'>Selected Work</h1>
          <p className='h-[2px] md:h-1 bg-blue_primary'></p>
        </motion.div>

        {/* Gallery  */}
        <div className='flex items-center'>
          {/* <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3, duration:0.3}} onClick={()=>leftSlide()} className='p-3 text-white rotate-180 rounded-full bg-text_secondary text-2xl'><FaArrowRightLong/></motion.button> */}

          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-base mt-3 md:mt-6 border-0 border-green-500'>
             {
              categoryList.length > 0 && categoryList.map((category, index) =>(
                <motion.div onClick={() => navigate(category.navigate)} initial={{opacity:0}} animate={{opacity:100}} transition={{duration:0.3, delay: 0.3}} key={category.id} className={`flex flex-col justify-center items-center cursor-pointer h-32 md:w-64 md:h-44 border-0 rounded-lg border-blue-500 overflow-hidden`}>
                  <motion.img initial={{opacity: 0}} animate={{opacity:100}} transition={{duration: 0.6, delay:0.1}} src={category.banner} alt='category banner' className={`object-fill object-center hover:scale-110 duration-200 transition-all`}/>
                  {/* <p className={`text-center mt-4 text-base md:text-xl text-white`}>{category.name}</p> */}
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
