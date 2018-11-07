import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Home } from "."

import CodeInput from "../components/Code"

const Code = ({ changeView }) => (
  <div>
    <h1>Code</h1>
    <CodeInput />
    <div onClick={() => changeView(Home)}>Go to Home</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Code)
