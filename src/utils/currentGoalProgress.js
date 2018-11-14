const getCurrentGoalProgress = (startDate, endDate) => {
  const deadline = Date.parse(endDate);
  if (deadline < Date.now())
    return 100;
  const start = Date.parse(startDate);
  const totalDays = (deadline - start)/86400000;
  const daysElapsed = (Date.now() - start)/86400000;
  const percentComplete = Math.round((daysElapsed / totalDays)*100);
  return percentComplete
}

export default getCurrentGoalProgress