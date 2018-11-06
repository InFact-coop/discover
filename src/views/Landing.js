import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Home } from "."

const Landing = ({ changeView }) => (
  <div>
    <h1>Landing</h1>
    <div onClick={() => changeView(Home)}>Go to home</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Landing)
