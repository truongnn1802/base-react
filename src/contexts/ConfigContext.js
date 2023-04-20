import { createContext, useMemo, useState } from 'react'

export const ConfigContext = createContext(null)

export function ConfigProvider({ children }) {
  const [, setReloadApp] = useState(false)
  const [isLogin, setIsLogin] = useState(() => {
    const isToken = JSON.parse(localStorage.getItem('token'))
    return !!isToken
  })
  const setConfig = (data) => {
    console.log(data)
    setReloadApp((reload) => !reload)
  }
  const setLogin = (data) => {
    setIsLogin(data)
  }

  const values = useMemo(
    () => ({
      setConfig,
      isLogin,
      setLogin
    }),
    [isLogin]
  )

  return <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
}
