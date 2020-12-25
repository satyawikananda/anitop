import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create()
const fetcher = async (url: string) => {
    const axiosConfig:AxiosRequestConfig = {
        method: "GET",
        url: url
    }
    const getters = await axiosInstance.request(axiosConfig)
    return Promise.resolve(getters)
}
export default fetcher