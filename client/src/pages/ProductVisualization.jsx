import React, {useState, useEffect} from 'react'
import { getProductVisualizations } from '../services/productService'

const ProductVisualization = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetchProductVisualizations();
    },[])

    async function fetchProductVisualizations(){
        const data = await getProductVisualizations();
        setProductList(data);
    }

    console.log("PRODUCT VISUALIZATION LIST : ", productList);
    
  return (
    <div>
      
    </div>
  )
}

export default ProductVisualization
