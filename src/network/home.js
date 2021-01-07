/**
 * 用作接收网络请求来的数据的方法
 */
import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}