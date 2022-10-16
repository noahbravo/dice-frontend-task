import React from 'react'
import { Container } from '@chakra-ui/react'
import type { Events as EventsType } from '../../types/events'
import { Layout, SearchBar, Loader, HelperText, Events, LoadMore } from '../components'

interface SearchProps {
  search: string
  onSearch: (value: string) => void
  onLoadMore: () => void
  loading: boolean
  events: EventsType | null
  venue: string
}

const Search = ({ search, onSearch, onLoadMore, loading, events, venue }: SearchProps) => {
  const { data, links } = events || {}
  const withEvents = data && data?.length > 0
  const hasNextPage = links?.next

  return (
    <Layout>
      <SearchBar value={search} onSearch={onSearch} />
      <Container w="full" pt="24" pr={{ sm: '8', xl: 0 }} pl={{ sm: '8', xl: 0 }}>
        {loading && <Loader />}
        {venue && (
          <>
            {!loading && <HelperText withEvents={withEvents}>{venue}</HelperText>}
            {withEvents && <Events data={data} />}
            {hasNextPage && <LoadMore onLoadMore={onLoadMore} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export { Search }
