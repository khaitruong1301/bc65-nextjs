import axios from "axios";
import {setupCache} from 'axios-cache-adapter'
//Cấu hình cache axios
const cache = setupCache({maxAge:60 * 1000 * 15}); //cache 15 phút

//Khai báo interceptor
const httpApiStore = axios.create({
    adapter:cache.adapter,
    baseURL:'https://apistore.cybersoft.edu.vn',
    timeout: 30 * 1000 // mili giây = 30 giây huỷ request nếu không có kết quả trả về
});

//Cấu hình interceptor req Gửi đi (mở network để xem)  
httpApiStore.interceptors.request.use((req) => {
    return req;
},err => {
    return Promise.reject(err);
});

//Cấu hình interceptor response (kết quả nhận về)
httpApiStore.interceptors.response.use((res) => {
    return res;
},  err => {
    return Promise.reject(err);
})
export {httpApiStore}