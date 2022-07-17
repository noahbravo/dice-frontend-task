const fetch = window.fetch ? window.fetch : require('cross-fetch')

const { REACT_APP_X_API_KEY, REACT_APP_API_URL } = process.env

export enum RequestParamKeys {
  Limit = 'page[size]',
  Venues = 'filter[venues]',
  Page = 'page[number]'
}

export interface RequestParams {
  [RequestParamKeys.Limit]: string
  [RequestParamKeys.Venues]: string
  [RequestParamKeys.Page]: string | null
}

const fetchEvents = (params: RequestParams) => {
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

export { fetchEvents }
