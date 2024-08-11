import {contact} from '../services/apiPaths'
import apiConnector from '../services/axiosInstance';
import {toast} from 'react-toastify';

const contactUs = (data)=>{
    return async(dispatch) =>{
        const toastId = toast.loading('Sending message...');
        try{
            console.log("CONTACT US DATA : ", data);
            const response = await apiConnector('POST', contact.contactUs, data);
            if(response.status === 200){
                toast.success('Message sent successfully');
                toast.dismiss(toastId);
            }
        }catch(err){
            toast.error('Failed to send message');
            toast.dismiss(toastId);
        }
    }
}

export default contactUs;