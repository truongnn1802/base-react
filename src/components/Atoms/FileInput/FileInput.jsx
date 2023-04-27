import { useEffect } from 'react'
import './fileInput.scss'

function FileInput({ label, form, name }) {
  useEffect(() => {
    let fileInput = document.getElementById('file-upload-input')
    let fileSelect = document.getElementById('file-select-button')
    if (fileSelect) {
      fileSelect.onclick = function () {
        fileInput.click()
      }
    }
    if (fileInput) {
      fileInput.onchange = function () {
        let filename = fileInput.files[0].name
        let selectName = document.getElementsByClassName('file-select-name')[0]
        selectName.innerText = filename
      }
    }
  }, [])

  return (
    <div className='file-upload'>
      <div id='file-upload-select'>
        <div id='file-select-button'>{label}</div>
        <div className='file-select-name'>No file chosen...</div>
        <input type='file' name={name} id='file-upload-input' {...form.register(name)} />
      </div>
    </div>
  )
}

export default FileInput
