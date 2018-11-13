import { Component } from "react"
// import { connect } from "react-redux"
import styled from "styled-components"
import Goal from "./GoalProgressListItem"
import dummyStore from "./dummyStore";

const _Wrapper = styled.div.attrs({
  className: "ph3 flex flex-column items-center mb5"
})``

const fillColours = ["purple","green","blue"];

const getGoalProgress = (startDate, endDate) => {
  const deadline = Date.parse(endDate);
  const start = Date.parse(startDate);
  const totalDays = (deadline - start)/86400000;
  const daysElapsed = (Date.now() - start)/86400000;
  const percentComplete = Math.round((daysElapsed / totalDays)*100);
  return percentComplete
}

const daysToGo = (endDate) => {
  const deadline = Date.parse(endDate);
  if (Date.now() > deadline)
    return "You completed this goal!"
  return `${Math.round((deadline - Date.now())/86400000)} days to go!`;
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
        progressText={daysToGo(current_goal.finish_date)}
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

// This will be removed and state will be pulled from Redux store
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
//     current_goal: state.current_goal,
//     past_goals: state.past_goals
//   }
// }

// const GoalProgressList = connect(
//   mapStateToProps,
//   null
// )(GoalList)

export default GoalProgressList