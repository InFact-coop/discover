import { Component } from "react"
// import { connect } from "react-redux"
import styled from "styled-components"

import dummyStore from "./dummyStore";

const _Wrapper = styled.div.attrs({
  className: "ph3 flex flex-column items-center mb5"
})``

const _GoalText = styled.h2.attrs({
  className: "w-100 font-4 sans dark-gray mb2"
})``

const _ProgressBar = styled.div.attrs({
  className: "w-100 ba b--moon-gray br3 tc relative"
})`
  height: 20px;
`
const fillColours = ["purple","green","blue"];
const _ProgressFill = styled.div.attrs({
  className: ""
})`
  border-radius: 7px;
  height: 18px;
  width: ${({width}) => `${width}%`};
  background-color: ${({color}) => `var(--${color})`};
  opacity: 0.5;
`
const _ProgressText = styled.h2.attrs({
  className: "mono font-6 dark-gray absolute top-0"
})`
  left: 50%;
  transform: translateX(-50%);
  line-height: 20px;
`

const getGoalProgress = (startDate, endDate) => {
  const deadline = Date.parse(endDate);
  const start = Date.parse(startDate);
  const totalDays = (deadline - start)/86400000;
  const daysElapsed = (Date.now() - start)/86400000;
  const percentComplete = Math.round((daysElapsed / totalDays)*100);
  return percentComplete
}

class Goal extends Component {
  render () {
    const { width, color, goal, progressText } = this.props
    return (
      <div className="mb4 w-100">
        <_GoalText>{goal}</_GoalText>
        <_ProgressBar>
          <_ProgressFill width={width} color={color}/>
          <_ProgressText>{progressText}</_ProgressText>
        </_ProgressBar> 
      </div>
    )
  }
}

class GoalList extends Component {
  render () {
    const {current_goal, past_goals} = this.props
    return (
    <_Wrapper>
      <Goal 
        width={getGoalProgress(current_goal.start_date, current_goal.finish_date)} 
        color="light-red" 
        goal={current_goal.description}
        progressText="40 days out of 60"
      />
      {
        past_goals.map((goal, key) => {
          return (
            <Goal 
              key={key}
              width={100} 
              color={fillColours[key%3]} 
              goal={goal.description}
              progressText="28 days out of 30"
            />
          )
        })
      }
    </_Wrapper>
    )
  }  
}

const GoalProgressList = () => (
  <GoalList 
    current_goal={dummyStore.current_goal} 
    past_goals={dummyStore.past_goals}
  />
)

// GoalList.propTypes = {
//   current_goal: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     start_date: PropTypes.string.isRequired,
//     finish_date: PropTypes.string.isRequired
//   }),
//   past_goals: PropTypes.arrayOf(
//     PropTypes.shape({
//       description: PropTypes.string.isRequired,
//       start_date: PropTypes.string.isRequired,
//       finish_date: PropTypes.string.isRequired

//     }).isRequired
//   )
// }

// const mapStateToProps = state => {
//   return {
//     currentGoal: state.current_goal,
//     pastGoals: state.past_goals
//   }
// }

// const GoalProgressList = connect(
//   mapStateToProps,
//   { changeView }
// )(GoalList)

export default GoalProgressList