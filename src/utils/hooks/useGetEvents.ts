import { useState, useReducer, useCallback, useRef } from 'react'
import type { Events as EventsType } from '../../types/events'
import { setEvents, updateEvents, resetEvents } from '../../actions/events'
import { useFetch } from './useFetch'
import { RequestParamKeys, type RequestParams, fetchEvents } from '../../api'
import { eventsReducer } from '../../reducers'
import { getUrlParam } from '../helpers'

const actions = {
  setEvents,
  updateEvents
}

const REQUEST_LITMIT = '12'

const getRequestParams = (
  venue: RequestParams[RequestParamKeys.Venues],
  next: RequestParams[RequestParamKeys.Page]
): RequestParams => ({
  [RequestParamKeys.Limit]: REQUEST_LITMIT,
  [RequestParamKeys.Venues]: venue,
  [RequestParamKeys.Page]: next
})

function useGetEvents() {
  const [data, dispatch] = useReducer(eventsReducer, null)
  const [requestParams, setRequestParams] = useState<RequestParams>(getRequestParams('', null))
  const actionRef = useRef<keyof typeof actions>('setEvents')

  const { fetchData, ...fetchState } = useFetch<EventsType, RequestParams>(fetchEvents, {
    onCompleted: (events: EventsType | undefined) => {
      if (events) {
        const dispatchAction = actions[actionRef.current]
        dispatch(dispatchAction(events))
        return
      }

      if (data) {
        dispatch(resetEvents())
      }
    }
  })

  const handleSearch = useCallback(
    async (searchVenue: string) => {
      const formattedVenue = searchVenue.trim()
      const venue = requestParams[RequestParamKeys.Venues]

      if (venue && !venue.localeCompare(formattedVenue, undefined, { sensitivity: 'base' })) return

      const variables = getRequestParams(formattedVenue, null)
      setRequestParams(variables)

      if (formattedVenue) {
        actionRef.current = 'setEvents'
        await fetchData({ variables })
      }
    },
    [requestParams, setRequestParams, fetchData]
  )

  const handleLoadMore = useCallback(async () => {
    actionRef.current = 'updateEvents'
    const venue = requestParams[RequestParamKeys.Venues]
    const { next } = data?.links || {}
    const urlParams = next && new URLSearchParams(next)
    const nextPage = urlParams ? getUrlParam(RequestParamKeys.Page, urlParams) : null

    const variables = getRequestParams(venue, nextPage)
    setRequestParams(variables)

    await fetchData({ variables })
  }, [requestParams, data, setRequestParams, fetchData])

  return {
    ...fetchState,
    events: data,
    venue: requestParams[RequestParamKeys.Venues],
    handleSearch,
    handleLoadMore
  }
}

export { useGetEvents }
