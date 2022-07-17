import { useState } from 'react'
import { fetchEvents, type RequestParams } from '../api'

interface UseGetEventsProps<T> {
  onCompleted: (data: T | undefined) => void
}

type GetEventsFnc = ({ variables }: { variables: RequestParams }) => void

const useGetEvents = <T>({ onCompleted }: UseGetEventsProps<T>) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getEvents: GetEventsFnc = async ({ variables }) => {
    setLoading(true)
    let apiData
    try {
      setError('')
      const response = await fetchEvents(variables)

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
