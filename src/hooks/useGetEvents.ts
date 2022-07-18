import { useState } from 'react'
import { fetchEvents, type RequestParams, RequestParamKeys } from '../api'

interface UseGetEventsProps<T> {
  onCompleted: (data: T | undefined) => void
}

interface GetEventsProps {
  variables: {
    limit: RequestParams['page[size]']
    venue: RequestParams['filter[venues]']
    nextPage: RequestParams['page[number]']
  }
}

type GetEventsFnc = ({ variables }: GetEventsProps) => void

const useGetEvents = <T>({ onCompleted }: UseGetEventsProps<T>) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getEvents: GetEventsFnc = async ({ variables: { limit, venue, nextPage } }) => {
    setLoading(true)

    let apiData
    const requestParams = {
      [RequestParamKeys.Limit]: limit,
      [RequestParamKeys.Venues]: venue,
      [RequestParamKeys.Page]: nextPage
    }

    try {
      setError('')
      const response = await fetchEvents(requestParams)

      if (response.ok) {
        apiData = await response.json()
        setData(apiData)
      } else {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
      }
    } catch (err) {
      setError('Oops, failed to load events!')
    }
    onCompleted(apiData)
    setLoading(false)
  }

  return { getEvents, data, loading, error }
}

export { useGetEvents }
