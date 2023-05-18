import { useEffect } from 'react'
import { Select, initTE, Input } from 'tw-elements'
// import Card from './components/Atoms/Card'
// import InputCustom from 'src/components/Atoms/Input'
// import Table from 'src/components/Molecules/Table'
// import SelectField from 'src/components/Atoms/SelectField/SelectField'
// import Carousel from 'src/components/Molecules/Carousel/Carousel'
// import DashboardPage from 'src/pages/DashboardPage'
// import LoginPage from './pages/LoginPage'
// import DefaultLayout from 'src/layouts/DefaultLayout'
import jwt_decode from 'jwt-decode'
import { http } from 'src/utils/http'
const TestComponent = () => {
  useEffect(() => {
    initTE({ Select, Input })
  }, [])
  //  __________________________________Test Table_______________________________________
  //   const configTbl = [
  //     { value: 'Tên tỉnh', name: 'name', action: 'true', align: 'center' },
  //     { value: 'Loại', name: 'type', action: true }
  //   ]

  //   const data = [
  //     { name: 'Thái Bình', type: 'Tỉnh' },
  //     { name: 'Hà Nội', type: 'Thành phố' },
  //     { name: 'Hải Phòng', type: 'Thành Phố' },
  //     { name: 'Hải Dương', type: 'Tỉnh' },
  //     { name: 'Ninh Bình', type: 'Tỉnh' }
  //   ]

  const handleLogin = async () => {
    const res = await http.post('/api/v1/auth/signin', {
      username: 'superadmin',
      password: '123'
    })

    const jwt = jwt_decode(res?.data?.access_token)
    console.log(jwt)
  }

  return (
    <div className='mb-3 mt-[10px]'>
      {/* <SelectField dataSource={dataSource} selectProps={selectProps} /> */}
      {/* <InputCustom/> */}
      {/* <Table configTbl={configTbl} data={data} /> */}
      {/* <Carousel>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
        <Card>
          <div className='h-[200px]'></div>
        </Card>
      </Carousel> */}
      {/* <DashboardPage /> */}
      {/* <LoginPage /> */}
      {/* <DefaultLayout>abcd</DefaultLayout> */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default TestComponent
