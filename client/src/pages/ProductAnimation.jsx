import React, { useEffect, useState } from 'react'
import { getProductAnimations } from '../services/productService'

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
    <div>
      ProductAnimation
    </div>
  )
}

export default ProductAnimation
