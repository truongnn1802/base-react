import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import './DetailInfoStaff.scss'
import TextField from 'src/components/Atoms/TextField'
import { useRef, useState } from 'react'
function DetailInfoStaff() {
  const [avatar, setAvatar] = useState(null)
  const idInputFile = useRef(null)
  const fileAvatar = useRef(null)
  const onClickIcon = () => {
    idInputFile.current.click()
  }
  const handleChangeAvatar = (e) => {
    const file = e.target.files?.[0]
    fileAvatar.current = file
    setAvatar(URL.createObjectURL(file))
  }
  return (
    <div className='m-auto'>
      <div className='avatar m-auto'>
        <img
          src={
            avatar
              ? avatar
              : 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/311780669_2613101708847370_8196643766972949885_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NrvR9vLx67oAX_sF0m0&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCZsKfNHn7odjaWPi27-qxnLSd9bCJEijB7mq16WDy9Ow&oe=6477B1F3'
          }
          alt='avatar'
        />
        <span className='icon-change-avatar' onClick={onClickIcon}>
          <FontAwesomeIcon icon={faCamera} />
        </span>
        <input
          type='file'
          name={'avatar'}
          ref={idInputFile}
          style={{ visibility: 'hidden' }}
          onChange={handleChangeAvatar}
        />
      </div>
      <div className='info-staff w-[80%] m-auto mt-[10px]'>
        <TextField title={'Mã giáo viên'} content={'PH2000'} classTitle={'w-[40%]'} />
        <TextField title={'Họ và tên'} content={'Lê Thị Hoàng Châu'} classTitle={'w-[40%]'} />
        <TextField title={'Chức vụ'} content={'Giáo viên'} classTitle={'w-[40%]'} />
        <TextField title={'Ngày sinh'} content={'26/06/2000'} classTitle={'w-[40%]'} />
        <TextField title={'Giới tính'} content={'Nữ'} classTitle={'w-[40%]'} />
        <TextField title={'Quê quán'} content={'Đà Nẵng, Việt Nam'} classTitle={'w-[40%]'} />
      </div>
    </div>
  )
}

export default DetailInfoStaff
