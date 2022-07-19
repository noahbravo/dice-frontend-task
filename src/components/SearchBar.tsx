import React, { useState, useEffect, useRef } from 'react'
import tw, { styled, theme } from 'twin.macro'
import { useDebounce } from '../hooks'
import { SearchIcon } from './ui/svg'

const StyledInput = styled.input`
  ${tw`w-full py-3 pr-2 pl-12 rounded-3xl border-0 text-font-base`};
  outline-color: ${theme<string>('colors.accent-color')};
  &:focus {
    outline-style: solid;
  }
`

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
    <div tw="fixed flex justify-center w-full px-5 pt-1 bg-bg-color left-0 z-10">
      <form tw="w-full relative pb-10 bg-bg-color max-w-screen-2xl">
        <div tw="absolute top-2.5 left-4">
          <SearchIcon />
        </div>
        <StyledInput type="text" value={value} onChange={onSearch} placeholder="Find an event" />
      </form>
    </div>
  )
}

export { SearchBar }
