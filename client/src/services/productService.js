import apiConnector from "./axiosInstance";
import {project} from './apiPaths';
import { addLoader, removeLoader } from "../store/loaderSlice";

export function getProductMockup(setProductList){
    return async(dispatch) =>{
        dispatch(addLoader())
        try{
            setTimeout(()=>{

            }, 10*1000);
            const response = await apiConnector("GET", project.productMockup);
            setProductList( response.data?.data);
            dispatch(removeLoader())
        }catch(err){
            console.log("ERROR FETCHING PRODUCT MOCKUP : ", err)
        }
    }
}

export function getBrandVisual(setProductList){
    return async(dispatch) =>{
        dispatch(addLoader())
        try{
            setTimeout(()=>{

            }, 10*1000);
            const response = await apiConnector("GET", project.brandVisual);
            setProductList( response.data?.data);
            dispatch(removeLoader())
        }catch(err){
            console.log("ERROR FETCHING BRAND VISUAL : ", err)
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