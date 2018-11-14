import normalizeDate from "./normalizeDate"

const daysToGo = (endDate) => {
  const deadline = Date.parse(endDate);
  const dateNow = normalizeDate(Date.now())
  if (dateNow > deadline)
    return "You completed this goal!"
  return `${(deadline - dateNow)/86400000} days to go!`;
}

export default daysToGo