import PropTypes from 'prop-types'

TextField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  classContent: PropTypes.string,
  classTitle: PropTypes.string
}

TextField.defaultProps = {
  content: '',
  classTitle: 'w-[25%]',
  classContent: 'flex-1 font-bold'
}
function TextField({ title, content, classTitle, classContent }) {
  return (
    <div className='flex'>
      <h3 className={classTitle}>{title}: </h3>
      <h3 className={classContent}>{content}</h3>
    </div>
  )
}

export default TextField
