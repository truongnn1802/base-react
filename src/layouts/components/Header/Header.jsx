import { useContext } from 'react'
import { ConfigContext } from 'src/contexts/ConfigContext'
import Dropdown from 'src/components/Atoms/Dropdown'
import { ROUTE_PATH_LOGIN } from 'src/routes/constant'
import './index.scss'
import { Link } from 'react-router-dom'
import { settings } from './contants'
function Header({ children }) {
  const { account } = useContext(ConfigContext)
  console.log(account)
  const config = account
    ? settings[account?.roles[0].authority]
    : [
        {
          name: 'Đăng nhập',
          to: ROUTE_PATH_LOGIN
        }
      ]
  const user = account ? account?.sub : 'Khách'
  return (
    <div className='h-[56px] w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] app__Header'>
      <div className='wrapper flex items-center h-full'>
        <div className='logo'>Logo</div>
        <div className='flex-1'>{children}</div>
        <div className='account flex items-center'>
          <span
            className='block h-[36px] w-[36px] rounded-full mr-[8px] text-center text-white'
            style={{ background: 'red' }}
          >
            N
          </span>
          <span className='text-white cursor-pointer'>
            <Dropdown title={user} positionModal='left'>
              <div className='min-w-[200px]'>
                {config?.map((item, index) => (
                  <Link
                    className='block cursor-pointer hover:bg-blue-400/10 hover:text-blue-600 hover:outline-none focus:bg-blue-400/10 focus:text-blue-600 focus:outline-none active:bg-blue-400/10 active:text-blue-600 active:outline-none data-[te-sidenav-state-active]:text-blue-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 leading-[36px] px-[10px]'
                    key={index}
                    to={item?.to}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Dropdown>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
