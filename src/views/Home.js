import { connect } from "react-redux"

import { changeView } from "../state/actions/router"

import Title from "../components/Title"

const Home = () => (
  <div>
    <h1 className="font-1 sans">Home</h1>
    <Title />
  </div>
)

export default connect(
  null,
  { changeView }
)(Home)
