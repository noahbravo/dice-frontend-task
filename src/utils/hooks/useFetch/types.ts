export interface State<D> {
  data?: D
  error?: Error
  loading: boolean
}

export type FetchDataOptions<V> = { variables: V }

export type FetchFnc<V> = (params: V) => Promise<Response>

export interface UseFetchReturnedType<D, V> extends State<D> {
  fetchData: (options: FetchDataOptions<V>) => Promise<void>
}

export interface UseFetchOptions<D, V> {
  onCompleted?: (data: Awaited<D>) => void
  variables?: V
}
