import React, { useState } from 'react'
import 'twin.macro'
import { Layout, SearchBar, EventList, Loader } from './components'
import { RequestParams, RequestParamKeys } from './api'
import type { ApiData, Event as EventType, PageLinks } from './@types/events'
import { useGetEvents } from './hooks'

const App = () => {
  const REQUEST_LITMIT = '12'
  const [searchVenue, setSearchVenue] = useState('')
  const [eventNodes, setEventNodes] = useState<EventType[]>([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [nextPage, setNextPage] = useState<RequestParams[RequestParamKeys.Page]>(null)

  const resetNextPage = () => {
    setNextPage(null)
    setHasNextPage(false)
  }

  const resetEvents = () => {
    setEventNodes([])
    resetNextPage()
  }

  const getRequestVariables = (
    venue: RequestParams[RequestParamKeys.Venues],
    next: RequestParams[RequestParamKeys.Page]
  ) =>
    ({
      [RequestParamKeys.Limit]: REQUEST_LITMIT,
      [RequestParamKeys.Venues]: venue,
      [RequestParamKeys.Page]: next
    } as RequestParams)

  const updateEventNodes = (fetchedEvents: EventType[]) => {
    if (fetchedEvents.length) {
      setEventNodes((currentEvents) => [...currentEvents, ...fetchedEvents])
    }
  }

  const updateNextPage = (next: PageLinks['next']) => {
    if (next) {
      setHasNextPage(true)
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
    setSearchVenue(venue)

    if (venue) {
      const requestVariables = getRequestVariables(venue, nextPage)
      getEvents({ variables: requestVariables })
      return
    }

    if (eventNodes.length) resetEvents()
  }

  const handleLoadMore = () => {
    const requestVariables = getRequestVariables(searchVenue, nextPage)
    getEvents({ variables: requestVariables })
  }

  return (
    <Layout>
      <SearchBar handleSearch={handleSearch} />
      <div tw="w-full">
        <div tw="m-auto max-w-screen-2xl">
          {error && <p>Error: {error}</p>}
          <EventList
            eventNodes={eventNodes}
            hasNextPage={hasNextPage}
            searchVenue={searchVenue}
            loading={loading}
            handleLoadMore={handleLoadMore}
          />
          {loading && <Loader />}
        </div>
      </div>
    </Layout>
  )
}

export default App
