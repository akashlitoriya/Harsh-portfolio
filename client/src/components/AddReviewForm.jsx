import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { toast } from "react-toastify";
import { addReview } from "../services/reviewService";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";

const AddReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [file, setFile] = useState(null)
  const dispatch = useDispatch();
  const handleReviewSubmit = (data) => {
    data.social = `https://www.instagram.com/${data.social}`;
    
    if(!file){
        toast.error("Brand Icon is required");
        return;
    }
    data.brandIcon = file;
    let formData = new FormData();
    formData.append("social", data.social);
    formData.append("brandIcon", data.brandIcon);
    formData.append("name", data.name);
    formData.append("brandName", data.brandName);
    formData.append("email", data.email);
    formData.append("review", data.review);
    dispatch(addReview(formData));
    reset();
    setFile(null)
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleReviewSubmit)}
        className="w-full max-w-xs md:max-w-sm mx-auto flex flex-col gap-3 mb-6 md:mb-0"
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-base text-white">
            Name
            <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white"
            placeholder="Enter Name here"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs">Name is required</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-base text-white">
            Email
            <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white"
            placeholder="Enter Email here"
            {...register("email", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs">Email is required</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="brandName" className="text-base text-white">
            Brand Name
            <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
          </label>
          <input
            type="text"
            id="brandName"
            className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white"
            placeholder="Enter Brand-name here"
            {...register("brandName", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs">BrandName is required</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="review" className="text-base text-white">
            Review
            <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
          </label>
          <textarea
            rows={5}
            type="text"
            id="review"
            className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white"
            placeholder="Type review here..."
            {...register("review", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs">Review is required</span>
          )}
        </div>

        <div className="w-full px-4 py-2 rounded-lg bg-text_secondary flex flex-row  items-center gap-1 md:gap-3">
          <div>
            <IoLogoInstagram className="text-pink-800 text-xl font-semibold" />
          </div>
          <p className="text-white cursor-default">
            https://www.instagram.com/
          </p>
          <input
            type="text"
            className="max-w-16 md:max-w-28 bg-transparent focus:outline-none text-white"
            placeholder="username"
            id="instagram"
            {...register("social", { required: true })}
          />
        </div>
        {errors.social && (
          <span className="text-red-600 text-xs">
            Instagram username is required
          </span>
        )}
        <label className="w-full bg-text_secondary px-4 py-2 rounded-lg text-white">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h1>Brand Icon</h1>
                    <FaStarOfLife className="inline text-[0.5rem] ml-2 text-pink-700" />
                </div>
                {
                    file? (
                        <div className="flex flex-row gap-2 rounded-full border-2 border-pink-800 px-3 py-1 text-xs">
                            <p>{file.name}</p>
                            <button className="hover:text-pink-400" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); setFile(null)}}><RxCross2 /></button>
                        </div>
                    ) :(
                        <div className="bg-pink-800 px-3 py-1 rounded-md text-xs font-semibold cursor-pointer">Upload Here</div>
                    )
                }
            </div>
          <input type="file" className="hidden" onChange={(e)=>{setFile(e.target.files[0])}} accept="image/jpg, image/jpeg, image/png"/>
        </label>

        <button className="w-full max-w-sm bg-blue_primary rounded-lg px-4 py-2 text-white transition-all duration-200 hover:scale-95">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
