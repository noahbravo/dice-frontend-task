import type { LoadingAction, FetchedAction, ErrorAction } from './types'

export function loadingAction(): LoadingAction {
  return {
    type: 'LOADING'
  }
}

export function fetchedAction<D>(payload: FetchedAction<D>['payload']): FetchedAction<D> {
  return {
    type: 'FETCHED',
    payload
  }
}

export function errorAction(payload: ErrorAction['payload']): ErrorAction {
  return {
    type: 'ERROR',
    payload
  }
}
