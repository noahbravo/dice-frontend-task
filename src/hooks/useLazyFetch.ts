import { useState } from 'react'

interface FetchResponse<D> {
  ok: boolean
  json: () => D
  text: () => string
  errors?: Array<{ message: string }>
}
type FetchDataFnc<D, V> = (params: V) => Promise<FetchResponse<D>>

type LazyFetchOptions<V> = { variables: V }
type LazyFetchFnc<V> = (options: LazyFetchOptions<V>) => Promise<void>

interface UseLazyFetchOptions<D, V> {
  onCompleted?: (data: D | undefined) => void
  variables?: V
}

interface UseLazyFetchReturnedType<D, V> {
  lazyFetch: LazyFetchFnc<V>
  data: D | undefined
  loading: boolean
  error: string
}

const useLazyFetch = <D, V>(
  fetchData: FetchDataFnc<D, V>,
  { onCompleted }: UseLazyFetchOptions<D, V>
): UseLazyFetchReturnedType<D, V> => {
  const [data, setData] = useState<D>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const lazyFetch = async ({ variables }: LazyFetchOptions<V>): Promise<void> => {
    let apiData
    setLoading(true)

    try {
      setError('')
      const response = await fetchData(variables)

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

    if (onCompleted) onCompleted(apiData)
    setLoading(false)
  }

  return { lazyFetch, data, loading, error }
}

export { useLazyFetch }
