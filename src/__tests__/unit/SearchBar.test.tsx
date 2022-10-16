import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SearchBar } from '../../ui/components/SearchBar'

const onSearch = jest.fn((value) => value)
const value = 'test'

test('should call handleSearch on search input change', async () => {
  render(<SearchBar value="" onSearch={onSearch} />)
  const searchInput = screen.getByPlaceholderText(/Find an event/i)
  fireEvent.change(searchInput, { target: { value } })
  await waitFor(() => expect(onSearch).lastCalledWith(expect.stringMatching(value)))
})
