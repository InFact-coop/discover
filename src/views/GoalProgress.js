import { Component } from "react"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"

import IconHeader from "../components/shared/IconHeader"
import GoalProgressList from "../components/GoalProgressList"
import ActionButton from "../components/shared/ActionButton"

import icon from "../assets/icons/list_of_goals_big.svg"

const GoalProgress = () => (
  <div>
    <IconHeader title="Goals progress" icon={icon}/>
    <GoalProgressList />
    <ActionButton>Set new goal</ActionButton>
  </div>
)

export default connect(
  null,
  { changeView }
)(GoalProgress)