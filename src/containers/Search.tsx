import React from 'react'
import { useSearch, useGetEvents } from '../utils/hooks'
import { Search as SearchScreen } from '../ui/screens'

const Search = () => {
  const { events, venue, loading, handleSearch, handleLoadMore } = useGetEvents()
  const { searchValue, onSearch } = useSearch(handleSearch)

  return (
    <SearchScreen
      search={searchValue}
      venue={venue}
      onSearch={onSearch}
      onLoadMore={handleLoadMore}
      loading={loading}
      events={events}
    />
  )
}

export { Search }
