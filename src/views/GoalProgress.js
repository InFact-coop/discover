import { Component } from "react"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import styled from "styled-components"

import IconHeader from "../components/shared/IconHeader"
import ActionButton from "../components/shared/ActionButton"
import Goal from "../components/GoalProgressListItem"
import NavBar from "../components/NavBar"
import { SetGoal, NewGoalConfirmation } from "."
import { archiveGoal, clearCurrentGoal } from "../state/actions/pastGoals"

import getCurrentGoalProgress from "../utils/currentGoalProgress"
import daysToGo from "../utils/goalDaysToGo"
import pastGoalDaysCompleted from "../utils/pastGoalDaysCompleted"

import icon from "../assets/icons/list_of_goals_big.svg"

const _Wrapper = styled.div.attrs({
  className: "ph3 flex flex-column items-center mb5",
})``

const fillColours = ["purple", "green", "blue"]

class GoalProgress extends Component {
  onClick = () => {
    const {
      startDate,
      scheduledFinishDate,
      currentGoal,
      archiveGoal,
      clearCurrentGoal,
      changeView,
    } = this.props
    if (getCurrentGoalProgress(startDate, scheduledFinishDate) === 100) {
      const actualFinishDate = new Date()
      archiveGoal({ ...currentGoal, actualFinishDate })
      clearCurrentGoal()
      changeView(SetGoal)
    } else changeView(NewGoalConfirmation)
  }
  render() {
    const { currentGoal, pastGoals } = this.props
    return (
      <div>
        <IconHeader title="Goals progress" icon={icon} />
        <_Wrapper>
          <Goal
            width={getCurrentGoalProgress(
              currentGoal.startDate,
              currentGoal.scheduledFinishDate
            )}
            color="light-red"
            goal={currentGoal.description}
            progressText={daysToGo(currentGoal.scheduledFinishDate)}
          />
          {pastGoals.map((goal, key) => (
            <Goal
              key={key}
              width={100}
              color={fillColours[key % 3]}
              goal={goal.description}
              progressText={pastGoalDaysCompleted(
                goal.startDate,
                goal.scheduledFinishDate,
                goal.actualFinishDate
              )}
            />
          ))}
        </_Wrapper>
        <ActionButton onClick={this.onClick}>Set new goal</ActionButton>
        <NavBar />
      </div>
    )
  }
}

export default connect(
  ({ currentGoal, pastGoals }) => ({ currentGoal, pastGoals }),
  { changeView, archiveGoal, clearCurrentGoal }
)(GoalProgress)
