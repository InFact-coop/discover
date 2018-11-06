import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Help } from "."

import Title from "../components/Title"

const Home = ({ changeView }) => (
  <div>
    <h1>Home</h1>
    <Title />
    <div onClick={() => changeView(Help)}>Go to help</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Home)
