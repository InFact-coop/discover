import normalizeDate from "./normalizeDate"

const getCurrentGoalProgress = (startDate, endDate) => {
  const deadline = Date.parse(endDate);
  const dateNow = normalizeDate(Date.now())
  if (deadline < dateNow)
    return 100;
  const start = Date.parse(startDate);
  const totalDays = (deadline - start)/86400000;
  const daysElapsed = (dateNow - start)/86400000;
  const percentComplete = (daysElapsed / totalDays)*100;
  return percentComplete
}

export default getCurrentGoalProgress