import apiConnector from "./axiosInstance";
import {project} from './apiPaths';
import { addLoader, removeLoader } from "../store/loaderSlice";

export function getProductVisualizations(setProductList){
    return async(dispatch) =>{
        dispatch(addLoader())
        try{
            setTimeout(()=>{

            }, 10*1000);
            const response = await apiConnector("GET", project.productVisualization);
            setProductList( response.data?.data);
            dispatch(removeLoader())
        }catch(err){
            console.log("ERROR FETCHING PRODUCT VISUALIZATION : ", err)
        }
    }
}

export function getProductAnimations(setProductList){
    return async(dispatch)=>{
        dispatch(addLoader());
        try{
            const response = await apiConnector("GET", project.productAnimation);
            setProductList(response.data?.data);
            dispatch(removeLoader());
        }catch(err){
            console.log("ERROR FETCHING PRODUCT ANIMATION : ", err);
        }
    }
}

export async function getPersonalProjects(){
    try{
        const response = await apiConnector('GET', project.personalProject);
        return response.data?.data;
    }catch(err){
        console.log("ERROR FETCHING PERSONAL PROJECT : ", err);
    }
}