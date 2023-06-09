import { lazy } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import LayoutOnlyHeader from '../layouts/LayoutOnlyHeader'

const Login = lazy(() => import('src/pages/LoginPage'))
const Register = lazy(() => import('src/pages/RegisterPage'))
const DashboardPage = lazy(() => import('src/pages/DashboardPage'))
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'))
const LessonManagementPage = lazy(() => import('src/pages/LessonManagementPage'))
const SystemAdminPage = lazy(() => import('src/pages/SystemAdmin'))
import {
  ROUTE_PATH_FORGOTPASSWORD,
  ROUTE_PATH_HOME,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_REGISTER,
  ROUTE_TEST,
  ROUTE_GIAO_AN,
  ROUTE_BAI_GIANG,
  ROLE_SUPER_ADMIN,
  ROLE_ADMIN,
  ROLE_TEACHER,
  ROLE_PARENTOFSTUDENT,
  ROLE_DEFAULT,
  ROUTE_QT_HE_THONG
} from './constant'
export const publicRoutes = [
  {
    path: ROUTE_PATH_FORGOTPASSWORD,
    component: ForgotPassword,
    layout: LayoutOnlyHeader,
    role: ROLE_SUPER_ADMIN
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
    path: ROUTE_PATH_REGISTER,
    component: Register,
    layout: LayoutOnlyHeader,
    role: ROLE_SUPER_ADMIN
  },
  {
    path: ROUTE_PATH_HOME,
    component: DashboardPage,
    layout: LayoutOnlyHeader,
    role: ROLE_DEFAULT
  },
  {
    path: ROUTE_GIAO_AN,
    component: LessonManagementPage,
    layout: DefaultLayout,
    role: ROLE_TEACHER
  },
  {
    path: ROUTE_QT_HE_THONG,
    component: SystemAdminPage,
    layout: DefaultLayout,
    role: ROLE_ADMIN,
    childrens: [
      {
        path: '123',
        component: SystemAdminPage,
        role: ROLE_ADMIN
      }
    ]
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
