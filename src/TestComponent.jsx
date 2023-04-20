import { useEffect } from 'react'
import { Select, initTE, Input } from 'tw-elements'
// import Card from './components/Atoms/Card'
// import InputCustom from 'src/components/Atoms/Input'
// import Table from 'src/components/Molecules/Table'
// import SelectField from 'src/components/Atoms/SelectField/SelectField'
// import Carousel from 'src/components/Molecules/Carousel/Carousel'
import DashboardPage from 'src/pages/DashboardPage'

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
      <DashboardPage />
    </div>
  )
}

export default TestComponent
