import InputCustom from 'src/components/Atoms/Input'
import SelectField from 'src/components/Atoms/SelectField/SelectField'
import FileInput from 'src/components/Atoms/FileInput'
import Textarea from 'src/components/Atoms/Textarea'

const classList = [
  { name: 'Lớp 1', value: 'class1' },
  { name: 'Lớp 2', value: 'class2' },
  { name: 'Lớp 3', value: 'class3' },
  { name: 'Lớp 4', value: 'class4' },
  { name: 'Lớp 5', value: 'class5' }
]
function AddNewLesson({ form }) {
  return (
    <>
      <div className='flex justify-between'>
        <div className='relative mb-4 basis-6/12 px-[5px]'>
          <InputCustom label={'Tên giáo án'} idInput={'idLesson'} name='nameLesson' width='100%' form={form} required />
        </div>
        <div className='relative mb-4 basis-3/12 px-[5px]'>
          <SelectField dataSource={classList} label='Lớp' name='class' width='100%' form={form} />
        </div>
        <div className='relative mb-4 basis-3/12 px-[5px]'>
          <SelectField dataSource={classList} label='Trạng thái' width='100%' name='status' form={form} />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='relative mb-4 basis-6/12 px-[5px]'>
          <FileInput label='Tải giáo án' width='100%' name='lesson' accept='application/msword' form={form} />
        </div>
        <div className='relative mb-4 basis-6/12 px-[5px]'>
          <InputCustom label={'Môn học'} idInput={'idSubject'} name='subject' width='100%' form={form} />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='relative mb-4 basis-6/12 px-[5px]'>
          <InputCustom label={'Năm học'} idInput={'idLesson'} name='year' width='100%' form={form} required />
        </div>
        <div className='relative mb-4 basis-6/12 px-[5px]'>
          <SelectField dataSource={classList} label='Chọn thư mục' name='class' width='100%' form={form} />
        </div>
      </div>
      <div className='relative px-[5px]'>
        <Textarea label='Mô tả' width='100%' form={form} name='des' />
      </div>
    </>
  )
}

export default AddNewLesson
