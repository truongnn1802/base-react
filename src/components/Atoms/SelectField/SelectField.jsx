import { memo } from 'react'
import PropTypes from 'prop-types'

SelectField.propTypes = {
  dataSource: PropTypes.array.isRequired,
  selectProps: PropTypes.object,
  optionProps: PropTypes.object,
  width: PropTypes.string
}

SelectField.defaultProps = {
  width: '200px',
  selectProps: {},
  optionProps: {}
}

function SelectField({ dataSource, selectProps, optionProps, width }) {
  return (
    <div style={{ width: width, minWidth: width }}>
      <select data-te-select-init {...selectProps}>
        {dataSource?.length &&
          dataSource?.map((data) => {
            return (
              <option value={data?.value} key={data?.value} {...optionProps}>
                {data?.name}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default memo(SelectField)
