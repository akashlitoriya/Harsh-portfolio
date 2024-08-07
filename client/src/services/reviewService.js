import { toast } from "react-toastify";
import { review } from "./apiPaths";
import apiConnector from "./axiosInstance";

export function addReview(reviewData){
    return (dispatch)=>{
        const toastId = toast.loading('Adding Review...');
        try{
            const response = apiConnector('POST', review.addReview, reviewData);
            toast.dismiss(toastId);
            toast.success('Review Added Successfully');

        }catch(err){
            console.log("ERROR ADDING REVIEW : ", err)
            toast.dismiss(toastId)
            toast.error(err.response?.data?.message || 'Something went wrong');
        }
    }
}