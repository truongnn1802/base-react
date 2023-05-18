import { memo, useEffect } from 'react'
import { initTE, Select } from 'tw-elements'
import PropTypes from 'prop-types'
import './select.scss'

SelectField.propTypes = {
  dataSource: PropTypes.array.isRequired,
  selectProps: PropTypes.object,
  optionProps: PropTypes.object,
  width: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object,
  name: PropTypes.string
}

SelectField.defaultProps = {
  width: '100px',
  selectProps: {},
  optionProps: {},
  form: { formState: {} }
}

function SelectField({ dataSource, selectProps, optionProps, width, label, form, name }) {
  useEffect(() => {
    initTE({ Select })
  }, [])

  return (
    <div style={{ width: width, minWidth: width, height: '36px' }}>
      <select data-te-select-init name={name} {...form.register(name)} {...selectProps}>
        {dataSource?.length &&
          dataSource?.map((data) => {
            return (
              <option value={data?.value} key={data?.value} {...optionProps} style={{ height: '36px', fontSize:'14px' }}>
                {data?.name}
              </option>
            )
          })}
      </select>
      {label && (
        <label className='px-[5px]' data-te-select-label-ref>
          {label}
        </label>
      )}
    </div>
  )
}

export default memo(SelectField)
