const daysToGo = (endDate) => {
  const deadline = Date.parse(endDate);
  if (Date.now() > deadline)
    return "You completed this goal!"
  return `${Math.round((deadline - Date.now())/86400000)} days to go!`;
}

export default daysToGo