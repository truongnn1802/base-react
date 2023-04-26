import Accordion from 'src/components/Atoms/Accordion'
import { MENU_NAV } from '../Header/contants'
function SideNav({ dataNav }) {
  console.log(dataNav)
  return (
    <nav
      className="h-full 
          -translate-x-full 
          overflow-hidden 
          bg-gray-50 
          shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
          data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
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
          {MENU_NAV.map((menu, index) => {
            return (
              <>
                {menu?.childrens ? (
                  <Accordion
                    title={menu?.name}
                    classNameTitle='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[5px] text-[1.4rem] text-gray-700 outline-none transition duration-300 ease-linear dark:focus:bg-white/10 dark:active:bg-white/10 font-medium'
                  >
                    {menu.childrens?.map((child) => (
                      <div key={new Date().getTime()}>
                        <span className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[10px] text-[1.4rem] text-gray-700 outline-none transition duration-300 ease-linear font-semibold'>
                          {child?.group}
                        </span>
                        <ul>
                          {child?.items?.map((sub) => (
                            <li
                              key={new Date().getTime()}
                              className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[15px] text-[1.4rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-blue-600 hover:outline-none focus:bg-blue-400/10 focus:text-blue-600 focus:outline-none active:bg-blue-400/10 active:text-blue-600 active:outline-none data-[te-sidenav-state-active]:text-blue-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10'
                            >
                              {sub.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Accordion>
                ) : (
                  <li
                    key={index}
                    className='group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-[5px] text-[1.4rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-blue-600 hover:outline-none focus:bg-blue-400/10 focus:text-blue-600 focus:outline-none active:bg-blue-400/10 active:text-blue-600 active:outline-none data-[te-sidenav-state-active]:text-blue-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10'
                  >
                    {menu?.name}
                  </li>
                )}
                {index !== MENU_NAV.length - 1 && <hr className='border-gray-300/0.6' />}
              </>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default SideNav
