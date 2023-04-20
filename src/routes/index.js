import App from '../App'
import DefaultLayout from '../layouts/DefaultLayout'
export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    layout: <DefaultLayout />
  }
]
export const privateRoutes = [
  {
    path: '/',
    element: <App />
  }
]
