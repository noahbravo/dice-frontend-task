const { REACT_APP_X_API_KEY, REACT_APP_API_URL } = process.env

export enum RequestParamKeys {
  Venues = 'filter[venues]',
  Limit = 'page[size]',
  Page = 'page[number]'
}

export interface RequestParams {
  [RequestParamKeys.Venues]: string
  [RequestParamKeys.Limit]: string
  [RequestParamKeys.Page]: string | null
}

const getEvents = (params: RequestParams) => {
  const url = new URL(REACT_APP_API_URL)

  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value)
  })

  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': REACT_APP_X_API_KEY }
  }

  return fetch(url, options)
}

export { getEvents }
