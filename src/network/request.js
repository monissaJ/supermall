import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'',
    timeout:5000
  })

  //拦截器 

  // 请求拦截
  instance.interceptors.request.use(config=>{
    // 成功时拦截到的内容
    return config
  }, err=>{
    // 失败时拦截到的内容
  });

  // 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  }, err=>{
    console.log(err)
  });

  // 发送真正的网络请求
  return instance(config)
  
}















