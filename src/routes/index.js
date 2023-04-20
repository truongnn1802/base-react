import { lazy } from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'
import LayoutOnlyHeader from '../layouts/LayoutOnlyHeader'

const Login = lazy(() => import('src/pages/LoginPage'))
const DashboardPage = lazy(() => import('src/pages/DashboardPage'))
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'))
import { ROUTE_PATH_FORGOTPASSWORD, ROUTE_PATH_HOME, ROUTE_PATH_LOGIN } from './constant'
export const publicRoutes = [
  {
    path: ROUTE_PATH_FORGOTPASSWORD,
    component: ForgotPassword,
    layout: LayoutOnlyHeader
  },
  {
    path: ROUTE_PATH_LOGIN,
    component: Login,
    layout: LayoutOnlyHeader
  }
]
export const privateRoutes = [
  {
    path: ROUTE_PATH_HOME,
    component: DashboardPage,
    layout: LayoutOnlyHeader
  }
]
