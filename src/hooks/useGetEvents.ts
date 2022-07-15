import { useState, useEffect } from 'react'
import type { ApiData } from '../@types/events'
import { getEvents, type RequestParams } from '../api'

const useGetEvents = (requestParams: RequestParams) => {
  const [data, setData] = useState<ApiData>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleGetEvents = async () => {
      setLoading(true)
      try {
        setError('')
        const response = await getEvents(requestParams)

        if (response.ok) {
          const apiData = await response.json()
          setData(apiData)
        } else {
          const errorMessage = await response.text()
          throw new Error(errorMessage)
        }
      } catch (err) {
        const errorMessage = err as string
        setError(errorMessage)
      }
      setLoading(false)
    }

    handleGetEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export { useGetEvents }
