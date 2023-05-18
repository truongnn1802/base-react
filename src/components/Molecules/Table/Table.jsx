import { PropTypes } from 'prop-types'
import { memo, useLayoutEffect, useRef, useState } from 'react'
import Button from '../../Atoms/Button/Button'

Table.propTypes = {
  configTbl: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  coloumActions: PropTypes.array,
  page: PropTypes.number,
  totalPage: PropTypes.number,
  checked: PropTypes.bool,
  handleClickCell: PropTypes.func,
  onSetPage: PropTypes.func,
  handleMoreItem: PropTypes.func,
  onClickAdd: PropTypes.func
}

Table.defaultProps = {
  configTbl: [],
  data: [],
  checked: false
}

function Table({
  configTbl,
  data,
  coloumActions,
  handleClickCell,
  totalPage = 1,
  page = 1,
  checked,
  onSetPage,
  handleMoreItem,
  onClickAdd
}) {
  const [listChecked, setListChecked] = useState()
  const [dataSource, setDataSource] = useState()
  const editings = useRef({})
  useLayoutEffect(() => {
    setDataSource(data)
    setListChecked(() => {
      if (checked) {
        return Array(data?.length).fill(false)
      } else {
        return null
      }
    })
  }, [data])

  //   useEffect(() => {
  //     const arrNode = document.querySelectorAll('tr td > p')
  //     // const lastValue = arrNode[arrNode.length - 1]?.innerText
  //     for (const node of arrNode) {
  //       const currentIndex = Number(node?.innerText)
  //       node?.addEventListener('focusout', (event) => {
  //         const newIndex = Number(event.target?.innerText)
  //         if (isNaN(newIndex) || newIndex === 0) {
  //           event.target.innerText = currentIndex
  //         } else {
  //           editings.current[node.dataset.index] = {
  //             [node.dataset.key]: Number(event.target?.innerText)
  //           }
  //           // Thay đổi vị trí khi đổi thứ tự
  //           // const newData = [...dataSource]
  //           // const currentValue = newData[currentIndex - 1]
  //           // newData?.splice(currentIndex - 1, 1)
  //           // newData?.splice(newIndex - 1, 0, currentValue)
  //           // setDataSource(newData)
  //         }
  //       })
  //     }
  //   }, [dataSource])

  const handleChecked = (index) => {
    const newArr = listChecked
    newArr[index] = !newArr[index]
    setListChecked([...newArr])
  }

  const setAllChecked = (e) => {
    const newList = listChecked?.map(() => e?.target?.checked)
    setListChecked([...newList])
  }
  const checkedAll = listChecked?.every((i) => i === true)
  const keys = configTbl?.map((item) => item?.name)
  const aligns = configTbl?.map((item) => {
    if (item?.align === 'center') {
      return 'center'
    } else if (item?.align === 'right') {
      return 'right'
    } else {
      return 'left'
    }
  })

  const renderTable = () => {
    return dataSource && dataSource?.length > 0
      ? dataSource?.map((item, index) => {
          return (
            <tr
              className={
                'border-b border-l transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600'
              }
              key={JSON.stringify(item)}
            >
              {checked > 0 && (
                <td width='40px' className='text-center'>
                  <input type='checkbox' onChange={() => handleChecked(index, item)} checked={listChecked?.[index]} />
                </td>
              )}
              <td width='40px' className='text-center border-r'>
                {index + 1}
              </td>
              {keys?.length > 0 &&
                keys.map((key, indexKey) => {
                  return (
                    <td
                      className={'whitespace-nowrap px-2 py-4 font-medium border-r text-' + aligns[indexKey]}
                      key={indexKey}
                    >
                      {/* click vào cell để xem thông tin */}
                      {configTbl?.[indexKey]?.action ? (
                        <span
                          className={`text-purple-900 cursor-pointer`}
                          style={{ paddingLeft: `${item?.depth * 15}px` }}
                          onClick={() => handleClickCell(item)}
                        >
                          {item?.[key]}
                        </span>
                      ) : (
                        <>
                          {configTbl[indexKey].editing ? (
                            <p
                              className='text-center focus:outline-0'
                              contentEditable
                              suppressContentEditableWarning={true}
                              data-index={index}
                              data-key={key}
                            >
                              {item?.[key]}
                            </p>
                          ) : (
                            <>{item?.[key]}</>
                          )}
                        </>
                      )}
                    </td>
                  )
                })}
              {/* cột action */}
              {coloumActions?.length > 0 && (
                <td width='100px' style={{ textAlign: 'center' }}>
                  {coloumActions?.map((action, index) => {
                    return (
                      <span className='cursor-pointer' key={index} onClick={() => action?.onClick(item)}>
                        {action?.icon}
                      </span>
                    )
                  })}
                </td>
              )}
            </tr>
          )
        })
      : []
  }

  return (
    <div className='flex flex-col flex-1 mt-5'>
      <div className='flex justify-end mx-[20px] my-[10px]'>
        <Button text='Thêm mới' onClick={onClickAdd} />
      </div>
      {checked && (
        <select
          className='d-block h-[30px] box-content leading-[3rem] max-w-[200px] text-center py-2 px-2 my-[10px] rounded-lg border border-[#00000080] focus:outline-0 cursor-pointer'
          onChange={(e) => {
            const data = dataSource.reduce((result, currentValue, index) => {
              if (!listChecked[index]) return result
              const editItem = editings.current[index + '']
              if (editItem) {
                return [...result, { ...currentValue, ...editItem }]
              } else {
                return [...result, currentValue]
              }
            }, [])
            const reset = () => {
              editings.current = {}
            }
            handleMoreItem({ type: e.target.value, data: data }, reset)
            e.target.value = 'default'
          }}
          disabled={!listChecked?.some((i) => i === true)}
        >
          <option value='default' selected>
            --- Chọn thao tác ---
          </option>
          <option value='deleteItems'>Xóa nhiều</option>
          <option value='updateItems'>Cập nhật nhiều</option>
        </select>
      )}
      {/* Table */}
      <div className='overflow-x-auto'>
        <div className='overflow-y-hidden inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <table className='min-w-full text-left text-[1rem] font-light'>
            <thead className='border font-medium dark:border-neutral-500'>
              <tr className='text-center border-r'>
                {checked && (
                  <th width='40px'>
                    <input type='checkbox' checked={checkedAll} onChange={setAllChecked} />
                  </th>
                )}
                <th width='60px' className='border-r py-[5px]'>
                  STT
                </th>
                {configTbl &&
                  configTbl?.map((item, index) => {
                    return (
                      <th key={index} width={item?.width || 'auto'} className='border-r'>
                        {item.value}
                      </th>
                    )
                  })}
                {coloumActions?.length > 0 && <th width='120px'>Xóa</th>}
              </tr>
            </thead>
            <tbody className='collapse'>{renderTable()}</tbody>
          </table>
          <div className='max-h-[500px]' style={{ overflow: 'overlay', boxShadow: '0px 10px 10px -15px #111' }}>
            <table className='min-w-full text-left text-[1rem] font-light'>
              <thead className='collapse border-b font-medium dark:border-neutral-500'>
                <tr className='text-center'>
                  {checked && (
                    <th width='40px'>
                      <input type='checkbox' checked={checkedAll} onChange={setAllChecked} />
                    </th>
                  )}
                  <th width='60px'>STT</th>
                  {configTbl &&
                    configTbl?.map((item, index) => {
                      return (
                        <th key={index} width={item?.width || 'auto'}>
                          {item.value}
                        </th>
                      )
                    })}
                  {coloumActions?.length > 0 && <th width='120px'>Thao tác</th>}
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className='inline-flex justify-end px-[20px]'>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex'>
            <li>
              {page === 1 ? (
                <a
                  className='cursor-not-allowed text-[14px] h-[36px] w-[30px] text-center relative block rounded bg-transparent text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
                  href='#'
                  aria-label='Previous'
                >
                  <span aria-hidden='true' className='leading-[36px]'>
                    &laquo;
                  </span>
                </a>
              ) : (
                <a
                  className='relative block rounded text-[14px] bg-transparent h-[36px] w-[30px] text-center  text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
                  href='#'
                  aria-label='Previous'
                >
                  <span aria-hidden='true' className='leading-[36px]'>
                    &laquo;
                  </span>
                </a>
              )}
            </li>
            {Array(totalPage)
              .fill(0)
              .map((_, index) => {
                const pageNumber = index + 1
                // const isActive = page === pageNumber
                return (
                  <li key={pageNumber} className='h-[36px] w-[30px] text-center'>
                    <a
                      className={`relative text-[14px] cursor-pointer block leading-[36px] rounded-full font-medium text-secondary-800 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
                      // to={`/tinh-thanh-pho?page=${pageNumber}`}
                      onClick={() => {
                        onSetPage && onSetPage({ page: pageNumber })
                      }}
                    >
                      {pageNumber}
                    </a>
                  </li>
                )
              })}
            <li>
              {page === totalPage ? (
                <a
                  className='cursor-not-allowed relative block rounded bg-transparent text-[14px] h-[36px] w-[30px] text-center text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
                  href='#'
                  aria-label='Next'
                >
                  <span aria-hidden='true' className='leading-[36px]'>
                    &raquo;
                  </span>
                </a>
              ) : (
                <a
                  className='relative block rounded bg-transparent text-[14px] h-[36px] w-[30px] text-center text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
                  href='#'
                  aria-label='Next'
                >
                  <span aria-hidden='true' className='leading-[30px]'>
                    &raquo;
                  </span>
                </a>
              )}
            </li>
          </ul>
          {/* select size page */}
          <select
            className='d-block w-50 mx-auto px-2 ml-[20px] text-[14px] h-[36px] w-[80px] py-2 rounded-lg border border-[#00000080] focus:outline-0 cursor-pointer'
            onChange={(e) => {
              onSetPage && onSetPage({ per_page: e.target.value })
            }}
          >
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </nav>
      </div>
    </div>
  )
}

export default memo(Table)
