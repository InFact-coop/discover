export const getTipSections = title => {
  switch (title) {
    case "Time management tips":
      return TimeManagement
    case "Procrastination tips":
      return Procrastination
    case "Thinking traps":
      return ThinkingTraps
    case "Thought challenging":
      return ThoughtChallenging
    default:
      return [1, 2, 3]
  }
}

const TMOne = () => {
  return (
    <div>
      <p>TM One</p>
    </div>
  )
}
const TMTwo = () => {
  return (
    <div>
      <p>TM One</p>
    </div>
  )
}
const TMThree = () => {
  return (
    <div>
      <p>TM One</p>
    </div>
  )
}
const TMFour = () => {
  return (
    <div>
      <p>TM One</p>
    </div>
  )
}

export const TimeManagement = [TMOne, TMTwo, TMThree, TMFour]

const ProcOne = () => {
  return (
    <div>
      <p>Proc One</p>
    </div>
  )
}
const ProcTwo = () => {
  return (
    <div>
      <p>Proc Two</p>
    </div>
  )
}
const ProcThree = () => {
  return (
    <div>
      <p>Proc Three</p>
    </div>
  )
}
const ProcFour = () => {
  return (
    <div>
      <p>Proc Four</p>
    </div>
  )
}

export const Procrastination = [ProcOne, ProcTwo, ProcThree, ProcFour]

const ThinkingTrapsOne = ""
const ThinkingTrapsTwo = ""
const ThinkingTrapsThree = ""
const ThinkingTrapsFour = ""

export const ThinkingTraps = [
  ThinkingTrapsOne,
  ThinkingTrapsTwo,
  ThinkingTrapsThree,
  ThinkingTrapsFour,
]

const ThoughtChallengingOne = ""
const ThoughtChallengingTwo = ""

export const ThoughtChallenging = [ThoughtChallengingOne, ThoughtChallengingTwo]
