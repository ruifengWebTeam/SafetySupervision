 
import axios from 'axios' 
import router from './src/router'
import vue from 'vue'
import Qs from 'qs'
import store from './src/store'

const http = axios.create({
  baseURL: store.state.baseUrl
 
})

http.interceptors.request.use(function (config) {

  if (localStorage.getItem('id') && localStorage.getItem('token')) {  
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
 
    // config.headers['Content-Type']  = 'application/x-www-form-urlencoded;charset=UTF-8'
    // config.defaults.transformRequest = [obj => Qs.stringify(obj)]
 
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
 
    vue.prototype.$msg.fail(error.response.data.message)
    router.push('/login')

  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default http
