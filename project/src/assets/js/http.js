import {
  baseUrl
} from './env'

import axios from 'axios'
import qs from 'qs'
import store from '@/store'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  store.state.isLoad = true
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  store.state.isLoad = false
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应false错误做点什么
  return Promise.reject(error)
})

const apiAxios = (method, url, params) => {
  let httpDefault = {
    method: method,
    baseURL: baseUrl,
    url: url,
    params: method === 'GET' || method === 'POST' ? params : null,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    timeout: 10000
  }

  return new Promise((resolve, reject) => {
    axios(httpDefault).then((res) => {
      resolve(res)
    }).catch(respones => {
      reject(respones)
    })
  })
}

export const getAxios = (url, params) => apiAxios('GET', url, params)
export const postAxios = (url, params) => apiAxios('POST', url, params)
export const putAxios = (url, params) => apiAxios('PUT', url, params)
export const delectAxios = (url, params) => apiAxios('DELECT', url, params)
