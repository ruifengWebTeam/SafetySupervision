import axios from 'axios'
import router from './src/router'
import vue from 'vue'
import Qs from 'qs'
//解决post发送两次请求
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.transformRequest = [obj => Qs.stringify(obj)]

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

http.interceptors.request.use(function (config) {

  if (localStorage.getItem('id') && localStorage.getItem('token')) {  
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {

  if (error.response.status == 401 || error.response.status == 402) {
    debugger
    vue.prototype.$msg.fail(error.response.data.message)
    router.push('/login')

  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default http
