import apiConnector from './apiConnector'
import { reviews } from './apis'
import { toast } from 'react-toastify'
import { setLoading } from '../store/slices/loaderSlice'

export const getReviews = () =>{
    return async(dispatch) =>{
        try{
            dispatch(setLoading(true));
            const response = await apiConnector(reviews.reviews, "GET", null, null);
            dispatch(setLoading(false));
            return response.data.review;
        }catch(err){
            console.log("Error fetching reviews : ", err);
            toast.error("Error fetching reviews");
            dispatch(setLoading(false));
        }
    }
}

export const deleteReview = (reviewId, token) =>{
    return async(dispatch) => {
        try{
            dispatch(setLoading(true));
            const headers = {
                "Authorization": `Bearer ${token}`
            }
            const response = await apiConnector(`${reviews.deleteReview}/${reviewId}`, "DELETE", headers, null)
            dispatch(setLoading(false));
            return response.data.message;
        }catch(err){
            console.log("Error deleting review : ", err);
            toast.error("Error deleting review");
            dispatch(setLoading(false));
        }
    }
}

export const editReview =(data, token) => {
    return async(dispatch) => {
        try{
            dispatch(setLoading(true));
            const headers = {
                "Authorization": `Bearer ${token}`
            }
            const response = await apiConnector(`${reviews.editReview}/${data.reviewId}`, 'PUT', data, headers, null);
            dispatch(setLoading(false));
            return response.data.message;
        }catch(err){
            console.log("Error editing review : ", err);
            toast.error("Error editing review")
            dispatch(setLoading(false));
        }
    }
}
