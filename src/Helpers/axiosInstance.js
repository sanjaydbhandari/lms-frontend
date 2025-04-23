import axios from "axios";

const BASEURL = "http://localhost:3000/api/v1";

const getAuthToken = () => localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: BASEURL,
    timeout:30000,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config)=>{
    const token = getAuthToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (error)=>Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response){
            const {status} = error.response;
            if(status === 401){
                console.log("Unauthorized! Redirecting to login");
                window.location.href="/login";
            }else if (status === 403) {
                console.error("Forbidden! You don't have access.");
            } else if (status === 500) {
                console.error("Server error! Try again later.");
            }
        } else {
            console.error("Network error! Check your connection.");
        }
    return Promise.reject(error);
    }
)

export default axiosInstance;