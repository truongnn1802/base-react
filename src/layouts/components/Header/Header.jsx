import Dropdown from 'src/components/Atoms/Dropdown'
import './index.scss'
function Header({ children }) {
  const config = [
    {
      name: 'Đăng nhập'
    }
  ]
  const user = 'Khách'
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
                  <p className='cursor-pointer hover:bg-[#ccc] leading-[36px] px-[10px]' key={index}>
                    {item.name}
                  </p>
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
