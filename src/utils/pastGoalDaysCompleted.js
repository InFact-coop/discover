import normalizeDate from "./normalizeDate"

const getCurrentGoalProgress = (startDate, scheduledEnd, actualEnd) => {
  const start = normalizeDate(Date.parse(startDate))
  const scheduled = normalizeDate(Date.parse(scheduledEnd))
  const actual = normalizeDate(Date.parse(actualEnd))

  const totalDays = (scheduled - start) / 86400000
  const daysCompleted = (actual - start) / 86400000
  if (totalDays === daysCompleted) return "Huzzah! completed!"
  return `${daysCompleted} days out of ${totalDays}`
}

export default getCurrentGoalProgress
