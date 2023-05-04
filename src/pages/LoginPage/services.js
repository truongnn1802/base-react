import { login } from 'src/apis/auth.api'

export const handleLogin = async (body, cb) => {
  console.log(body)
  try {
    const res = await login(body)
    console.log(res)
    if (res?.code === 200 && res?.type === 'Success') {
      cb(res?.data)
    }
  } catch (err) {
    console.log(err)
  }
}
