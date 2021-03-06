import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import goalDaysToGo from "../utils/goalDaysToGo"
import { ReadTips } from "../views"
import { selectTopic } from "../state/actions/tips"
import { changeView } from "../state/actions/router"

const _Container = styled.div.attrs({
  className: "flex flex-column justify-center items-center mb4 ",
})``

const _TextMono = styled.p.attrs({
  className: "mono font-4 tc mb1 dark-gray",
})``
const _TextSans = styled.div.attrs({
  className: "sans font-3 tc dark-gray",
})`
  font-weight: 500;
`

class GoalDetails extends Component {
  state = {
    daysString: "",
    techniquesString: "",
    daysToGo: "",
  }

  goToTips = technique => {
    const { selectTopic, changeView } = this.props
    selectTopic(technique)
    changeView(ReadTips)
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

    const timeOfDaySet = timeOfDay.time !== ":"

    const techniqueToLink = technique => {
      const _LinkToTips = () => (
        <u className="blue" onClick={() => this.goToTips(technique)}>
          {technique}
        </u>
      )

      if (
        techniques.length === 1 ||
        r.indexOf(technique, techniques) === techniques.length - 1
      ) {
        return (
          <p key={r.indexOf(technique, techniques)}>
            <_LinkToTips />
            &nbsp;
          </p>
        )
      }

      if (r.indexOf(technique, techniques) === techniques.length - 2) {
        return (
          <p key={r.indexOf(technique, techniques)}>
            <_LinkToTips />
            &nbsp;and&nbsp;
          </p>
        )
      }

      return (
        <p key={r.indexOf(technique, techniques)}>
          <_LinkToTips />
          ,&nbsp;
        </p>
      )
    }

    switch (section) {
      case "description":
        return (
          <_Container>
            <_TextMono>My goal</_TextMono>
            <_TextSans>{description}</_TextSans>
          </_Container>
        )
      case "technique":
        if (techniques.length)
          return (
            <_Container>
              <_TextMono>by using</_TextMono>
              <_TextSans>{r.map(techniqueToLink)(techniques)}</_TextSans>
            </_Container>
          )
        return <div />
      case "days":
        if (daysOfWeek.length)
          return (
            <_Container>
              <_TextMono>and you will do it</_TextMono>
              <_TextSans>
                {`Every ${
                  daysOfWeek.length === 7 ? "day" : this.toSentence(daysOfWeek)
                }`}
              </_TextSans>
            </_Container>
          )
        return <div />
      case "time":
        if (timeOfDay.description)
          return (
            <_Container>
              <_TextMono>preferably</_TextMono>
              {timeOfDaySet ? (
                <_TextSans>
                  {timeOfDay.description}, at {timeOfDay.time}
                </_TextSans>
              ) : (
                <_TextSans>{timeOfDay.description}</_TextSans>
              )}
            </_Container>
          )
        return <div />
      case "duration":
        if (duration)
          return (
            <_Container>
              <_TextMono>for</_TextMono>
              <_TextSans>{duration}</_TextSans>
            </_Container>
          )
        return <div />
      case "progress":
        if (scheduledFinishDate)
          return (
            <_Container>
              <_TextMono>and you have</_TextMono>
              <p className="mono font-3 tc red">
                {goalDaysToGo(scheduledFinishDate)}
              </p>
            </_Container>
          )
        return <div />
    }
  }
}

GoalDetails.propTypes = {
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
  }),
  { selectTopic, changeView }
)(GoalDetails)
