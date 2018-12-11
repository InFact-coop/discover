import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import * as r from "ramda" //eslint-disable-line

import { Recap, EditGoal } from "."
import { selectTimeOfDay, changeTime } from "../state/actions/currentGoal"
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_when.svg"

import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import { _Title } from "../components/Text"
import ValidationMsg from "../components/ValidationMsg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center mt3",
})``

const _Description = styled.p.attrs({
  className: "mono font-4 w-90 tc mt1 dark-gray center",
})``

const _Hint = styled.p.attrs({
  className: "sans font-3 tc mt4 mb2 dark-green center",
})``

const _TimeContainer = styled.div.attrs({
  className: "flex justify-center items-center",
})``

const _TimeDiv = styled.div.attrs({
  className: "flex items-center ma1 justify-center br-100 bg-yellow",
})`
  height: 3.5rem;
  width: 3.5rem;
`

const _TimeInput = styled.select.attrs({
  className: "w-60 h-50 tc font-3 sans bg-yellow center outline-0 dark-gray",
})`
  border-style: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
`

const _SkipButton = styled.div.attrs({
  className: "flex justify-center items-center sans h2 w2",
})`
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  font-weight: 500;
`

class GoalTime extends Component {
  state = {
    times: [],
    hours: "",
    minutes: "",
    valid: true,
    submitted: false,
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
    const { times, submitted } = this.state
    const updatedTimes = times.map(time => ({
      ...time,
      selected: time.title === title,
    }))

    const timeHasBeenSelected = r.any(r.propEq("selected", true))(updatedTimes)

    this.setState({
      times: updatedTimes,
      valid: submitted ? timeHasBeenSelected : true,
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

  setInvalid = () => this.setState({ valid: false, submitted: true })

  render() {
    const { times, hours, minutes, valid } = this.state
    const {
      changeView,
      timeOfDay,
      router: { history },
    } = this.props
    const edit = history[history.length - 1] === "EditGoal"
    const timeHasBeenSelected = r.any(r.propEq("selected", true))(times)

    return (
      <Fragment>
        <GlobalStyle />
        {!edit && (
          <Fragment>
            <ProgressBar progress={6} />
            <_SkipButton
              onClick={() => {
                changeView(Recap)
              }}
            >
              SKIP
            </_SkipButton>
          </Fragment>
        )}
        <BackButton />
        <_Container>
          <div className="relative mb4">
            <_Title className="mv2">Awesome!</_Title>
            <_Description>
              Okay, And when do you think you are most likely to work on your
              goal?
            </_Description>
            <ValidationMsg valid={valid} bottom="-22px">
              Please make a selection or skip
            </ValidationMsg>
          </div>
          <Carousel
            initialIndex={
              timeOfDay.description &&
              times.map(t => t.title).indexOf(timeOfDay.description)
            }
          >
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
                value={hours}
                onChange={this.onInputChange}
              >
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </_TimeInput>
            </_TimeDiv>
            :
            <_TimeDiv>
              <_TimeInput
                name="minutes"
                value={minutes}
                onChange={this.onInputChange}
              >
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </_TimeInput>
            </_TimeDiv>
          </_TimeContainer>
        </_Container>
        <SaveButton
          saveFunction={this.saveFunction}
          redirectTo={edit ? EditGoal : Recap}
          text={edit ? "SAVE" : "NEXT"}
          valid={timeHasBeenSelected}
          setInvalid={this.setInvalid}
        />
      </Fragment>
    )
  }
}

GoalTime.propTypes = {
  timeOfDay: PropTypes.object,
  staticData: PropTypes.object.isRequired,
  selectTimeOfDay: PropTypes.func.isRequired,
  changeTime: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
}

export default connect(
  ({ router, staticData, currentGoal: { timeOfDay } }) => ({
    timeOfDay,
    staticData,
    router,
  }),
  { selectTimeOfDay, changeTime, changeView }
)(GoalTime)
