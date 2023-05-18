import { Fragment, Suspense, useContext, useEffect } from 'react'
// import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'src/routes'
import { Dropdown, initTE, Ripple } from 'tw-elements'
import {
  ROUTE_PATH_LOGIN,
  ROLE_SUPER_ADMIN,
  ROLE_ADMIN,
  ROLE_TEACHER,
  ROLE_PARENTOFSTUDENT,
  ROLE_DEFAULT
} from 'src/routes/constant'
import { ConfigContext } from './contexts/ConfigContext'
import DefaultLayout from './layouts/DefaultLayout'

// import TestComponent from './TestComponent'
const App = () => {
  const { account } = useContext(ConfigContext)
  useEffect(() => {
    initTE({ Ripple, Dropdown })
  }, [])
  const checkRole = () => {
    const listRole = {
      [ROLE_SUPER_ADMIN]: [ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_TEACHER, ROLE_DEFAULT],
      [ROLE_ADMIN]: [ROLE_ADMIN, ROLE_TEACHER, ROLE_DEFAULT],
      [ROLE_TEACHER]: [ROLE_TEACHER],
      [ROLE_PARENTOFSTUDENT]: [ROLE_PARENTOFSTUDENT, ROLE_DEFAULT],
      default: [ROLE_DEFAULT]
    }
    return listRole[account?.roles[0].authority ?? 'default']
  }

  return (
    <>
      <Routes>
        {publicRoutes
          ?.filter((i) => {
            return checkRole()?.includes(i.role)
          })
          ?.map((route, index) => {
            const Component = route?.component
            const Layout = route?.layout ? route.layout : <Fragment></Fragment>
            return (
              <Route
                path={route.path}
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Layout>
                      <Component />
                    </Layout>
                  </Suspense>
                }
                key={index}
              />
            )
          })}
        {privateRoutes
          ?.filter((i) => {
            return checkRole()?.includes(i.role)
          })
          ?.map((route, index) => {
            const Component = route?.component
            let Layout = route?.layout ? route.layout : Fragment
            if (route.path === '/' && account?.roles[0].authority === ROLE_SUPER_ADMIN) {
              Layout = DefaultLayout
            }
            return (
              <Route
                path={route.path}
                element={
                  account ? (
                    <Suspense fallback={<p>Loading...</p>}>
                      <Layout>
                        <Component />
                      </Layout>
                    </Suspense>
                  ) : (
                    <Navigate to={ROUTE_PATH_LOGIN} replace />
                  )
                }
                key={index}
              ></Route>
            )
          })}
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {/* <TestComponent /> */}
    </>
  )
}

export default App
