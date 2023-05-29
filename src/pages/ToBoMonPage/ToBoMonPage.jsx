import { useContext, useRef, useState } from 'react'
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
import DetailInfoStaff from 'src/pages/DetailInfoStaffPage'

const configTbl = [
  { value: 'Tên thành viên', name: 'name' },
  { value: 'Mã thành viên', name: 'idPhong', action: 'true', align: 'center' },
  { value: 'Giới tính', name: 'gender' },
  { value: 'Chức vụ', name: 'position' }
]

const data = [
  {
    name: 'Thành viên 1',
    idPhong: 'PH1101',
    gender: 'Nam',
    position: 'Giáo viên'
  },
  {
    name: 'Thành viên 2',
    idPhong: 'PH2202',
    gender: 'Nam',
    position: 'Giáo viên'
  },
  {
    name: 'Thành viên 3',
    idPhong: 'PH3303',
    gender: 'Nam',
    position: 'Giáo viên'
  },
  {
    name: 'Thành viên 4',
    idPhong: 'PH4404',
    gender: 'Nam',
    position: 'Giáo viên'
  },
  {
    name: 'Thành viên 5',
    idPhong: 'PH5505',
    gender: 'Nam',
    position: 'Giáo viên'
  }
]

const dataChucVu = [
  { name: 'Bà Rịa Vũng Tàu', value: '1' },
  { name: 'Admin', value: '2' },
  { name: 'Giáo viên', value: '3' },
  { name: 'Phụ huynh, học sinh', value: '4' }
]

function ToBoMonPage() {
  const { setLogin } = useContext(ConfigContext)
  const [isModal, setIsModal] = useState(false)
  const idStaff = useRef(null)
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
          idStaff.current = null
          setIsModal(true)
        }}
        handleClickCell={(data) => {
          idStaff.current = data?.idPhong
          setIsModal(true)
        }}
      />
      <Modal
        isOpen={isModal}
        onSubmit={form.handleSubmit(handleSubmit)}
        title={!idStaff.current ? 'Thêm thành viên' : 'Thông tin chi tiết giáo viên'}
        closeModal={() => setIsModal(false)}
        textSubmit={!idStaff.current ? 'Thêm mới' : 'Cập nhật'}
      >
        {!idStaff.current ? (
          <div className='w-[100%] m-auto'>
            <div className='relative mb-4 flex justify-between'>
              <InputCustom
                label={'Tên thành viên'}
                idInput={'idThanhVien'}
                name='tenThanhVien'
                width='48%'
                form={form}
                required
              />
              <SelectField
                label={'Chức vụ'}
                name='positionTV'
                width='48%'
                dataSource={dataChucVu}
                form={form}
                required
              />
            </div>
          </div>
        ) : (
          <DetailInfoStaff />
        )}
      </Modal>
    </section>
  )
}

export default ToBoMonPage
