import axios from "axios";
import {Message} from "element-ui"

const httpAxios=axios.create({
    timeout:2000
});

// 添加请求拦截器
httpAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    return {
        ...config,
        headers:{
            ...config.headers,
            'authorization':`Bearer ${window.localStorage.token}`
        }
    };
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 添加响应拦截器
httpAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // const {code,message} =response.data;
    return response.data;

    // if(code===1){//响应成功(code==1)，将data返回
    // }
       // 错误处理
    // console.log(message)
    // Message({
    //      message,
    //      type:error
    // })
    //  return Promise.reject(error);
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  export default httpAxios;