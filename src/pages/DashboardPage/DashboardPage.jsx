import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfigContext } from 'src/contexts/ConfigContext'
import Card from 'src/components/Atoms/Card'
import { LISTCATEGORY } from './constants'
import { ROLE_SUPER_ADMIN } from 'src/routes/constant'

function DashboardPage() {
  const { account } = useContext(ConfigContext)

  const role = account?.roles[0].authority
  const navigate = useNavigate()
  // Dựa vào role để render ra giao diện
  return (
    <>
      {role === ROLE_SUPER_ADMIN && <p>abce</p>}
      {role !== ROLE_SUPER_ADMIN && (
        <div className='w-[1200px] m-auto '>
          <h2>Chọn chức năng</h2>
          <div className='flex flex-wrap mt-[30px]'>
            {LISTCATEGORY.map((item, index) => (
              <Card
                className='text-center rounded-[20px] basis-[30%] w-[30%] m-[5px]'
                key={index + item?.name}
                handleClick={() => navigate(item?.to)}
              >
                <img src={item?.srcImg} alt={item?.src} className='inline-block w-[150px] mt-[30px] mb-[20px]' />
                <p className='mb-[20px]'>{item?.name}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardPage
