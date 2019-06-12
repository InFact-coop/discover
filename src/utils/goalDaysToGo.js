import { normalizeDate } from "./date"

const daysToGo = endDate => {
  const deadline = Date.parse(endDate)
  const dateNow = normalizeDate(Date.now())
  if (dateNow > deadline) return "You completed this goal!"
  return `${Math.floor((deadline - dateNow) / 86400000)} days to go!`
}

export default daysToGo
