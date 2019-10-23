import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { config } from 'rxjs'

const instance = axios.create({
  timeout:10000
})
instance.interceptors.request.use(config =>{
  console.log('reqest interceptor onResolved()')
  NProgress.start()
  const {data} = config
  if (data instanceof Object) {
    config.data =qs.stringify(data)
  }
  return config
})
instance.interceptors.request.use(
  response =>{
    console.log('response interceptor onResolved()')
    NProgress.done()
    const result = response.data
    return result
  },
  error =>{
    console.log('response interceptor onRejected()')
    NProgress.done()
    message.error('请求出错'+ error.message)
    return new Promise(() =>{})
  }
  
)
export default instance