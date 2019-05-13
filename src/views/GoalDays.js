import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import * as r from "ramda" //eslint-disable-line

import { GoalTime, EditGoal } from "."
import {
  selectDay,
  setStartDate,
  setScheduledFinishDate,
  setDuration,
} from "../state/actions/currentGoal"
import { changeView } from "../state/actions/router"

import background from "../assets/backgrounds/bg_how_many_times.svg"
import botIcon from "../assets/icons/robot_round.png"

import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { _Title } from "../components/Text"
import OutlineContainer from "../components/shared/OutlineContainer"
import ValidationMsg from "../components/ValidationMsg"
import { breakpoint } from "../styles/utils"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center center mt5",
})`
  width: 95%;

  ${breakpoint.supersmall`
  font-size: 14px;

    `};
`

const _BotIcon = styled.img.attrs({
  className: "w-40 mt5 mb1",
})`
  ${breakpoint.supersmall`
width: 26%;
`};
`

const _Description = styled.p.attrs({
  className: "mono font-4 tc",
})``

const _InnerContainer = styled.div.attrs({
  className: "flex flex-wrap justify-center mt2",
})``

const _DayContent = styled.div.attrs({
  className: "flex items-center justify-center br-100 sans bg-light-yellow",
})`
  height: 2.5rem;
  width: 2.5rem;

  ${breakpoint.supersmall`
  height: 2rem;
  width: 2rem;
    `};
`

const Day = ({ selected, children, onClick }) => (
  <OutlineContainer
    selected={selected}
    onClick={onClick}
    br="br-100"
    margin="1px"
  >
    <_DayContent>{children}</_DayContent>
  </OutlineContainer>
)

const _Pill = styled.div.attrs({
  className:
    "flex items-center ph3 justify-center br-pill sans bg-light-yellow",
})`
  height: 2.5rem;
`

const _SkipButton = styled.div.attrs({
  className: "flex justify-center items-center sans h2 w2",
})`
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  font-weight: 500;
`

class GoalDays extends Component {
  state = {
    days: {
      Monday: { selected: false },
      Tuesday: { selected: false },
      Wednesday: { selected: false },
      Thursday: { selected: false },
      Friday: { selected: false },
      Saturday: { selected: false },
      Sunday: { selected: false },
    },
    durations: {},
    everyDaySelected: false,
    startDate: "",
    scheduledFinishDate: "",
    valid: true,
    submitted: false,
  }

  // get static data from redux and change days array to object to make it easier to edit
  // add selected key for borders
  componentDidMount() {
    const {
      staticData,
      daysOfWeek,
      duration,
      startDate,
      scheduledFinishDate,
    } = this.props

    const selectedDays = staticData.days.reduce((acc, curr) => {
      acc[curr] = {}
      acc[curr].selected = daysOfWeek.includes(curr)
      return acc
    }, {})

    const selectDuration = staticData.durations.reduce((acc, curr) => {
      acc[curr] = {}
      acc[curr].selected = curr === duration
      return acc
    }, {})

    this.setState({
      days: selectedDays,
      durations: selectDuration,
      everyDaySelected: daysOfWeek.length === 7,
      startDate,
      scheduledFinishDate,
    })
  }

  onDayClick = day => () => {
    const { days, scheduledFinishDate, submitted } = this.state
    const { selected } = days[day]

    days[day].selected = !selected

    const noDaysHaveBeenSelected = r.all(r.propEq("selected", false))(
      r.values(days)
    )

    this.setState(prevState => ({
      days,
      everyDaySelected:
        Object.keys(days).filter(day => days[day].selected).length === 7,
      valid: submitted
        ? !(!scheduledFinishDate || noDaysHaveBeenSelected)
        : true,
    }))
  }

  onEveryDayClick = () => {
    const { days, scheduledFinishDate, submitted } = this.state
    Object.keys(days).forEach(day => {
      days[day].selected = true
    })
    this.setState(prevState => ({
      days,
      everyDaySelected: true,
      valid: submitted ? !!scheduledFinishDate : true,
    }))
  }

  selectDuration = month => () => {
    const { startDate, durations, submitted, days } = this.state

    const numOfMonth = month[0]
    // start date is only set one time
    const _startDate = startDate || new Date()
    const scheduledFinishDate = new Date()

    const noDaysHaveBeenSelected = r.all(r.propEq("selected", false))(
      r.values(days)
    )

    scheduledFinishDate.setDate(scheduledFinishDate.getDate() + numOfMonth * 30)
    Object.keys(durations).forEach(d => {
      durations[d].selected = d === month
    })

    this.setState({
      startDate: _startDate,
      scheduledFinishDate,
      durations,
      valid: submitted
        ? !(!scheduledFinishDate || noDaysHaveBeenSelected)
        : true,
    })
  }

  saveFunction = () => {
    const {
      selectDay,
      setStartDate,
      setScheduledFinishDate,
      setDuration,
    } = this.props
    const { days, startDate, scheduledFinishDate, durations } = this.state
    const selectedDays = Object.keys(days).filter(day => days[day].selected)
    const selectedDuration = Object.keys(durations).filter(
      duration => durations[duration].selected
    )[0]
    selectDay(selectedDays)
    setStartDate(startDate)
    setScheduledFinishDate(scheduledFinishDate)
    setDuration(selectedDuration)
  }

  setInvalid = () => this.setState({ valid: false, submitted: true })

  render() {
    const {
      days,
      durations,
      everyDaySelected,
      scheduledFinishDate,
      valid,
    } = this.state
    const {
      changeView,
      router: { history },
    } = this.props
    const edit = history[history.length - 1] === "EditGoal"
    const noDaysHaveBeenSelected = r.all(r.propEq("selected", false))(
      r.values(days)
    )

    return (
      <_Container>
        <GlobalStyle />
        {!edit && (
          <Fragment>
            <ProgressBar progress={5} />
            <_SkipButton
              onClick={() => {
                changeView(GoalTime)
              }}
            >
              SKIP
            </_SkipButton>
          </Fragment>
        )}
        <BackButton />
        <_BotIcon src={botIcon} />

        <div className="relative mb4">
          <_Title className="mv2">Perfect!</_Title>
          <_Description>
            On <u>which days</u> and for <u>how long</u> will you be working on
            your goal?
          </_Description>
          <ValidationMsg valid={valid} bottom="-22px">
            Please make a selection or skip
          </ValidationMsg>
        </div>
        <_InnerContainer>
          {Object.keys(days).map(day => (
            <Day
              key={day}
              selected={days[day].selected}
              onClick={this.onDayClick(day)}
            >
              {day.slice(0, 3)}
            </Day>
          ))}
        </_InnerContainer>
        <OutlineContainer
          br="br-pill"
          selected={everyDaySelected}
          onClick={this.onEveryDayClick}
          margin="var(--spacing-medium)"
        >
          <_Pill>Every day</_Pill>
        </OutlineContainer>
        <_Description>for</_Description>
        <_InnerContainer>
          {Object.keys(durations).map(month => (
            <OutlineContainer
              br="br-pill"
              onClick={this.selectDuration(month)}
              key={month}
              selected={durations[month].selected}
            >
              <_Pill>{month}</_Pill>
            </OutlineContainer>
          ))}
        </_InnerContainer>
        <SaveButton
          valid={!(!scheduledFinishDate || noDaysHaveBeenSelected)}
          saveFunction={this.saveFunction}
          redirectTo={edit ? EditGoal : GoalTime}
          text={edit ? "SAVE" : "NEXT"}
          setInvalid={this.setInvalid}
        />
      </_Container>
    )
  }
}

GoalDays.propTypes = {
  staticData: PropTypes.object.isRequired,
  daysOfWeek: PropTypes.array,
  duration: PropTypes.string,
  startDate: PropTypes.string,
  scheduledFinishDate: PropTypes.string,
  selectDay: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setScheduledFinishDate: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
}

export default connect(
  ({
    router,
    staticData,
    currentGoal: { daysOfWeek, duration, startDate, scheduledFinishDate },
  }) => ({
    router,
    daysOfWeek,
    duration,
    startDate,
    scheduledFinishDate,
    staticData,
  }),
  { selectDay, setStartDate, setScheduledFinishDate, setDuration, changeView }
)(GoalDays)
