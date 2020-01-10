import axios from 'axios'

import { baseApi } from '../api'

const action = axios.create({
  baseURL: baseApi,
  timeout: 1000,
  port: 3000,
  withCredentials: true,
  headers: {

  }
})

export const login = (url, data) => {

}

export default action