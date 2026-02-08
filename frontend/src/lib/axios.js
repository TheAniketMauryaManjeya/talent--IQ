import axios from "axios";

//axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true // by adding this field browser will send the cookies to server  automatically, on every single req
})


export default axiosInstance;