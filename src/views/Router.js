import { Fragment, Component } from "react"
import { connect } from "react-redux"

export const Home = "Home"
export const Code = "Code"
export const Loading = "Loading"

class Router extends Component {
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
  ({ router: { currentView } }) => ({
    currentView,
  }),
  null
)(Router)
