import apiConnector from "./axiosInstance";
import {project} from './apiPaths';

export async function getProductVisualizations(){
    try{
        const response = await apiConnector("GET", project.productVisualization);
        return response.data?.data;
    }catch(err){
        console.log("ERROR FETCHING PRODUCT VISUALIZATION : ", err)
    }
}

export async function getProductAnimations(){
    try{
        const response = await apiConnector("GET", project.productAnimation);
        return response.data?.data;
    }catch(err){
        console.log("ERROR FETCHING PRODUCT ANIMATION : ", err);
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