import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Table from 'src/components/Molecules/Table'
import InputCustom from 'src/components/Atoms/Input'
import SelectField from 'src/components/Atoms/SelectField'
import Button from 'src/components/Atoms/Button'
import DetailInfoStaff from 'src/pages/DetailInfoStaffPage'
import Modal from 'src/components/Molecules/ModalForm'

const configTbl = [
  { value: 'Tên cán bộ, giáo viên', name: 'name' },
  { value: 'Mã cán bộ, giáo viên', name: 'codeGV', action: 'true', align: 'center' },
  { value: 'Giới tính', name: 'gender' },
  { value: 'Số điện thoại', name: 'phoneNumber' },
  { value: 'Ngày sinh', name: 'dateOfBirth' },
  { value: 'Chức vụ', name: 'office' },
  { value: 'Quê quán', name: 'homeTown' }
]

const data = [
  {
    name: 'Full name',
    codeGV: 'PH01',
    gender: 'nam',
    homeTown: 'Thái Bình',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    codeGV: 'PH02',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    codeGV: 'PH03',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    codeGV: 'PH04',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  },
  {
    homeTown: 'Thái Bình',
    codeGV: 'PH05',
    gender: 'nam',
    name: 'Full name',
    phoneNumber: '0123654789',
    dateOfBirth: '18/02/2000',
    office: 'Giáo viên'
  }
]

const dataSource = [
  { name: 'Giáo viên', value: '1' },
  { name: 'Hiệu trưởng', value: '2' }
]
function ListTeacherPage() {
  const [isModal, setIsModal] = useState(false)
  const idStaff = useRef(null)

  const schema = yup.object({})
  const form = useForm({
    defaultValues: {
      timKiem: ''
    },
    resolver: yupResolver(schema)
  })
  return (
    <div>
      <form onSubmit={form.handleSubmit(() => {})} noValidate>
        <div className='flex gap-8 mt-[20px] sm:px-6 lg:px-8 '>
          <InputCustom label={'Tìm kiếm'} idInput={'timKiem'} name='timKiem' form={form} />
          <SelectField label={'Chức vụ'} name='officeId' width='200px' dataSource={dataSource} form={form} />
          <Button type='submit' text='Tìm kiếm' />
        </div>
      </form>
      <Table
        configTbl={configTbl}
        data={data}
        handleClickCell={(data) => {
          idStaff.current = data?.idPhong
          setIsModal(true)
        }}
      />
      <Modal
        isOpen={isModal}
        onSubmit={form.handleSubmit(() => {})}
        title={'Thông tin chi tiết giáo viên'}
        closeModal={() => setIsModal(false)}
        textSubmit={'Cập nhật'}
      >
        <DetailInfoStaff />
      </Modal>
    </div>
  )
}

export default ListTeacherPage
