export enum DateStatus {
  'BeforeNow' = 'before now',
  'AfterNow' = 'after now'
}

const getDateStatus = (isoString: Date) => {
  const date3 = new Date(isoString)
  const now = new Date()
  if (date3.getTime() < now.getTime()) return DateStatus.BeforeNow
  if (date3.getTime() > now.getTime()) return DateStatus.AfterNow
}

export { getDateStatus }
