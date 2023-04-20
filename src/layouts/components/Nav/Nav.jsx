import { Fragment } from 'react'
import { MENU_NAV } from '../Header/contants'
import './nav.scss'

function Nav() {
  return (
    <nav
      className='relative flex w-full flex-nowrap items-center justify-between text-neutral-500 lg:flex-wrap lg:justify-start'
      data-te-navbar-ref
      id='nav__header'
    >
      <div className='flex w-full flex-wrap items-center justify-between px-6 h-full'>
        <div
          className='!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto h-full'
          id='navbarSupportedContent3'
          data-te-collapse-item
        >
          <ul className='list-style-none mr-auto flex flex-col pl-0 lg:flex-row h-full' data-te-navbar-nav-ref>
            {MENU_NAV?.map((route, index) => {
              return (
                <Fragment key={index}>
                  {!route?.childrens ? (
                    // Menu đơn
                    <li
                      className='lg:px-4 relative hover:cursor-pointer hover:text-white faHome'
                      data-te-nav-item-ref
                      key={index}
                    >
                      <a
                        className='active lg:px-2 text-[#000] dark:[&.active]:text-neutral-400 hover:text-white leading-[2.5]'
                        aria-current='page'
                        to={route?.to}
                        data-te-nav-link-ref
                      >
                        {route?.name || ''}
                      </a>
                    </li>
                  ) : (
                    // Menu đa cấp
                    <li className='lg:px-2 relative hover:cursor-pointer' data-te-nav-item-ref key={index}>
                      <div className='group inline-block h-full w-full'>
                        <div className='active lg:px-2 text-[#000] hover:text-white leading-[2.5] rounded-sm flex items-center'>
                          <span className='pr-1 flex-1'>{route.name}</span>
                          <span>
                            <svg
                              className='fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-0 ease-in-out'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                            >
                              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                            </svg>
                          </span>
                        </div>
                        <ul className='bg-white border border-gray-200 rounded-lg top-full text-black/90 transform scale-0 group-hover:scale-100 absolute transition duration-0 ease-in-out origin-top min-w-32 z-10'>
                          {route.childrens?.map((children, index) => {
                            return (
                              <li className='rounded-sm px-3 py-2 hover:bg-blue-300' key={index}>
                                <button className='w-full text-left flex items-center outline-none focus:outline-none'>
                                  <span className='pr-1 flex-1'>{children?.group}</span>
                                  <span className='mr-auto'>
                                    <svg
                                      className='fill-current h-4 w-4 transition duration-0 ease-in-out'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                    >
                                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                  </span>
                                </button>
                                <ul
                                  className='bg-blue-50 border rounded-sm absolute right-0 transition duration-0 ease-in-out origin-top-left min-w-32'
                                  style={{ top: index * 40 }}
                                >
                                  {children?.items &&
                                    children?.items?.map((item, index) => (
                                      <li className='px-3 py-1 hover:bg-blue-300' key={index}>
                                        <a data-te-sidenav-link-ref to={item?.to} key={index}>
                                          {item?.name}
                                        </a>
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )}
                </Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
