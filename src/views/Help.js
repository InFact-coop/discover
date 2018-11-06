import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Landing } from "."

const Help = ({ changeView }) => (
  <div>
    <h1>Help</h1>
    <div onClick={() => changeView(Landing)}>Go to landing</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Help)
