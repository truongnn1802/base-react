import { ModalType } from 'src/constants'

function TeModal({ modalType, modalId, modalHeader, modalBody }) {
  //Modal thông báo
  let modalBodyByType = (
    <>
      {/* Modal body */}
      <div id='modalBody' className='relative flex-auto p-4' data-te-modal-body-ref>
        {modalBody}
      </div>
      {/* Modal buttons */}
      <div className='flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
        <button
          type='button'
          className='inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]'
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          Đóng
        </button>
      </div>
    </>
  )

  //Modal để nhập liệu: ví dụ thêm mới, cập nhật... có gọi đến API
  if (modalType === ModalType.nhaplieu) {
    modalBodyByType = modalBody
  }

  //Modal dùng để xác nhận: ví dụ xác nhận xóa, sửa nhiều, xóa nhiều... -> Chỉ gọi đến API khi ấn nút thao tác, không lấy dữ liệu từ form trong Modal
  if (modalType === ModalType.xacnhan) {
    modalBodyByType = (
      <>
        {/*Modal body*/}
        <div className='relative flex-auto p-4' data-te-modal-body-ref>
          {modalBody}
        </div>
        {/*Modal footer*/}
        <div className='flex flex-shrink-0 flex-wrap gap-2 items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
          <button
            type='button'
            className='ml-1 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
            data-te-ripple-init
            data-te-ripple-color='light'
            id={'btn-delete-' + modalId}
          >
            Xóa
          </button>
          <button
            type='button'
            className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
            data-te-modal-dismiss
            data-te-ripple-init
            data-te-ripple-color='light'
            id={'btn-close-' + modalId}
          >
            Đóng
          </button>
        </div>
      </>
    )
  }

  //JSX return
  return (
    <>
      <div>
        {/* Modal */}
        <div
          data-te-modal-init
          className='fixed top-40 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
          id={modalId}
          tabIndex={-1}
          aria-labelledby='customTeModalLabel'
          aria-hidden='true'
        >
          <div
            data-te-modal-dialog-ref
            className='pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]'
          >
            <div className='min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
              <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                {/* Modal header */}
                <h5
                  className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                  id='customTeModalLabel'
                >
                  {modalHeader}
                </h5>
                {/* Modal header */}
                <button
                  type='button'
                  className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                  data-te-modal-dismiss
                  aria-label='Close'
                  id={'close-' + modalType}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              {/* Body và Button của Modal */}
              {modalBodyByType}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeModal
