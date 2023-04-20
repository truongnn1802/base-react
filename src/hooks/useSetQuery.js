import { useState } from 'react'

export const useSetQuery = (initialState) => {
  const [query, setQuery] = useState(initialState)

  const handleSetQuery = (obj) => {
    const keys = Object.keys(obj)
    // Kiểm tra nếu query trùng thì không set lại
    if (keys.length > 0 && keys.every((item) => query[item] === obj[item])) return
    setQuery((query) => ({ ...query, ...obj }))
  }
  return [query, handleSetQuery]
}
