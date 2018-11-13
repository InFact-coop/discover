import { Component } from "react"
import styled from "styled-components"

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
const _ProgressFill = styled.div.attrs({
  className: ""
})`
  border-radius: 7px;
  height: 18px;
  width: ${({width}) => `${width}`};
  background-color: ${({color}) => `var(--${color})`};
  opacity: 0.5;
`
const _ProgressText = styled.h2.attrs({
  className: "mono font-5 dark-gray absolute top-0"
})`
  left: 50%;
  transform: translateX(-50%);
  line-height: 20px;
`

class Goal extends Component {
  render () {
    const { width, color, goal, progressText } = this.props
    return (
      <div className="mb3">
        <_GoalText>{goal}</_GoalText>
        <_ProgressBar>
          <_ProgressFill width={width} color={color}/>
          <_ProgressText>{progressText}</_ProgressText>
        </_ProgressBar> 
      </div>
    )
  }
}

export default class GoalProgressList extends Component {
  render () {
    return (
      <_Wrapper>
        <Goal 
          width="80%" 
          color="purple" 
          goal="Stop Procrastinating and work on my time management skills"
          progressText="40 days out of 60"
        />
        <Goal 
          width="50%" 
          color="green" 
          goal="Stop Procrastinating and work on my time management skills"
          progressText="28 days out of 30"
          />
        <Goal 
          width="100%" 
          color="blue" 
          goal="Stop Procrastinating and work on my time management skills"
          progressText="Huzzah! Completed!"
          />
         <Goal 
          width="100%" 
          color="light-red" 
          goal="Stop Procrastinating and work on my time management skills"
          progressText="Huzzah! Completed!"
          />
      </_Wrapper>
    )
  }
}










const dummyStore = 
{
  "user_info": {
    "name": "Ruth",
    "avatar": String
  },
  "current_goal": {
    "description": "Stop procrastinating and work on my time management skills",
    "days_of_week": [String],
    "time_of_day": {
      "description": "After School",
      "time": "16:00:00"
    },
    "start_date": "Wed Oct 13 2018 00:00:00 GMT+0000 (Greenwich Mean Time)",
    "finish_date": "Wed Dec 13 2018 00:00:00 GMT+0000 (Greenwich Mean Time)"
  },
  "past_goals": 
  [
    {
      "description": "Sleep at least 7-8 hours (schools day).",
      "days_of_week": ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
      "time_of_day": {
        "description": "evening",
        "time": "22:00:00"
      },
      "start_date": "Wed Mar 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)",
      "finish_date": "Wed Apr 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)"
    },
    {
      "description": "Meditate 3 days a week before I go to sleep",
      "days_of_week": ["Sunday","Tuesday","Thursday"],
      "time_of_day": {
        "description": "evening",
        "time": "22:00:00"
      },
      "start_date": "Wed Mar 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)",
      "finish_date": "Wed May 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)"
    },
    {
      "description": "stop waking up at 1am to complete homework/essays",
      "days_of_week": ["Monday", "Tuesday", "Wednesday","Thursday","Sunday"],
      "time_of_day": {
        "description": "evening",
        "time": "01:00:00"
      },
      "start_date": "Wed Mar 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)",
      "finish_date": "Wed May 25 2018 00:00:00 GMT+0000 (Greenwich Mean Time)"
    }
  ],
  "techniques": {
    "name": String,
    "description": String,
    "tips": {} // not sure about contents yet
  }
}