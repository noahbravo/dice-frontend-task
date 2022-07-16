import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { toRem } from '../styles'
import { SearchIcon } from './ui/svg'

interface SearchBarProps {
  handleSearch: (venue: string) => void
}

const StyledForm = styled.form`
  ${tw`w-full relative pb-10 bg-bg-color`}
  max-width: ${toRem(1144)};
`

const StyledInput = styled.input`
  ${tw`w-full rounded-3xl py-3 pr-2 pl-12 text-font-base`};
`

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [value, setValue] = useState('')

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: searchValue } = event.target
    setValue(searchValue)
    handleSearch(searchValue)
  }

  return (
    <div tw="flex justify-center w-full bg-bg-color fixed">
      <StyledForm>
        <div tw="absolute top-3 left-4">
          <SearchIcon />
        </div>
        <StyledInput type="text" value={value} onChange={onSearch} placeholder="Find an event" />
      </StyledForm>
    </div>
  )
}

export { SearchBar }
