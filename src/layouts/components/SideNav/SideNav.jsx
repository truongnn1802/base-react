import Accordion from 'src/components/Atoms/Accordion'
import { Link, useLocation } from 'react-router-dom'
import { MENU_SIDE_NAV } from '../Header/contants'
import { ConfigContext } from 'src/contexts/ConfigContext'
import { useContext } from 'react'

function SideNav() {
  const location = useLocation()
  const { account } = useContext(ConfigContext)

  const pathname = location.pathname.split('/')
  const nameNav = pathname[1] ? pathname[1] : account?.roles[0].authority

  return (
    <nav
      className="h-full 
          -translate-x-full 
          overflow-auto 
          bg-gray-50 
          shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
          data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden='false'
      data-te-sidenav-position='absolute'
      data-te-sidenav-accordion='true'
    >
      <div className='mt-6'>
        <div id='header-content' className='pl-4'>
          <img
            src='https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
            alt='Avatar'
            className='mb-4 h-auto rounded-full align-middle'
            style={{ maxWidth: '50px' }}
          />
          <h4 className='mb-2 text-2xl font-medium leading-[1.2]'>Test User</h4>
          <p className='mb-4'>testuser@mail.com</p>
        </div>
        <hr className='border-gray-300' />
      </div>
      <div>
        <ul className='relative m-0 list-none px-[0.2rem]' data-te-sidenav-menu-ref>
          {MENU_SIDE_NAV[nameNav]?.map((menu, index) => {
            return (
              <div key={index}>
                {menu?.childrens ? (
                  <Accordion
                    title={menu?.name}
                    classNameTitle='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[5px] text-[1.4rem] text-[#000000] outline-none transition duration-300 ease-linear  font-medium'
                  >
                    <>
                      {menu.childrens?.map((child, index) => (
                        <div key={new Date().getTime() + '' + index}>
                          {child?.group && (
                            <span className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[10px] text-[1.4rem] text-[#000000] outline-none transition duration-300 ease-linear font-semibold'>
                              {child?.group}
                            </span>
                          )}
                          <ul>
                            {child?.items?.map((sub, i) => (
                              <li
                                key={new Date().getTime() + i + ''}
                                className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[15px] text-[1.4rem] text-[#000000] outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-blue-600 hover:outline-none focus:bg-blue-400/10 focus:text-blue-600 focus:outline-none active:bg-blue-400/10 active:text-blue-600 active:outline-none data-[te-sidenav-state-active]:text-blue-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none'
                              >
                                <Link to={sub.to}>{sub.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </>
                  </Accordion>
                ) : (
                  <li className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[5px] text-[1.4rem] text-[#000000] outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-blue-600 hover:outline-none focus:bg-blue-400/10 focus:text-blue-600 focus:outline-none active:bg-blue-400/10 active:text-blue-600 active:outline-none data-[te-sidenav-state-active]:text-blue-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none'>
                    {menu?.name}
                  </li>
                )}
                {index !== MENU_SIDE_NAV[nameNav].length - 1 && <hr className='border-gray-300/0.6' />}
              </div>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default SideNav
