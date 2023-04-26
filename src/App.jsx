// import { useEffect } from 'react'
import { Fragment, Suspense, useContext, useEffect } from 'react'
// import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'src/routes'
import { Dropdown, initTE, Ripple } from 'tw-elements'
import { ROUTE_PATH_LOGIN } from 'src/routes/constant'
import { ConfigContext } from './contexts/ConfigContext'
// import TestComponent from './TestComponent'
const App = () => {
  const { isLogin } = useContext(ConfigContext)
  useEffect(() => {
    initTE({ Ripple, Dropdown })
  }, [])

  return (
    <>
      <Routes>
        {publicRoutes?.map((route, index) => {
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
        {privateRoutes?.map((route, index) => {
          const Component = route?.component
          const Layout = route?.layout ? route.layout : Fragment
          return (
            <Route
              path={route.path}
              element={
                isLogin ? (
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
            />
          )
        })}
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {/* <TestComponent/> */}
    </>
  )
}

export default App
