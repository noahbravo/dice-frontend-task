import React, { useState, useEffect, useRef } from 'react'
import 'twin.macro'
import { useDebounce } from '../hooks'
import { SearchIcon } from './ui/svg'

interface SearchBarProps {
  handleSearch: (venue: string) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce<string>(value)
  const debounceRef = useRef(false)

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: searchValue } = event.target
    setValue(searchValue)
    debounceRef.current = true
  }

  useEffect(() => {
    if (debounceRef.current) {
      debounceRef.current = false
      handleSearch(debouncedValue)
    }
  }, [debouncedValue, handleSearch])

  return (
    <div tw="flex justify-center w-full px-5 pt-1 bg-bg-color fixed left-0 z-10">
      <form tw="w-full relative pb-10 bg-bg-color max-w-screen-2xl">
        <div tw="absolute top-3 left-4">
          <SearchIcon />
        </div>
        <input
          tw="w-full rounded-3xl py-3 pr-2 pl-12 text-font-base"
          type="text"
          value={value}
          onChange={onSearch}
          placeholder="Find an event"
        />
      </form>
    </div>
  )
}

export { SearchBar }
