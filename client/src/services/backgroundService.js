import { background } from "./apiPaths";
import apiConnector from "./axiosInstance";

export const fetchbackground = () =>{
    return async(dispatch)=>{
        try{
            const response = await apiConnector('GET', background.backgrounds);
            console.log("FETCH BACKGROUND RESPONSE - ", response.data.bg);
            return response.data.bg;
        }catch(err){
            console.log("ERROR FETCHING BACKGROUND : ", err.message);
        }
    }
}