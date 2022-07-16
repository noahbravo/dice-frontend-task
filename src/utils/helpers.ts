export enum DateStatus {
  'Before' = 'before today',
  'After' = 'after today'
}

const getDateStatus = (isoString: Date) => {
  const date3 = new Date(isoString)
  const now = new Date()
  if (date3.getTime() < now.getTime()) return DateStatus.Before
  if (date3.getTime() > now.getTime()) return DateStatus.After
}

export { getDateStatus }
