import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { initTE, Input } from 'tw-elements'

Textarea.propTypes = {
  label: PropTypes.string,
  idInput: PropTypes.string.isRequired,
  width: PropTypes.string,
  inputProps: PropTypes.object,
  form: PropTypes.object,
  name: PropTypes.string,
  required: PropTypes.bool
}

Textarea.defaultProps = {
  width: 'auto',
  label: 'Nhập text',
  idInput: 'idInput',
  form: { formState: {} },
  required: false,
  inputProps: { classInput: '', argInput: {} }
}

function Textarea({ label, idInput, width, inputProps, name, form, required }) {
  const { classInput, argInput } = inputProps

  useEffect(() => {
    initTE({ Input })
  }, [])
  const {
    formState: { errors, touchedFields }
  } = form
  const hasErr = errors && !!errors?.[name] && touchedFields[name]

  const classNameInput = `peer block min-h-[36px] w-full rounded border-0 bg-transparent px-[10px] py-[5px] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${
    classInput ? classInput : ''
  }`
  return (
    <div className='relative mb-3' data-te-input-wrapper-init style={{ width: width, minWidth: width }}>
      <textarea
        className={classNameInput}
        id={idInput}
        rows={3}
        name={name}
        required={required}
        {...form?.register?.(name)}
        {...argInput}
      />
      <div className='tooltip'>Không được để trống trường này!</div>
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

export default Textarea
