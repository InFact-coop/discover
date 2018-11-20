import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import goalDaysToGo from "../utils/goalDaysToGo"

const _Container = styled.div.attrs({
  className: "flex flex-column justify-center items-center ma3 ",
})``

const _TextMono = styled.p.attrs({
  className: "mono font-4 tc mb1",
})``
const _TextSans = styled.p.attrs({
  className: "mono font-4 tc",
})`
  font-weight: 500;
`

class GoalDetails extends Component {
  state = {
    daysString: "",
    techniquesString: "",
    daysToGo: "",
  }

  toSentence = arr =>
    arr.length > 1
      ? `${arr.slice(0, arr.length - 1).join(", ")} and ${arr[arr.length - 1]}`
      : arr[0]

  render() {
    const {
      section,
      description,
      duration,
      timeOfDay,
      daysOfWeek,
      scheduledFinishDate,
      techniques,
    } = this.props

    switch (section) {
      case "description":
        return (
          <_Container>
            <_TextMono>Your goal is</_TextMono>
            <_TextSans>{description}</_TextSans>
          </_Container>
        )
      case "technique":
        return (
          <_Container>
            <_TextMono>By using</_TextMono>
            <_TextSans>
              <u>{this.toSentence(techniques)}</u>
            </_TextSans>
          </_Container>
        )
      case "days":
        return (
          <_Container>
            <_TextMono>And you will do it</_TextMono>
            <_TextSans>
              {`Every ${
                daysOfWeek.length === 7 ? "day" : this.toSentence(daysOfWeek)
              }`}
            </_TextSans>
          </_Container>
        )
      case "time":
        return (
          <_Container>
            <_TextMono>preferably</_TextMono>
            <_TextSans>
              {timeOfDay.description}, at {timeOfDay.time}
            </_TextSans>
          </_Container>
        )
      case "duration":
        return (
          <_Container>
            <_TextMono>for</_TextMono>
            <_TextSans>{duration}</_TextSans>
          </_Container>
        )
      case "progress":
        return (
          <_Container>
            <_TextMono>and you have</_TextMono>
            <p className="mono font-3 tc" style={{ color: "var(--light-red)" }}>
              {goalDaysToGo(scheduledFinishDate)}
            </p>
          </_Container>
        )
    }
  }
}

GoalDetails.prototypes = {
  description: PropTypes.string.isRequired,
  duration: PropTypes.string,
  daysOfWeek: PropTypes.array,
  timeOfDay: PropTypes.object,
  techniques: PropTypes.array,
}
export default connect(
  ({
    currentGoal: {
      description,
      duration,
      daysOfWeek,
      timeOfDay,
      techniques,
      scheduledFinishDate,
    },
  }) => ({
    description,
    duration,
    daysOfWeek,
    techniques,
    timeOfDay,
    scheduledFinishDate,
  })
)(GoalDetails)
