import { Fragment, Component } from "react"
import { connect } from "react-redux"
import { verifyToken } from "../state/actions/router"

export const Home = "Home"
export const Code = "Code"

class Router extends Component {
  componentDidMount() {
    const { verifyToken } = this.props
    verifyToken()
  }

  render() {
    const { currentView } = this.props
    const CurrentView = require(`./${currentView}`).default
    return (
      <Fragment>
        <CurrentView />
      </Fragment>
    )
  }
}

export default connect(
  ({ router: { currentView } }) => ({ currentView }),
  { verifyToken }
)(Router)
