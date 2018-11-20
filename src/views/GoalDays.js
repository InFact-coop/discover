import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { GoalTime, EditGoal } from "."
import {
  selectDay,
  setStartDate,
  setFinishDate,
  setDuration,
} from "../state/actions/currentGoal"
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_avatar.svg"
import botIcon from "../assets/icons/bot.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center center mt4",
})`
  width: 95%;
`

const _BotIcon = styled.img.attrs({
  className: "w-40 mt5 mb1",
})``

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma2",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Description = styled.p.attrs({
  className: "mono font-4 tc",
})``
const _InnerContainer = styled.div.attrs({
  className: "flex flex-wrap justify-center mt2",
})``
const _Day = styled.div.attrs({
  className: "flex items-center ma1 justify-center br-100",
})`
  background-color: var(--yellow);
  height: 2.5rem;
  width: 2.5rem;
  ${({ selected }) =>
    selected &&
    `border: 0.2rem solid var(--gray);	
`};
`
const _Pill = styled.div.attrs({
  className: "flex items-center mv3 mh1 ph3 justify-center br-pill",
})`
  background-color: var(--yellow);
  height: 2.5rem;
  ${({ selected }) =>
    selected &&
    `border: 0.2rem solid var(--gray);	
`};
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
    days: {},
    durations: {},
    everyDaySelected: false,
    startDate: "",
    endDate: "",
  }

  // get static data from redux and change days array to object to make it easier to edit
  // add selected key for borders
  componentDidMount() {
    const {
      staticData,
      daysOfWeek,
      duration,
      startDate,
      finishDate,
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
      finishDate,
    })
  }

  onDayClick = day => () => {
    const { days } = this.state
    const { selected } = days[day]
    days[day].selected = !selected
    this.setState({
      days,
      everyDaySelected:
        Object.keys(days).filter(day => days[day].selected).length === 7,
    })
  }
  onEveryDayClick = () => {
    const { days } = this.state
    Object.keys(days).forEach(day => {
      days[day].selected = true
    })
    this.setState({ days })
  }

  selectDuration = month => () => {
    const { startDate, durations } = this.state
    const numOfMonth = month[0]
    // start date is only set one time
    const _startDate = startDate || new Date()
    const finishDate = new Date()
    finishDate.setDate(finishDate.getDate() + numOfMonth * 30)
    Object.keys(durations).forEach(d => {
      durations[d].selected = d === month
    })
    this.setState({
      startDate: _startDate,
      finishDate,
      durations,
    })
  }

  saveFunction = () => {
    const { selectDay, setStartDate, setFinishDate, setDuration } = this.props
    const { days, startDate, finishDate, durations } = this.state
    const selectedDays = Object.keys(days).filter(day => days[day].selected)
    const selectedDuration = Object.keys(durations).filter(
      duration => durations[duration].selected
    )[0]
    selectDay(selectedDays)
    setStartDate(startDate)
    setFinishDate(finishDate)
    setDuration(selectedDuration)
  }

  render() {
    const { days, durations, everyDaySelected } = this.state
    const {
      changeView,
      router: { history },
    } = this.props
    const edit = history[history.length - 1] === "EditGoal"

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
        <_Title>Perfect!</_Title>
        <_Description>
          On <u>which days</u> and for <u>how long</u> will you be working on
          your goal
        </_Description>
        <_InnerContainer>
          {Object.keys(days).map(day => (
            <_Day
              key={day}
              selected={days[day].selected}
              onClick={this.onDayClick(day)}
            >
              {day.slice(0, 3)}
            </_Day>
          ))}
        </_InnerContainer>
        <_Pill selected={everyDaySelected} onClick={this.onEveryDayClick}>
          EveryDay
        </_Pill>
        <_Description>for</_Description>
        <_InnerContainer>
          {Object.keys(durations).map(month => (
            <_Pill
              onClick={this.selectDuration(month)}
              key={month}
              selected={durations[month].selected}
            >
              {month}
            </_Pill>
          ))}
        </_InnerContainer>
        {edit ? (
          <SaveButton
            saveFunction={this.saveFunction}
            redirectTo={EditGoal}
            text="SAVE"
          />
        ) : (
          <SaveButton
            saveFunction={this.saveFunction}
            text="NEXT"
            redirectTo={GoalTime}
          />
        )}
      </_Container>
    )
  }
}

GoalDays.propTypes = {
  staticData: PropTypes.object.isRequired,
  daysOfWeek: PropTypes.array,
  duration: PropTypes.string,
  startDate: PropTypes.string,
  finishDate: PropTypes.string,
  selectDay: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setFinishDate: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
}

export default connect(
  ({
    router,
    staticData,
    currentGoal: { daysOfWeek, duration, startDate, finishDate },
  }) => ({
    router,
    daysOfWeek,
    duration,
    startDate,
    finishDate,
    staticData,
  }),
  { selectDay, setStartDate, setFinishDate, setDuration, changeView }
)(GoalDays)
