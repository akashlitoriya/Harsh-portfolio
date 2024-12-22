import React, { useEffect, useState } from 'react'
import { getProductAnimations } from '../services/productService'
import Gallery from '../components/Gallery';
import { addLoader, removeLoader } from '../store/loaderSlice';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';

const ProductAnimation = () => {
  const {loading} = useSelector((state) => state.loader)
  const dispatch = useDispatch();
    const [projectList, setProjectList] = useState([]);
    useEffect(()=>{
        fetchProductAnimation();
    },[])

    async function fetchProductAnimation(){
        dispatch(getProductAnimations(setProjectList))
    }

    if(loading){
      return (<Loader />)
    }

    console.log("PRODUCT ANIMATION LIST : ", projectList);
  return (
    <div className='min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center bg-backdrop'>
      <div className='w-max mt-6 md:mt-10'>
          <h1 className='text-white text-3xl lg:text-4xl w-fit tracking-wider font-Montserrat font-semibold'>Product Animation</h1>
          <p className='h-[2px] md:h-1 bg-blue_primary'></p>
        </div>
      <div className='w-full md:w-[1200px] p-8 rounded-xl'>
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
}

export default ProductAnimation
