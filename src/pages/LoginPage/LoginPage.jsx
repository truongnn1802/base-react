// import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import jwtDecode from 'jwt-decode'

import InputCustom from 'src/components/Atoms/Input'
import Button from 'src/components/Atoms/Button'
// import { handleLogin } from './services.js'
// import { ConfigContext } from 'src/contexts/ConfigContext'
// import { ROUTE_PATH_HOME } from 'src/routes/constant'

function LoginPage() {
  // const { setLogin } = useContext(ConfigContext)
  const schema = yup.object({
    username: yup.string().required('Vui lòng nhập tên đăng nhập!'),
    password: yup.string().required('Vui lòng nhập mật khẩu!')
  })

  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  // const handleSubmit1 = (values) => {
  //   const onSetToken = (data) => {
  //     localStorage.setItem('access_token', JSON.stringify(data?.access_token))
  //     localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
  //     setLogin(jwtDecode(JSON.stringify(data?.access_token)))
  //     navigate(ROUTE_PATH_HOME)
  //   }
  //   handleLogin(values, onSetToken)
  // }
  const handleSubmit = () => {
    navigate('/')
    // handleLogin(values, onSetToken)
  }
  return (
    <section className='h-full bg-neutral-200'>
      <div className='w-full text-center'>
        <div className='block rounded-lg bg-white'>
          <div className='px-4 md:px-0 w-[auto] max-w-[300px] m-[auto]  pt-[100px]'>
            <div className='inline-block text-center'>
              <img
                className='mx-auto w-48'
                src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                alt='logo'
              />
              <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>We are The Lotus Team</h4>
            </div>
            <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
              <p className='mb-4 text-[24px]'>Đăng nhập tài khoản</p>
              <div className='relative mb-4'>
                <InputCustom
                  label={'Tên đăng nhập'}
                  idInput={'idUser'}
                  name='username'
                  width='100%'
                  form={form}
                  required
                />
              </div>
              <div className='relative mb-4'>
                <InputCustom
                  label={'Mật khẩu'}
                  idInput={'idPassword'}
                  type='password'
                  name='password'
                  width='100%'
                  form={form}
                  required
                />
              </div>
              <div className='mb-12 pb-1 pt-1 text-center'>
                <Button type='submit' text='Đăng nhập' classbutton='w-full' />
                <br />
                <div className='text-left mt-[5px]'>
                  <Link to='/quen-mat-khau' className='text-[12px] hover:text-[#93ebf8] cursor-pointer'>
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>
              {/* <div className='flex items-center justify-between pb-6'>
                <p className='mb-0 mr-2'>Don't have an account?</p>
                <button
                  type='button'
                  className='inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Register
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
