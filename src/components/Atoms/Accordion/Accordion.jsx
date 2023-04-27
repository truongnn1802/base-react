import { PropTypes } from 'prop-types'
import { memo, useState } from 'react'
import './styles.scss'

Accordion.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  classNameTitle: PropTypes.string
}

Accordion.defaultProps = {
  children: <></>
}

function Accordion({ children, title, classNameTitle }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='accordion-wrapper'>
      <button className={`accordion-title ${isOpen ? 'open' : ''} ${classNameTitle}`} onClick={() => setOpen(!isOpen)}>
        {title}
        <span className='ml-2 w-2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </button>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className='accordion-content'>{children}</div>
      </div>
    </div>
  )
}

export default memo(Accordion)
