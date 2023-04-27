import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import Nav from '../components/Nav/Nav'
import './defaultLayout.scss'
import SideNav from '../components/SideNav'
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
function DefaultLayout({ children, dataSideNav }) {
  useEffect(() => {
    const sidenavDom = document.getElementById('sidebar')
    const contentBodyDom = document.getElementById('content-body')
    contentBodyDom.style.width = `calc(100vw - ${sidenavDom?.offsetWidth}px)`
    contentBodyDom.style.marginLeft = `${sidenavDom?.offsetWidth}px`
  }, [])
  return (
    <div>
      <Header user='Khách'>
        <Nav />
      </Header>
      <div className='body relative'>
        <div id='sidebar'>
          <SideNav dataNav={dataSideNav} />
        </div>
        <div id='content-body'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
