import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { EditGoal } from "."

const Home = ({ changeView }) => (
  <div>
    <h1 className="font-1 sans">Home</h1>
    <div onClick={() => changeView(EditGoal)}>Go to EditGoal</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Home)
