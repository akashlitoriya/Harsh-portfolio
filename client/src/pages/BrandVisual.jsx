import React, { useState, useEffect } from "react";
import { getBrandVisual } from "../services/productService";
import Gallery from "../components/Gallery";
import { addLoader, removeLoader } from "../store/loaderSlice";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";

const BrandVisual = () => {
  const {loading} = useSelector(store=>store.loader);
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetchBrandVisual();
  }, []);

  async function fetchBrandVisual() {
    const data = dispatch(getBrandVisual(setProductList));
  }

  return (
    loading ? (<Loader />) :(
      <div className="min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center bg-backdrop">
      <div className='w-max mt-6 md:mt-10'>
          <h1 className='text-white text-3xl lg:text-4xl w-fit tracking-wider font-Montserrat font-semibold'>Brand Visual</h1>
          <p className='h-[2px] md:h-1 bg-blue_primary'></p>
        </div>
      <div className="w-full md:w-[1200px] p-8 rounded-xl">
        <Gallery itemList={productList} />
      </div>
    </div>
    )
  );
};

export default BrandVisual;
