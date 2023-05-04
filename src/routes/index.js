import { lazy } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import LayoutOnlyHeader from '../layouts/LayoutOnlyHeader'

const Login = lazy(() => import('src/pages/LoginPage'))
const DashboardPage = lazy(() => import('src/pages/DashboardPage'))
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'))
const LessonManagementPage = lazy(() => import('src/pages/LessonManagementPage'))
import {
  ROUTE_PATH_FORGOTPASSWORD,
  ROUTE_PATH_HOME,
  ROUTE_PATH_LOGIN,
  ROUTE_TEST,
  ROUTE_GIAO_AN,
  ROUTE_BAI_GIANG,
  ROLE_SUPERADMIN,
  ROLE_ADMIN,
  ROLE_TEACHER,
  ROLE_PARENTOFSTUDENT,
  ROLE_DEFAULT
} from './constant'
export const publicRoutes = [
  {
    path: ROUTE_PATH_FORGOTPASSWORD,
    component: ForgotPassword,
    layout: LayoutOnlyHeader,
    role: ROLE_SUPERADMIN
  },
  {
    path: ROUTE_PATH_LOGIN,
    component: Login,
    layout: LayoutOnlyHeader,
    role: ROLE_DEFAULT
  },
  {
    path: ROUTE_TEST,
    component: () => <h1>dfadsfdasf</h1>,
    layout: DefaultLayout,
    role: ROLE_PARENTOFSTUDENT
  }
]
export const privateRoutes = [
  {
    path: ROUTE_PATH_HOME,
    component: DashboardPage,
    layout: LayoutOnlyHeader,
    role: ROLE_SUPERADMIN
  },
  {
    path: ROUTE_GIAO_AN,
    component: LessonManagementPage,
    layout: DefaultLayout,
    role: ROLE_TEACHER
  },
  {
    path: ROUTE_BAI_GIANG,
    component: () => <p>Quan ly bài giảng</p>,
    layout: LayoutOnlyHeader,
    role: ROLE_TEACHER
  },
  {
    path: 'admintest',
    component: () => <p>tk admin</p>,
    layout: LayoutOnlyHeader,
    role: ROLE_ADMIN
  }
]
