import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Table from 'src/components/Molecules/Table'
import { configTbl, data } from './constant'
import AddOrUpdateLesson from './AddOrUpdateLesson'
import ModalForm from 'src/components/Molecules/ModalForm/ModalForm'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
function LessonManagementPage() {
  const [isModal, setIsModal] = useState(false)

  const schema = yup.object({
    username: yup.string(),
    password: yup.string()
  })

  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  const onTriggerModal = () => {
    setIsModal(!isModal)
  }
  return (
    <>
      <Helmet>
        <title>Quản ý giáo án</title>
        <link rel='icon' type='image/png' href='favicon.ico' sizes='16x16' />
      </Helmet>
      <div>
        <h2>Quản lý giáo án</h2>
        <Table configTbl={configTbl} data={data} onClickAdd={onTriggerModal} />
        <ModalForm
          isOpen={isModal}
          closeModal={onTriggerModal}
          shouldCloseOnOverlayClick={true}
          onSubmit={form.handleSubmit(handleSubmit)}
          title={'Thêm mới giáo án'}
        >
          <AddOrUpdateLesson form={form} />
        </ModalForm>
      </div>
    </>
  )
}

export default LessonManagementPage
