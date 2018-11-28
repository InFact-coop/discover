import { Component } from "react"
import { connect } from "react-redux"
import { verifyToken } from "../state/actions/auth"
import { changeView } from "../state/actions/router"

export const Home = "Home"
export const Code = "Code"
export const Loading = "Loading"
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
export const MyGoal = "MyGoal"
export const EditGoal = "EditGoal"
export const NewGoalConfirmation = "NewGoalConfirmation"

class Router extends Component {
  componentDidMount() {
    const { verifyToken, auth, changeView } = this.props
    if (auth.token) return verifyToken(auth.token)
    return changeView(Home)
  }

  render() {
    const { router } = this.props
    const CurrentView = require(`./${router.currentView}`).default
    return <CurrentView />
  }
}

export default connect(
  ({ auth, router }) => ({
    auth,
    router,
  }),
  { verifyToken, changeView }
)(Router)
