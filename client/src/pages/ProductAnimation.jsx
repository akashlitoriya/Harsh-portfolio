import React, { useEffect, useState } from 'react'
import { getProductAnimations } from '../services/productService'
import Gallery from '../components/Gallery';

const ProductAnimation = () => {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        fetchProductAnimation();
    },[])

    async function fetchProductAnimation(){
        const data = await getProductAnimations();
        setProductList(data);
    }

    console.log("PRODUCT ANIMATION LIST : ", productList);
  return (
    <div className='min-h-screen w-screen overflow-x-hidden flex justify-center items-center bg-backdrop'>
      <div className='w-[1200px] p-8 rounded-xl'>
        <Gallery itemList={productList}/>
      </div>
    </div>
  )
}

export default ProductAnimation
