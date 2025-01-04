import React from 'react'
import {useForm} from 'react-hook-form'
import { FaStarOfLife } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import {editReview} from '../../services/review'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';

const EditReviewForm = ({review, setShowEditModal, updateReview}) => {
    const {token} = useSelector((state) => state.user)
    const [file, setFile] = useState(null);
    const [approved, setApproved] = useState(false);
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        defaultValues:{
            email: review.email,
            name: review.name,
            social: review.social.split('.com/')[1],
            brandName: review.brandName,
            review: review.review,
            brandIcon: review.brandIcon
        }
    });
    useEffect(()=>{
        if(review?.brandIcon && review?.brandIcon?.url) {setFile(review?.brandIcon?.url)}
        if(review?.approved) setApproved(true);
    },[])
    const dispatch = useDispatch();
    const handleReviewSubmit = async(data) => {
        data.social = `https://www.instagram.com/${data.social}`;
        data.reviewId = review.reviewId;
        let formData = new FormData();
        formData.append("social", data.social);
        formData.append("brandIcon", data.brandIcon);
        formData.append("name", data.name);
        formData.append("brandName", data.brandName);
        formData.append("email", data.email);
        formData.append("review", data.review);
        formData.append("updatedBrandIcon", file);
        formData.append("reviewId", data.reviewId);
        formData.append("approved", approved)
        const response = await dispatch(editReview(formData, data.reviewId, token));
        if(response?.status === 200){
            updateReview(response.data?.updatedReview);
            reset();
            setFile(null);
            setShowEditModal(false);
        }
    }
  return (
    <div className=''>
        <form onSubmit={handleSubmit(handleReviewSubmit)} className='w-full max-w-xs md:max-w-sm mx-auto flex flex-col gap-3 mb-6 md:mb-0'>
            <div>
                <div className={`w-10 h-5 rounded-full border-2 ${approved? "border-green-400" : "border-red-600"} cursor-pointer`} onClick={()=>setApproved(!approved)}>
                    <div className={`w-4 h-4 transform transition-all duration-300 ${approved? "bg-green-600": "bg-red-600"} rounded-full my-auto mx-[1px] ${approved? "translate-x-[18px]": "translate-x-0"}`} >

                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor='name' className='text-base text-white'>Name<FaStarOfLife className='inline text-[0.5rem] ml-2 text-pink-700' /></label>
                <input type='text' id='name' className='w-full bg-text_secondary px-4 py-2 rounded-lg text-white' placeholder='Enter Name here' {...register('name', {required: true})} />
                {errors.name && <span className='text-red-600 text-xs'>Name is required</span>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor='email' className='text-base text-white'>Email<FaStarOfLife className='inline text-[0.5rem] ml-2 text-pink-700' /></label>
                <input type='email' id='email' className='w-full bg-text_secondary px-4 py-2 rounded-lg text-white' placeholder='Enter Email here' {...register('email', {required: true})} />
                {errors.name && <span className='text-red-600 text-xs'>Email is required</span>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor='brandName' className='text-base text-white'>Brand Name<FaStarOfLife className='inline text-[0.5rem] ml-2 text-pink-700' /></label>
                <input type='text' id='brandName' className='w-full bg-text_secondary px-4 py-2 rounded-lg text-white' placeholder='Enter Brand-name here' {...register('brandName', {required: true})} />
                {errors.name && <span className='text-red-600 text-xs'>BrandName  is required</span>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor='review' className='text-base text-white'>Review<FaStarOfLife className='inline text-[0.5rem] ml-2 text-pink-700' /></label>
                <textarea rows={5} type='text' id='review' className='w-full bg-text_secondary px-4 py-2 rounded-lg text-white' placeholder='Type review here...' {...register('review', {required: true})} />
                {errors.name && <span className='text-red-600 text-xs'>Review is required</span>}
            </div>

            <div className='w-full px-4 py-2 rounded-lg bg-text_secondary flex flex-row  items-center gap-1 md:gap-3'>
                <div>
                    <IoLogoInstagram className='text-pink-800 text-xl font-semibold'/>
                </div>
                <p className='text-white cursor-default'>
                    https://www.instagram.com/
                </p>
                <input type='text' className='max-w-16 md:max-w-28 bg-transparent focus:outline-none text-white' placeholder='username' id='instagram' {...register('social', {required: true})} />
                
            </div>
            {
                errors.social && <span className='text-red-600 text-xs'>Instagram username is required</span>
            }

            <label className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <h1>Brand Icon</h1>
                                <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
                            </div>
                            {
                                file? (
                                    <div className="flex flex-row gap-2 rounded-full border-2 border-pink-800 px-3 py-1 text-xs">
                                        <a href={file} target='_blank'>Click to View</a>
                                        <button className="hover:text-pink-400" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); setFile(null)}}><RxCross2 /></button>
                                    </div>
                                ) :(
                                    <div className="bg-pink-800 px-3 py-1 rounded-md text-xs font-semibold cursor-pointer">Upload Here</div>
                                )
                            }
                        </div>
                      <input type="file" className="hidden" onChange={(e)=>{setFile(e.target.files[0])}} accept="image/jpg, image/jpeg, image/png"/>
                    </label>

            <button className='w-full max-w-sm bg-blue_primary rounded-lg px-4 py-2 text-white transition-all duration-200 hover:scale-95'>Edit Review</button>
        </form>
      
    </div>
  )
}

export default EditReviewForm
