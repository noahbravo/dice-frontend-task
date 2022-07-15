import React, { useEffect, useState } from 'react'
import 'twin.macro'
import { Global } from '@emotion/react'
import { RequestParams, RequestParamKeys } from './api'
import type { Event, ApiData } from './@types/events'
import { useGetEvents } from './hooks'
import { globalStyles } from './styles'

const App = () => {
  const REQUEST_LITMIT = '12'
  const [searchVenue, setSearchVenue] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [nextPage, setNextPage] = useState<RequestParams['page[number]']>(null)
  const [eventNodes, setEventNodes] = useState<Event[]>([])

  const requestParams = {
    [RequestParamKeys.Venues]: searchVenue,
    [RequestParamKeys.Limit]: REQUEST_LITMIT,
    [RequestParamKeys.Page]: nextPage
  } as RequestParams

  const { data, loading, error } = useGetEvents(requestParams)

  const handleNextLink = (next: ApiData['links']['next']) => {
    if (next) {
      setHasNextPage(true)
      const urlParams = new URLSearchParams(next)
      setNextPage(urlParams.get(RequestParamKeys.Page))
    } else {
      setHasNextPage(false)
      setNextPage(null)
    }
  }

  useEffect(() => {
    if (data) {
      const { data: fetchedEvents, links } = data
      const { next } = links || {}
      setEventNodes((currentEvents) => [...currentEvents, ...fetchedEvents])
      handleNextLink(next)
    }
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        {error && <p>Error: {error}</p>}
        {eventNodes.length > 0 && (
          <ul>
            {eventNodes.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
        {loading && <p>Loading...</p>}
      </header>
      <Global styles={globalStyles} />
    </div>
  )
}

export default App
