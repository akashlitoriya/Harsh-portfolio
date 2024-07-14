import React, { useState, useEffect } from "react";
import { getProductVisualizations } from "../services/productService";
import Gallery from "../components/Gallery";

const ProductVisualization = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetchProductVisualizations();
  }, []);

  async function fetchProductVisualizations() {
    const data = await getProductVisualizations();
    setProductList(data);
  }

  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex justify-center items-center bg-backdrop">
      <div className="w-[1200px] p-8 rounded-xl">
        <Gallery itemList={productList} />
      </div>
    </div>
  );
};

export default ProductVisualization;
