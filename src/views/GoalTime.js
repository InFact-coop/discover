import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import SkipButton from "../components/SkipButton"
import { GoalDays, Recap } from "."
import { selectTimeOfDay, changeTime } from "../state/actions/currentGoal"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import background from "../assets/backgrounds/bg_when.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center",
})`
  margin-top: 25%;
`

const _Title = styled.p.attrs({
  className: "mono font-1 ma2",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Description = styled.p.attrs({
  className: "mono font-4 w-90 tc mt1 mb3",
})`
  color: var(--gray);
`

const _Hint = styled.p.attrs({
  className: "sans font-3 tc mt4 mb2",
})`
  color: var(--dark-green);
`
const _TimeContainer = styled.div.attrs({
  className: "flex justify-center items-center",
})``
const _TimeDiv = styled.div.attrs({
  className: "flex items-center ma1 justify-center br-100",
})`
  background-color: var(--yellow);
  height: 3.5rem;
  width: 3.5rem;
`
const _TimeInput = styled.input.attrs({
  className: "w-60 h-50 tc font-2 sans",
})`
  border-style: hidden;
  color: var(--mid-gray);
`

class GoalTime extends Component {
  state = {
    times: [],
    hours: "",
    minutes: "",
  }

  componentDidMount() {
    const { staticData, timeOfDay } = this.props
    const [hours, minutes] = timeOfDay.time.split(":")
    this.setState({
      hours,
      minutes,
      times: staticData.times.map(time => ({
        ...time,
        selected: timeOfDay.description === time.title,
      })),
    })
  }

  onCardClick = title => () => {
    const { times } = this.state
    this.setState({
      times: times.map(time => ({ ...time, selected: time.title === title })),
    })
  }

  onInputChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  saveFunction = () => {
    const { selectTimeOfDay, changeTime } = this.props
    const { times, hours, minutes } = this.state
    const selectedTime = times.filter(({ selected }) => selected)[0].title
    selectTimeOfDay(selectedTime)
    changeTime(`${hours}:${minutes}`)
  }
  render() {
    const { times, hours, minutes } = this.state
    return (
      <Fragment>
        <GlobalStyle />
        <ProgressBar progress={6} />
        <SkipButton action="back" to={GoalDays} />
        <SkipButton action="skip" to={Recap} />
        <_Container>
          <_Title> Awesome!</_Title>
          <_Description>
            Okay, And when do you think you are most likely to work on your
            goal?
          </_Description>
        </_Container>
        <Carousel>
          {times.map(({ title, image, backgroundColor, selected }) => (
            <Card
              key={title}
              width="17rem"
              height="15rem"
              title={title}
              image={image}
              backgroundColor={backgroundColor}
              selected={selected}
              onCardClick={this.onCardClick(title)}
            />
          ))}
        </Carousel>
        <_Hint>at</_Hint>
        <_TimeContainer>
          <_TimeDiv>
            <_TimeInput
              name="hours"
              type="number"
              value={hours}
              min={0}
              max={23}
              onChange={this.onInputChange}
            />
          </_TimeDiv>
          :
          <_TimeDiv>
            <_TimeInput
              name="minutes"
              type="number"
              value={minutes}
              min={0}
              max={59}
              onChange={this.onInputChange}
            />
          </_TimeDiv>
        </_TimeContainer>
        <SaveButton
          saveFunction={this.saveFunction}
          text="NEXT"
          redirectTo={Recap}
        />
      </Fragment>
    )
  }
}

GoalTime.proptypes = {
  timeOfDay: PropTypes.object,
  staticData: PropTypes.object.isRequired,
  selectTimeOfDay: PropTypes.func.isRequired,
  changeTime: PropTypes.func.isRequired,
}

export default connect(
  ({ staticData, currentGoal: { timeOfDay } }) => ({ timeOfDay, staticData }),
  { selectTimeOfDay, changeTime }
)(GoalTime)
