import React, { useState } from 'react'
import 'twin.macro'
import { Layout, SearchBar, EventList, Loader, HelperText } from './components'
import { RequestParamKeys } from './api'
import type { ApiData, Event as EventType, PageLinks } from './@types/events'
import { useGetEvents } from './hooks'

const App = () => {
  const REQUEST_LITMIT = '12'
  const [searchVenue, setSearchVenue] = useState('')
  const [eventNodes, setEventNodes] = useState<EventType[]>([])
  const [nextPage, setNextPage] = useState<string | null>(null)
  const hasNextPage = Boolean(nextPage)

  const resetNextPage = () => {
    setNextPage(null)
  }

  const resetEvents = () => {
    setEventNodes([])
    resetNextPage()
  }

  const updateEventNodes = (fetchedEvents: EventType[]) => {
    if (fetchedEvents.length) {
      setEventNodes((currentEvents) => [...currentEvents, ...fetchedEvents])
    }
  }

  const updateNextPage = (next: PageLinks['next']) => {
    if (next) {
      const urlParams = new URLSearchParams(next)
      setNextPage(urlParams.get(RequestParamKeys.Page))
    } else {
      resetNextPage()
    }
  }

  const handleOnCompletedRequest = (data: ApiData | undefined) => {
    if (data?.data.length) {
      const { data: fetchedEvents, links } = data
      const { next } = links || {}
      updateEventNodes(fetchedEvents)
      updateNextPage(next)
      return
    }

    if (eventNodes.length) resetEvents()
  }

  const { getEvents, loading, error } = useGetEvents<ApiData>({
    onCompleted: handleOnCompletedRequest
  })

  const handleSearch = (venue: string) => {
    const formattedVenue = venue.trim()
    if (!searchVenue.localeCompare(formattedVenue, undefined, { sensitivity: 'base' })) return

    setSearchVenue(formattedVenue)

    if (formattedVenue) {
      getEvents({ variables: { limit: REQUEST_LITMIT, venue, nextPage: null } })
    }

    if (eventNodes.length) resetEvents()
  }

  const handleLoadMore = () => {
    getEvents({ variables: { limit: REQUEST_LITMIT, venue: searchVenue, nextPage } })
  }

  const hasEventNodes = eventNodes.length > 0
  const showVenueHasNoEventsText = !hasEventNodes && !loading && searchVenue

  return (
    <Layout>
      <SearchBar handleSearch={handleSearch} />
      <div tw="w-full">
        <div tw="max-w-screen-2xl m-auto pt-24">
          {error && (
            <span tw="text-font-xl font-bold text-red-600" data-testid="error">
              {error}
            </span>
          )}
          {showVenueHasNoEventsText && (
            <HelperText text={`Hm, couldn't find anything for "${searchVenue}"`} />
          )}
          {hasEventNodes && (
            <EventList
              eventNodes={eventNodes}
              showHelperText={!loading && Boolean(searchVenue)}
              showLoadMore={!loading && hasNextPage}
              handleLoadMore={handleLoadMore}
            />
          )}
          {loading && <Loader />}
        </div>
      </div>
    </Layout>
  )
}

export default App
