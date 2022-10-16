import type { FetchActions } from '../actions/fetch/types'

export interface State<D> {
  data?: D
  error?: Error
  loading: boolean
}

export function fetchReducer<D>(state: State<D>, action: FetchActions<D>): State<D> {
  switch (action.type) {
    case 'LOADING': {
      return { ...state, loading: true }
    }
    case 'FETCHED': {
      return { ...state, data: action.payload, loading: false }
    }
    case 'ERROR': {
      return { ...state, error: action.payload, loading: false }
    }
    default:
      return state
  }
}
