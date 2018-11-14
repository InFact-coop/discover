const normalizeDate = (date) => {
  if ( typeof date === "string")
    date = Date.parse(date);
  return Math.floor(date/86400000)*86400000
}

export default normalizeDate