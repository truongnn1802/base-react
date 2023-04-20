import React, { useState } from 'react'
import useClickOutSide from 'src/hooks/useClickOutSide'
import ReactDOM from 'react-dom'

const Dropdown = ({ children, title, positionModal }) => {
  const { show, setShow, nodeRef } = useClickOutSide()
  const [coords, setCoords] = useState({})
  const handleClick = () => {
    setCoords(nodeRef.current.getBoundingClientRect())
    setShow(!show)
  }
  return (
    <div className='relative w-full max-w-[250px] h-full' ref={nodeRef}>
      <div className='w-full cursor-pointer text-black/90 flex items-center h-full' onClick={handleClick}>
        {title}
        <span className='ml-2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </div>
      {show && (
        <DropdownList coords={coords} position={positionModal}>
          {children}
        </DropdownList>
      )}
    </div>
  )
}

function DropdownList({ coords, children, position }) {
  if (typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <div
      className='absolute left-0 w-auto bg-white border border-gray-200 rounded-lg top-full text-black/90'
      style={{
        left: coords.left + coords.width,
        top: coords.top + coords.height + window.scrollY,
        transform: position === 'left' ? 'translate(-100%,15px)' : ''
      }}
    >
      {children}
    </div>,
    document.querySelector('body')
  )
}

export default Dropdown
