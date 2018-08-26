import axios from 'axios'
const BASE_API = 'http://localhost:3000'
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(BASE_API + url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(BASE_API + url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
