import { normalizeDate } from "./date"

const getCurrentGoalProgress = (startDate, endDate) => {
  const deadline = normalizeDate(Date.parse(endDate))
  const dateNow = normalizeDate(Date.now())
  if (deadline < dateNow) return 100
  const start = normalizeDate(Date.parse(startDate))
  const totalDays = (deadline - start) / 86400000
  const daysElapsed = (dateNow - start) / 86400000
  const percentComplete = (daysElapsed / totalDays) * 100
  return percentComplete
}

const getPastGoalProgress = (startDate, endDate, scheduledEnd) => {
  const start = normalizeDate(Date.parse(startDate))
  const end = normalizeDate(Date.parse(endDate))
  const scheduledEndDate = normalizeDate(Date.parse(scheduledEnd))
  const totalDays = (scheduledEndDate - start) / 86400000
  const daysElapsed = (end - start) / 86400000
  const percentComplete = (daysElapsed / totalDays) * 100
  return percentComplete
}

export { getCurrentGoalProgress, getPastGoalProgress }
