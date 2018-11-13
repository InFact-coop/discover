import { Component } from "react"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"

const GoalProgress = () => (
  <div>
    <h1 className="font-1 sans">Goals</h1>
  </div>
)

export default connect(
  null,
  { changeView }
)(GoalProgress)