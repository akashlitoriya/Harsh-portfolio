import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'framer-motion';

const variants = {
    enter: (direction) => {
        return {
            //x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        //zIndex: 1,
        //x: 0,
        opacity: 1,
        
    },
    exit: (direction) => {
        return {
            //zIndex: 0,
            //x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};


const ImageSlider = ({ project }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, project.gallery.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <div className={`max-h-full h-full flex rounded-xl overflow-x-hidden relative group`}>
            <div className='flex md:hidden transition-all duration-300 md:group-hover:flex absolute w-full h-full justify-between items-center'>
                <button className='text-white z-30 text-2xl p-2 md:p-4 bg-black bg-opacity-30 backdrop-blur-3xl' onClick={() => paginate(-1)}><IoIosArrowBack /></button>
                <button className='rotate-180 z-30 text-white text-2xl p-2 md:p-4 bg-black bg-opacity-30 backdrop-blur-3xl' onClick={() => paginate(1)}><IoIosArrowBack /></button>
            </div>

            <div className='h-full overflow-x-hidden overflow-y-hidden z-10 flex md:block'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        className='z-20 max-h-full'
                        key={page}
                        src={project.gallery[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            //x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.6, ease: "linear" },
                        }}
                    />
                </AnimatePresence>
            </div>




        </div>
    )
}



export default ImageSlider
