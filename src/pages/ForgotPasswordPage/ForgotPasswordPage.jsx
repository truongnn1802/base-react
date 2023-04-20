import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputCustom from 'src/components/Atoms/Input'
import Button from 'src/components/Atoms/Button'
function ForgotPasswordPage() {
  const schema = yup.object({
    email: yup.string().required('Không để trống trường này!')
  })

  const form = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <section className='h-full bg-neutral-200'>
      <div className='w-full text-center'>
        <div className='block rounded-lg bg-white dark:bg-neutral-800'>
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
              <p className='mb-4 text-[24px]'>Quên mật khẩu</p>
              <div className='relative mb-4'>
                <InputCustom label={'Email'} idInput={'idEmail'} name='email' width='100%' form={form} required />
              </div>

              <div className='mb-12 pb-1 pt-1 text-center'>
                <Button type='submit' text='Lấy lại mật khẩu' classbutton='w-full' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordPage
