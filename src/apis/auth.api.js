import { http } from 'src/utils/http.js'

const URL_LOGIN = 'api/v1/auth/signin'
const URL_REGISTER = 'api/v1/auth/register'
const URL_LOGOUT = 'api/v1/auth/logout'

export const login = (body) => {
  return http.post(URL_LOGIN, body)
}
export const register = (body) => {
  return http.post(URL_REGISTER, body)
}
export const logout = () => {
  return http.post(URL_LOGOUT)
}
