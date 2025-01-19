import { background } from "./apis";
import apiConnector from "./apiConnector";
import { setLoading } from '../store/slices/loaderSlice'
import { toast } from "react-toastify";

export const changeBackground = (token, data) => {
    return async(dispatch)=>{
        try{
            dispatch(setLoading(true));
            const response = await apiConnector(background.changeBackground, 'PUT', data, {Authorization: `Bearer ${token}`})
            dispatch(setLoading(false));
            toast.success("Background changed successfully")
        }catch(err){
            console.log("ERROR OCCURED WHILE CHANGING - ", err.message)
            dispatch(setLoading(false));
            toast.error("Failed to change background");
        }
    }
}