import axios from 'axios'

const axiosInstance = axios.create({})

const apiConnector = (method, url, body, header, params) =>{
    return axiosInstance({
        url: `${url}`,
        data: body ? body : null,
        headers: header ? header : null,
        method: `${method.toUpperCase()}`,
        params: params ? params : null
    })
}

export default apiConnector;
