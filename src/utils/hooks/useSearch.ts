import { useState, useCallback, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { insertUrlParam, removeUrlParam, getUrlParam } from '../helpers'

function useSearch(onDebounced: (debouncedValue: string) => void) {
  const [searchValue, setSearchValue] = useState('')

  const debounced = useDebouncedCallback((debouncedValue) => {
    onDebounced(debouncedValue)
  }, 500)

  const updateSearchState = useCallback(
    (value: string) => {
      setSearchValue(value)
      debounced(value)
    },
    [setSearchValue, debounced]
  )

  const onSearch = useCallback(
    (value: string) => {
      updateSearchState(value)

      // Update Url params
      if (value) insertUrlParam('venue', value)
      else removeUrlParam('venue')
    },
    [updateSearchState]
  )

  useEffect(
    function updateSearchWithUrlParams() {
      const venue = getUrlParam('venue')
      if (venue) updateSearchState(venue)
    },
    [updateSearchState]
  )

  return { searchValue, onSearch }
}

export { useSearch }
