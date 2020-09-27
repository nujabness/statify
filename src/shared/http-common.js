import axios from "axios";
import Store from '../store/store'

const axiosInstance = axios.create({
    headers: {
        "Content-type": "application/json",
    }
})
axiosInstance.interceptors.request.use((config) => {
        config.headers['Authorization'] = `Bearer ${Store.state.token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default axiosInstance;