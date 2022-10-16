export interface LoadingAction {
  type: 'LOADING'
}

export interface FetchedAction<D> {
  type: 'FETCHED'
  payload: D
}

export interface ErrorAction {
  type: 'ERROR'
  payload: Error
}

export type FetchActions<D> = LoadingAction | FetchedAction<D> | ErrorAction
