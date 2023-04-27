import Button from '../../Atoms/Button/Button'
import Modal from '../../Atoms/Modal'
function ModalForm({
  children,
  isOpen,
  closeModal,
  size,
  styles,
  customSize,
  rest,
  onSubmit,
  textClose,
  textSubmit,
  title
}) {
  return (
    <Modal
      isOpen={isOpen}
      //   closeModal={closeModal} // click ngoài modal sẽ tắt modal
      //   shouldCloseOnOverlayClick={false}
      size={size ?? 'large'}
      styles={styles}
      customSize={customSize}
      {...rest}
    >
      <h2 className='text-[20px] text-center mb-[20px]'>{title}</h2>
      <form onSubmit={onSubmit} noValidate>
        {children}
        <div className='flex justify-center mt-[20px]'>
          <Button text={textClose ?? 'Đóng'} typeBtn={'error'} onClick={closeModal} />
          <div className='w-[10px]'></div>
          <Button type='submit' text={textSubmit ?? 'Thêm mới'} typeBtn={'primary'} onClick={closeModal} />
        </div>
      </form>
    </Modal>
  )
}

export default ModalForm
