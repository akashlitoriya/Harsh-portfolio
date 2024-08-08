import axios from 'axios';

const axiosInstance = axios.create({});

const apiConnector = (url, method, data, headers, params) =>{
    return axiosInstance({
        url : `${url}`,
        method: `${method}`,
        data: data ? data: null,
        headers : headers ? headers : null,
        params : params ? params : null
    })
}

export default apiConnector;