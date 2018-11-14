import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Name, Avatar, SetGoal, Technique } from "."

const Home = ({ changeView }) => (
  <div>
    <h1 className="font-1 sans">Home</h1>
    <div onClick={() => changeView(Name)}>Go to Name</div>
    <div onClick={() => changeView(Avatar)}>Go to Avatar</div>
    <div onClick={() => changeView(SetGoal)}>Go to SetGoal</div>
    <div onClick={() => changeView(Technique)}>Go to Technique</div>
  </div>
)

export default connect(
  null,
  { changeView }
)(Home)
