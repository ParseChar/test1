import axios from "axios";
export function request(config){
  const instance = axios.create({
    baseURL : 'http://152.136.185.210:7878/api/m5',
    timeout : 2000
  })
  //2.拦截请求
  instance.interceptors.request.use(config =>{
    // console.log(config);
    return config
  },error => {
    console.log(error);
  })
  //3.拦截响应
  instance.interceptors.response.use(res =>{
    // console.log(res);
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)
}


