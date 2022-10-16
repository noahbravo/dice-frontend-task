import { useReducer, useCallback } from 'react'
import { fetchReducer } from '../../../reducers'
import { loadingAction, fetchedAction, errorAction } from '../../../actions/fetch'
import type { FetchFnc, UseFetchOptions, UseFetchReturnedType, FetchDataOptions } from './types'

const initialState = {
  loading: false,
  error: undefined,
  data: undefined
}

function useFetch<D, V>(
  fetchFnc: FetchFnc<V>,
  { onCompleted }: UseFetchOptions<D, V>
): UseFetchReturnedType<D, V> {
  const [state, dispatch] = useReducer(fetchReducer<D>, initialState)

  const fetchData = useCallback(
    async ({ variables }: FetchDataOptions<V>) => {
      dispatch(loadingAction())
      try {
        const response = await fetchFnc(variables)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        if (onCompleted) onCompleted(data)
        dispatch(fetchedAction<D>(data))
      } catch (error) {
        dispatch(errorAction(error as Error))
      }
    },
    [fetchFnc, onCompleted]
  )

  return { fetchData, ...state }
}

export { useFetch }
