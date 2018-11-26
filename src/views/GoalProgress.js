import { Component } from "react"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import styled from "styled-components"
import PropTypes from "prop-types"

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
import { arch } from "os"

// This will be removed when redux store is working ---->
// import dummyStore from "../components/dummyStore"
// const current_goal = dummyStore.current_goal
// const past_goals = dummyStore.past_goals
// <----

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
    const { currentGoal, archiveGoal } = this.props
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
          {/* {archiveGoal.map((goal, key) => {
            return (
              <Goal
                key={key}
                width={100}
                color={fillColours[key % 3]}
                goal={goal.description}
                progressText={pastGoalDaysCompleted(
                  goal.start_date,
                  goal.scheduled_finish_date,
                  goal.actual_finish_date
                )}
              />
            )
          })} */}
        </_Wrapper>
        <ActionButton onClick={this.onClick}>Set new goal</ActionButton>
        <NavBar />
      </div>
    )
  }
}

GoalProgress.propTypes = {
  current_goal: PropTypes.shape({
    description: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    finish_date: PropTypes.string.isRequired,
  }),
  past_goals: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      finish_date: PropTypes.string.isRequired,
    }).isRequired
  ),
}

// const mapStateToProps = state => {
//   return {
//     current_goal: state.current_goal,
//     past_goals: state.past_goals
//   }
// }

export default connect(
  ({ currentGoal }) => ({ currentGoal }),
  { changeView, archiveGoal, clearCurrentGoal }
)(GoalProgress)
