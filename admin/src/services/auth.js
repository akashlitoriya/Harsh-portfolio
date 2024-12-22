import {auth} from './apis';
import apiConnector from './apiConnector';
import { setToken } from '../store/slices/userSlice';
import { toast } from 'react-toastify';
import { setLoading } from '../store/slices/loaderSlice';

export const login = (data, navigate) =>{
    return async(dispatch)=>{
        try{
            dispatch(setLoading(true));
            const response = await apiConnector(auth.login, 'POST', data);
            console.log("LOGIN RESPONSE > ", response); 
            localStorage.setItem('token', response.data.token);
            dispatch(setToken(response.data.token));
            dispatch(setLoading(false));
            toast.success('Login Successful');
            navigate('/')
        }catch(err){
            dispatch(setLoading(false));
            toast.error(err.response.data.message);
            console.log("LOGING ERROR > ", err);
        }
    }
}

export const authCheck = (token, navigate) => {
    return async(dispatch) => {
        try{
            dispatch(setLoading(true));
            const response = apiConnector(auth.authCheck, 'GET', {}, {Authorization: `Bearer ${token}`}).then((data) => {
                console.log(`Successful response of auth check - ${response}`)
                dispatch(setLoading(false))
            }).catch((err) => {
                console.log(`Failed response of auth check - ${err}`);
                navigate('/login')
                dispatch(setLoading(false));
            })
            
        }catch(err){
            console.log("Error");
        }
    }
}