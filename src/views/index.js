import { Fragment } from "react"
import { connect } from "react-redux"

export const Home = "Home"
export const Landing = "Landing"
export const Help = "Help"

const Router = ({ currentView }) => {
  const CurrentView = require(`./${currentView}`).default
  return (
    <Fragment>
      <CurrentView />
    </Fragment>
  )
}

export default connect(
  ({ router: { currentView } }) => ({ currentView }),
  null
)(Router)
