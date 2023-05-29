import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import jwtDecode from 'jwt-decode'

import InputCustom from 'src/components/Atoms/Input'
import Modal from 'src/components/Molecules/ModalForm'
import Table from 'src/components/Molecules/Table'
import SelectField from 'src/components/Atoms/SelectField'

import { handleLogin } from './services.js'
import { ConfigContext } from 'src/contexts/ConfigContext'
import { ROUTE_PATH_HOME } from 'src/routes/constant'

const configTbl = [
  { value: 'Tên cán bộ, giáo viên', name: 'name', action: 'true', align: 'center' },
  { value: 'Giới tính', name: 'gender' },
  { value: 'Số điện thoại', name: 'phoneNumber' },
  { value: 'Ngày sinh', name: 'dateOfBirth' },
  { value: 'Chức vụ', name: 'office' },
  { value: 'Quê quán', name: 'homeTown' }
]

const data = [
  {
    name: 'Full name',
    gender: 'nam',
    homeTown: 'Thái Bình',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  }
]

const dataGender = [
  { name: 'Nam', value: '1' },
  { name: 'Nữ', value: '2' },
  { name: 'Khác', value: '0' }
]

const dataProvince = [
  { name: 'Bà Rịa Vũng Tàu', value: '1' },
  { name: 'Admin', value: '2' },
  { name: 'Giáo viên', value: '3' },
  { name: 'Phụ huynh, học sinh', value: '4' }
]

function TaoMoiCanBoPage() {
  const { setLogin } = useContext(ConfigContext)
  const [isModal, setIsModal] = useState(false)
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

  const handleSubmit = (values) => {
    const onSetToken = (data) => {
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      setLogin(jwtDecode(JSON.stringify(data?.access_token)))
      navigate(ROUTE_PATH_HOME)
    }
    handleLogin(values, onSetToken)
  }
  return (
    <section className='h-full'>
      <Table
        configTbl={configTbl}
        data={data}
        btnAdd={true}
        onClickAdd={() => {
          setIsModal(true)
        }}
      />
      <Modal
        isOpen={isModal}
        onSubmit={form.handleSubmit(handleSubmit)}
        title={'Đăng ký tài khoản cán bộ'}
        closeModal={() => setIsModal(false)}
      >
        <div className='w-[100%] m-auto'>
          <div className='relative mb-4 flex justify-between'>
            <InputCustom label={'Tên đăng nhập'} idInput={'idUser'} name='username' width='48%' form={form} required />
            <InputCustom label={'Email'} idInput={'idEmail'} name='email' width='48%' form={form} required />
          </div>

          <div className='relative mb-4 flex justify-between'>
            <InputCustom
              label={'Mật khẩu'}
              idInput={'idPassword'}
              type='password'
              name='password'
              width='48%'
              form={form}
              required
            />
            <InputCustom
              label={'Nhập lại mật khẩu'}
              idInput={'reIdPassword'}
              type='password'
              name='rePassword'
              width='48%'
              form={form}
              required
            />
          </div>
          <div className='relative mb-4 flex justify-between'>
            <InputCustom label={'Số điện thoại'} idInput={'idSdt'} name='sdt' width='32%' form={form} required />
            <InputCustom label={'Năm sinh'} idInput={'idDate'} name='date' width='32%' form={form} required />
            <SelectField label={'Giới tính'} name='gender' width='32%' dataSource={dataGender} form={form} required />
          </div>
          <div className='relative mb-4 flex justify-between'>
            <SelectField
              label={'Chọn tỉnh/thành phố'}
              name='provinceId'
              width='48%'
              dataSource={dataProvince}
              form={form}
              required
            />
            <SelectField
              label={'Chọn quận/huyện'}
              name='districtId'
              width='48%'
              dataSource={dataProvince}
              form={form}
              required
            />
          </div>
          <div className='relative mb-4 flex justify-between'>
            <SelectField
              label={'Chọn xã/phường'}
              name='provinceId'
              width='48%'
              dataSource={dataProvince}
              form={form}
              required
            />
            <InputCustom label={'Địa chỉ chi tiết'} idInput={'idSdt'} name='address' width='48%' form={form} required />
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default TaoMoiCanBoPage
