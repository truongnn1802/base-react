import { login } from 'src/apis/auth.api'

export const handleLogin = async (body, cb) => {
  try {
    const res = await login(body)
    if (res?.code === 200 && res?.type === 'Success') {
      cb(res?.data)
    }
  } catch (err) {
    console.log(err)
  }
}
