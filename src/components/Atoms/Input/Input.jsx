import { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

Input.propTypes = {
  label: PropTypes.string,
  idInput: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  inputProps: PropTypes.object,
  form: PropTypes.object,
  name: PropTypes.string,
  required: PropTypes.bool
}

Input.defaultProps = {
  width: 'auto',
  label: 'Nhập text',
  idInput: 'idInput',
  type: 'text',
  form: { formState: {} },
  required: false,
  inputProps: { classInput: '', argInput: {} }
}
function Input({ label, idInput, type, width, inputProps, name, form, required }) {
  const { classInput, argInput } = inputProps

  const [eye, setEye] = useState(true)
  const eyeRef = useRef()

  const {
    formState: { errors, touchedFields }
  } = form

  const handleTogglePassword = () => {
    const input = eyeRef?.current?.parentElement.querySelector('input')
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password'
    input.setAttribute('type', type)
    setEye((eye) => !eye)
  }

  const hasErr = errors && !!errors?.[name] && touchedFields[name]

  const classNameInput = `peer block min-h-[36px] w-full rounded border-0 bg-transparent px-[10px] py-[5px] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${
    classInput ? classInput : ''
  }`
  // set message input when required
  const handleInvalid = (event) => {
    event.target.setCustomValidity('Không được để trống trường này')
  }

  return (
    <div className='relative mb-3 inline-block' data-te-input-wrapper-init style={{ width: width, minWidth: width }}>
      <input
        type={type}
        className={classNameInput}
        id={idInput}
        {...form.register(name)}
        {...argInput}
        onInvalid={handleInvalid}
        required={required}
      />
      <div className='tooltip'>Không được để trống trường này!</div>
      {type == 'password' && (
        <span
          className='absolute top-[25%] right-[10px] text-[12px] cursor-pointer'
          onClick={handleTogglePassword}
          ref={eyeRef}
        >
          <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} />
        </span>
      )}
      <label
        htmlFor={idInput}
        className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-x-[- 5px] peer-focus:-translate-y-[50%] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-x-[- 5px] peer-data-[te-input-state-active]:-translate-y-[50%] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
      >
        {label}
        {required && <span className='ml-[4px] text-[#ff0000]'>*</span>}
      </label>
      {hasErr && (
        <p className='absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary'>
          {errors[name]?.message}
        </p>
      )}
    </div>
  )
}

export default memo(Input)
