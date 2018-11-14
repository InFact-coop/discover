const normalizeDate = (dateString) => {
  const parsed = Date.parse(dateString);
  return Math.round(parsed/100000)*100000
}

export default normalizeDate