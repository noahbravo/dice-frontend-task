import React from 'react'
import {
  Container,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Image
} from '@chakra-ui/react'
import searchIcon from '../../assets/img/search-icon.svg'

interface SearchBarProps {
  value: string
  onSearch: (value: string) => void
}

const SearchBar = ({ value, onSearch }: SearchBarProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <Container
      position="fixed"
      zIndex={10}
      left={0}
      w="full"
      pb="10"
      pl="8"
      pr="8"
      bg="black"
      centerContent
    >
      <FormControl position="relative" w="full" maxW="6xl" pb={10} p={0}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Image src={searchIcon} alt="Magnifying glass icon" />
          </InputLeftElement>
          <Input value={value} onChange={handleOnChange} placeholder="Find an event" />
        </InputGroup>
      </FormControl>
    </Container>
  )
}

export { SearchBar }
