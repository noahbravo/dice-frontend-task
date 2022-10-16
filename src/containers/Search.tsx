import React from 'react'
import { useSearch, useGetEvents } from '../utils/hooks'
import { Search as SearchScreen } from '../ui/screens'

const Search = () => {
  const { events, venue, loading, error, handleSearch, handleLoadMore } = useGetEvents()
  const { searchValue, onSearch } = useSearch(handleSearch)

  return (
    <SearchScreen
      search={searchValue}
      error={error?.message}
      venue={venue}
      onSearch={onSearch}
      onLoadMore={handleLoadMore}
      loading={loading}
      events={events}
    />
  )
}

export { Search }
