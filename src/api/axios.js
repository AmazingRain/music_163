import axios from 'axios';

import { MY_BASE_URL, OTHER_BASE_URL, TIMEOUT } from '../config';

function request1(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: MY_BASE_URL,
      timeout: TIMEOUT
    });


    instance.interceptors.request.use(config => {
      return config;
    })

    instance.interceptors.response.use(
      response => {
        return response.data;
      },
      err => {
        // err.response，失败响应
        if (err && err.response) {
          const { status } = err.response;
          switch(status) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权的访问';
              break;
            case 404:
              err.message = '请求资源不存在';
              break;
            default:
              err.message = '其它错误信息';
          }
        }
      }
    )

    instance(option)
      .then(result => resolve(result))
      .catch(err => reject(err))
  })
}

function request2(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: OTHER_BASE_URL,
      timeout: TIMEOUT
    });


    instance.interceptors.request.use(config => {
      return config;
    })

    instance.interceptors.response.use(
      response => {
        return response.data;
      },
      err => {
        // err.response，失败响应
        if (err && err.response) {
          const { status } = err.response;
          switch(status) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权的访问';
              break;
            case 404:
              err.message = '请求资源不存在';
              break;
            default:
              err.message = '其它错误信息';
          }
        }
      }
    )

    instance(option)
      .then(result => resolve(result))
      .catch(err => reject(err))
  })
}

export {
  request1,
  request2
}