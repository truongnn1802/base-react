import axios from 'axios'
import { URL } from 'src/constants'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: URL,
      timeout: 10000
    })
    this.refreshTokenRequest = null
    this.instance.interceptors.request.use(
      (config) => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (config) => config.data,
      (error) => {
        if (error.response.status === 401 && error.response.data.name === 'EXPIRED_ACCESS_TOKEN') {
          this.refreshTokenRequest = this.refreshTokenRequest
            ? this.refreshTokenRequest
            : refreshToken().finally(() => {
                this.refreshTokenRequest = null
              })
          return this.refreshTokenRequest
            .then(() => {
              this.instance(error.response.config)
            })
            .catch((refreshTokenerror) => {
              throw refreshTokenerror
            })
        }
        return Promise.reject(error)
      }
    )
  }

  get(url, params) {
    return this.instance.get(url, params)
  }

  post(url, body) {
    return this.instance.post(url, body)
  }
}
export const http = new Http()

const refreshToken = async () => {
  const refresh_token = localStorage.getItem('refresh_token')
  try {
    const res = await http.post('/api/v1/auth/refreshtoken', {
      refresh_token
    })
    const { access_token } = res.data
    localStorage.setItem('access_token', access_token)
    return access_token
  } catch (error) {
    localStorage.clear()
    throw error.response
  }
}
