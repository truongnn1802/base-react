import { PropTypes } from 'prop-types'

const typeButton = {
  primary: ' bg-primary text-white',
  error: ' bg-red-500 text-white',
  warning: ' bg-orange-500 text-white'
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  classbutton: PropTypes.string,
  type: PropTypes.string,
  typeButton: PropTypes.string
}

Button.defaultProps = {
  text: 'button',
  classbutton: '',
  typeBtn: 'primary'
}

function Button({ text, onClick, classbutton, type, typeBtn }) {
  const classNameButton = `inline-block cursor-pointer w-[120px] rounded p-[5px] h-[36px]
    text-[14px] font-medium uppercase leading-normal
    transition duration-150 ease-in-out hover:bg-primary-600
    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
    focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
    dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
    dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
     ${classbutton}`
  return (
    <>
      {type === 'submit' ? (
        <input type={type} className={classNameButton + typeButton[typeBtn]} value={text} />
      ) : (
        <button type='button' onClick={onClick} className={classNameButton + typeButton[typeBtn]}>
          {text}
        </button>
      )}
    </>
  )
}

export default Button
