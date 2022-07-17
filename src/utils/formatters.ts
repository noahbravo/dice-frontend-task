const formatPrice = (price: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })
  return formatter.format(price / 100)
}

const formatDate = (isoString: Date, timeZone: string) => {
  const date = new Date(isoString)
  const weekDayName = date.toLocaleString('default', { timeZone, weekday: 'short' })
  const day = date.getDate()
  const month = date.toLocaleString('default', { timeZone, month: 'short' })
  const time = date.toLocaleString('default', {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  return {
    month,
    weekDayName,
    day,
    time
  }
}

export { formatPrice, formatDate }
