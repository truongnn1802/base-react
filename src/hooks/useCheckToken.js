import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const useCheckToken = () => {
  const history = useNavigate()
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (!token) {
      // Chuyển hướng đến trang đăng nhập nếu không có token
      history('/quan-tri/dang-nhap')
    }
  }, [history])
  return null
}
