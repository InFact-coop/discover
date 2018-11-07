import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Code } from "."

const Landing = ({ changeView }) => (
  <div>
    <h1>Landing</h1>
    <div onClick={() => changeView(Code)}>Go to code</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Landing)
