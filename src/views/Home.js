import { connect } from "react-redux"

import { changeView } from "../state/actions/router"

const Home = () => (
  <div>
    <h1 className="font-1 sans">Home</h1>
  </div>
)

export default connect(
  null,
  { changeView }
)(Home)
