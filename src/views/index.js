import { Component } from "react"
import { connect } from "react-redux"

export const Home = "Home"
export const Technique = "Technique"
export const Name = "Name"
export const Avatar = "Avatar"
export const SetGoal = "SetGoal"
export const GoalDays = "GoalDays"
export const GoalTime = "GoalTime"
export const Recap = "Recap"
export const AllSet = "AllSet"
export const GoalProgress = "GoalProgress"
export const Help = "Help"
export const Summary = "Summary"
export const ReadTips = "ReadTips"
export const MyGoal = "MyGoal"
export const EditGoal = "EditGoal"
export const NewGoalConfirmation = "NewGoalConfirmation"
export const Spinner = "Spinner"
export const Privacy = "Privacy"

class Router extends Component {
  render() {
    const { router } = this.props
    const CurrentView = require(`./${router.currentView}`).default
    return <CurrentView />
  }
}

export default connect(
  ({ router }) => ({
    router,
  }),
  null
)(Router)
