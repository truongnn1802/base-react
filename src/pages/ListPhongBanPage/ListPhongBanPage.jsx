import { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
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
  { value: 'Tên phòng', name: 'name' },
  { value: 'Mã phòng', name: 'idPhong', action: 'true', align: 'center' },
  { value: 'Tên trưởng phòng', name: 'tenTruongPhong' },
  { value: 'Tên phó phòng', name: 'tenPhoPhong' }
]

const data = [
  {
    name: 'Phòng 1',
    idPhong: 'PH1101',
    tenTruongPhong: 'Trưởng phòng 1',
    tenPhoPhong: 'Phó phòng 1'
  },
  {
    name: 'Phòng 2',
    idPhong: 'PH1102',
    tenTruongPhong: 'Trưởng phòng 2',
    tenPhoPhong: 'Phó phòng 2'
  },
  {
    name: 'Phòng 3',
    idPhong: 'PH1103',
    tenTruongPhong: 'Trưởng phòng 3',
    tenPhoPhong: 'Phó phòng 3'
  },
  {
    name: 'Phòng 4',
    idPhong: 'PH1104',
    tenTruongPhong: 'Trưởng phòng 4',
    tenPhoPhong: 'Phó phòng 4'
  }
]

const dataChucVu = [
  { name: 'Bà Rịa Vũng Tàu', value: '1' },
  { name: 'Admin', value: '2' },
  { name: 'Giáo viên', value: '3' },
  { name: 'Phụ huynh, học sinh', value: '4' }
]

function ListPhongBanPage() {
  const { setLogin } = useContext(ConfigContext)
  const [isModal, setIsModal] = useState(false)
  const schema = yup.object({
    username: yup.string().required('Vui lòng nhập tên đăng nhập!'),
    password: yup.string().required('Vui lòng nhập mật khẩu!')
  })

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
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
        handleClickCell={(data) => {
          navigate(data?.idPhong)
        }}
      />
      <Modal
        isOpen={isModal}
        onSubmit={form.handleSubmit(handleSubmit)}
        title={'Thêm phòng ban'}
        closeModal={() => setIsModal(false)}
      >
        <div className='w-[100%] m-auto'>
          <div className='relative mb-4'>
            <InputCustom label={'Tên phòng'} idInput={'idPhong'} name='tenPhong' width='100%' form={form} required />
          </div>
          <div className='relative mb-4 flex justify-between'>
            <InputCustom
              label={'Tên trưởng phòng'}
              idInput={'idHieuTruong'}
              name='tenTruongPhong'
              width='48%'
              form={form}
              required
            />
            <SelectField label={'Chức vụ'} name='positionTP' width='48%' dataSource={dataChucVu} form={form} required />
          </div>

          <div className='relative mb-4 flex justify-between'>
            <InputCustom
              label={'Tên phó phòng'}
              idInput={'idPhoPhong'}
              name='phoPhong'
              width='48%'
              form={form}
              required
            />
            <SelectField label={'Chức vụ'} name='positionTP' width='48%' dataSource={dataChucVu} form={form} required />
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default ListPhongBanPage
