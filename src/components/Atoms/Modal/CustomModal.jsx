import Modal from 'react-modal'
import './styles.scss'
const contentStyles = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: 'none'
}

const sizes = {
  small: {
    width: '300px',
    height: '200px'
  },
  medium: {
    width: '450px',
    height: '300px'
  },
  large: {
    width: '600px',
    height: '400px'
  },
  extraLarge: {
    width: '800px',
    height: '600px'
  }
}
Modal.setAppElement('#root')

function CustomModal({ children, isOpen, closeModal, size = 'small', styles = {}, customSize = {}, rest }) {
  const customStyles = {
    content: {
      ...contentStyles,
      ...sizes[size],
      ...styles,
      ...customSize
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <Modal isOpen={isOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} {...rest}>
      {children}
    </Modal>
  )
}
export default CustomModal
