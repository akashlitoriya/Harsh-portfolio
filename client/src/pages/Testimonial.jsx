import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { getReviews } from "../services/reviewService";
import { useDispatch } from "react-redux";
import InfiniteHorizontalScroll from "../components/InfiniteHorizontalScroll";
import InfiniteScrollSkeleton from "../components/InfiniteScrollSkeleton";

const Testimonial = () => {
  const dispatch = useDispatch();
  const [reviews, setReview] = useState([]);

 useEffect(() => {
    const data = dispatch(getReviews(setReview));
  }, []);

  console.log(reviews);
  return (
    <div className="h-screen font-bold text-5xl text-blue_primary snap-start flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 h-3/5 md:h-fit flex flex-col gap-5 md:gap-10 items-center p-4 md:p-10 bg-white bg-opacity-5 backdrop-blur-md rounded-xl overflow-hidden shadow-custom-inset">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-max"
        >
          <h1 className="text-white text-2xl lg:text-4xl w-fit uppercase">Guess we're good</h1>
        </motion.div>

        <div className="w-full max-w-[1400px] h-full md:h-fit overflow-hidden">
          {
            reviews && reviews.length > 0 ? (
              <InfiniteHorizontalScroll items={reviews}/>
            ):(
              <InfiniteScrollSkeleton />
            )
          }
          
        </div>        
      </div>
    </div>
  );
};

export default Testimonial;
