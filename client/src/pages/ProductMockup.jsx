import React, { useState, useEffect } from "react";
import { getProductMockup } from "../services/productService";
import Gallery from "../components/Gallery";
import { addLoader, removeLoader } from "../store/loaderSlice";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";

const ProductMockup = () => {
  const {loading} = useSelector(store=>store.loader);
  const dispatch = useDispatch();
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    fetchProductMockup();
  }, []);

  async function fetchProductMockup() {
    const data = dispatch(getProductMockup(setProjectList));
  }

  return (
    loading ? (<Loader />) :(
      <div className="min-h-screen w-screen overflow-x-hidden flex flex-col justify-center gap-3 sm:gap-8 items-center bg-backdrop">
      <div className='w-max mt-6 md:mt-10'>
          <h1 className='text-white text-xl sm:text-3xl lg:text-4xl w-fit tracking-wider font-Montserrat font-semibold uppercase  px-10 py-5 bg-white bg-opacity-5 rounded-lg'>Product Mockup</h1>
          
        </div>
      <div className="w-full md:w-[1200px] p-8 rounded-xl">
      {
          projectList && projectList.length === 0 ? (
            <div className='text-gray-300 text-xl text-center font-semibold'>No Project Found</div>
          ):(
            <Gallery itemList={projectList}/>
          )
        }
      </div>
    </div>
    )
  );
};

export default ProductMockup;
