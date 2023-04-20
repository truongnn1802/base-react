import { useEffect } from 'react'
import { Dropdown, initTE, Input, Ripple, Select } from 'tw-elements'
import LayoutOnlyHeader from './layouts/LayoutOnlyHeader/LayoutOnlyHeader'
import Login from 'src/pages/Login'
// import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const App = () => {
  useEffect(() => {
    initTE({ Select, Input, Ripple, Dropdown })
  }, [])

  return (
    <>
      <LayoutOnlyHeader>
        <Login />
      </LayoutOnlyHeader>
    </>
  )
}

export default App
