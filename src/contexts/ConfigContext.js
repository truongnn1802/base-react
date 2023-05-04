import { createContext, useMemo, useState } from 'react'
import jwtDecode from 'jwt-decode'

export const ConfigContext = createContext(null)

export function ConfigProvider({ children }) {
  const [, setReloadApp] = useState(false)
  const [account, setAccount] = useState(() => {
    const access_token = JSON.parse(localStorage.getItem('access_token'))
    return access_token ? jwtDecode(access_token) : false
  })
  const setConfig = (data) => {
    console.log(data)
    setReloadApp((reload) => !reload)
  }
  const setLogin = (data) => {
    setAccount(data)
  }

  const values = useMemo(
    () => ({
      setConfig,
      account,
      setLogin
    }),
    [account]
  )

  return <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
}
