const normalizeDate = date => {
  if (typeof date === "string") date = Date.parse(date)
  const roundedDays = Math.floor(date / 86400000)
  return roundedDays * 86400000
}

const isToday = date =>
  new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)

export { normalizeDate, isToday }
