import Footer from '../components/Footer'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import Nav from '../components/Nav/Nav'
import './defaultLayout.scss'
import SideNav from '../components/SideNav'
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
function DefaultLayout({ children }) {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <div className='body relative'>
        <div id='sidebar'>
          <SideNav />
        </div>
        <div className='content-body'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
