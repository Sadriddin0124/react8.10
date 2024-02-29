import axios, { CreateAxiosDefaults } from "axios";
import Cookies from "js-cookie"
const API_URL = process.env.API_URL
const options:CreateAxiosDefaults = {
    baseURL: API_URL,
    withCredentials: true

}
const $api = axios.create(options)
const $apiAuth = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config)=> {
    const access_token = Cookies.get("token")
    if(config.headers && access_token){
        config.headers.Authorization = `Bearer ${access_token}`
    }
    return config
})

export {$apiAuth, $api}