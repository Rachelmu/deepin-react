import axios from 'axios'

import { baseApi } from '../api'

const http = axios.create({
  baseURL: baseApi,
  timeout: 1000,
  headers: {

  }
})

export const login = (url, data) => {

}

export default http