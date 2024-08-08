import {products} from './apis'
import apiConnector from './apiConnector'
import { toast } from 'react-toastify'
import { setLoading } from '../store/slices/loaderSlice'

export const addProject = (data, token) =>{
    return async(dispatch)=>{
        try{
            dispatch(setLoading(true));
            const response = await apiConnector(products.addProject, 'POST', data, {Authorization: `Bearer ${token}`});
            toast.success('Project Added Successfully');
            dispatch(setLoading(false));
            console.log("ADD PROJECT RESPONSE > ", response);
        }catch(err){
            dispatch(setLoading(false));
            toast.error(err.response.data.message);
            console.log("ADD PROJECT ERROR > ", err);
        }
    }
}