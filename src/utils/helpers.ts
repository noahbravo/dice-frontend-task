export enum DateStatus {
  'BeforeNow' = 'before now',
  'AfterNow' = 'after now'
}

function getDateStatus(isoString: string) {
  const date3 = new Date(isoString)
  const now = new Date()
  if (date3.getTime() < now.getTime()) return DateStatus.BeforeNow
  if (date3.getTime() > now.getTime()) return DateStatus.AfterNow
}

function insertUrlParam(key: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(key, value)
  const newurl = `${window.location.protocol}//${window.location.host}${
    window.location.pathname
  }?${searchParams.toString()}`
  window.history.pushState({ path: newurl }, '', newurl)
}

function removeUrlParam(paramKey: string) {
  const url = window.location.href
  const newUrl = new URL(url)
  newUrl.searchParams.delete(paramKey)
  const { href: newUrlHref } = newUrl
  window.history.pushState({ path: newUrlHref }, '', newUrlHref)
}

function getUrlParam(paramKey: string, urlSearchParams?: URLSearchParams) {
  const currentUrlSearchParams = new URLSearchParams(window.location.search)
  return urlSearchParams ? urlSearchParams.get(paramKey) : currentUrlSearchParams.get(paramKey)
}

export { getDateStatus, insertUrlParam, removeUrlParam, getUrlParam }
