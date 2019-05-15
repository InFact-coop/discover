import { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { setLoggedOnDate, setDailyQuote } from "../state/actions/profile"
import { addQuotesData } from "../state/actions/staticData"

import { isToday } from "../utils/date"

export const Home = "Home"
export const Technique = "Technique"
export const Name = "Name"
export const Avatar = "Avatar"
export const SetGoal = "SetGoal"
export const GoalDays = "GoalDays"
export const GoalTime = "GoalTime"
export const Recap = "Recap"
export const AllSet = "AllSet"
export const GoalProgress = "GoalProgress"
export const Help = "Help"
export const Summary = "Summary"
export const ReadTips = "ReadTips"
export const MyGoal = "MyGoal"
export const EditGoal = "EditGoal"
export const NewGoalConfirmation = "NewGoalConfirmation"
export const Spinner = "Spinner"
export const Privacy = "Privacy"

class Router extends Component {
  async componentDidMount() {
    const {
      addQuotesData,
      setDailyQuote,
      setLoggedOnDate,
      profile,
    } = this.props
    const quotes = await axios
      .get("/api/user/sheets")
      .then(({ data: quotes }) => quotes)

    addQuotesData(quotes)

    if (!isToday(profile.lastLoggedOn)) {
      const random = Math.floor(Math.random() * quotes.length)
      setDailyQuote(r.nth(random, quotes))
      setLoggedOnDate(new Date())
    }
  }

  render() {
    const { router } = this.props
    const CurrentView = require(`./${router.currentView}`).default
    return <CurrentView />
  }
}

export default connect(
  ({ router, profile }) => ({
    router,
    profile,
  }),
  { addQuotesData, setDailyQuote, setLoggedOnDate }
)(Router)
