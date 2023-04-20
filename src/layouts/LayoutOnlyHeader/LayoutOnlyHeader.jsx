import Header from '../components/Header'
import Nav from '../components/Nav/Nav'

function LayoutOnlyHeader({ children }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      {children}
    </>
  )
}

export default LayoutOnlyHeader
