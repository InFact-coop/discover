import { Component } from "react"
import { connect } from "react-redux"
import { verifyToken } from "../state/actions/auth"
import { changeView } from "../state/actions/router"

export const Home = "Home"
export const Code = "Code"
export const Loading = "Loading"
export const Technique = "Technique"
export const GoalProgress = "GoalProgress"

class Router extends Component {
  componentDidMount() {
    const { verifyToken, auth, changeView } = this.props
    if (auth.token) return verifyToken(auth.token)
    return changeView(Code)
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
