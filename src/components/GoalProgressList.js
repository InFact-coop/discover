import { Component } from "react"


export default class GoalProgressList extends Component {
  render () {
    return (
      <h2>goal</h2>
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