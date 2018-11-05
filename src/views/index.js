import { Fragment } from "react"
import { connect } from "react-redux"

export const Home = "Home"
export const Landing = "Landing"
export const Help = "Help"

export const Views = [Home, Landing, Help]

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
