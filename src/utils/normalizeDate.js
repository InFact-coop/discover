const normalizeDate = date => {
  if (typeof date === "string") date = Date.parse(date)
  const roundedDays = Math.floor(date / 86400000)
  return roundedDays * 86400000
}

export default normalizeDate
