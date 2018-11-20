import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import SkipButton from "../components/SkipButton"
import { GoalTime, AllSet } from "."
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_RECAP.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center center",
})`
  margin-top: 17%;
`
const _Title = styled.p.attrs({
  className: "mono font-1 tc ma2",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Description = styled.p.attrs({
  className: "mono font-3 tc ma2",
})``

const _InnerContainer = styled.div.attrs({
  className: "flex flex-column items-center ma3 pa5 br4",
})`
  background-color: var(--white-70);
  height: 55vh;
  width: 90%;
`
const _DescriptionContainer = styled.div.attrs({
  className: "flex flex-column justify-center items-center ma3 ",
})``

const _TextMono = styled.p.attrs({
  className: "mono font-4 tc",
})``
const _TextSans = styled.p.attrs({
  className: "mono font-4 tc",
})`
  font-weight: 500;
`

const _NextButton = styled.div.attrs({
  className: "w-60 sans font-3 flex items-center justify-center br-pill",
})`
  height: 4.5rem;
  background-color: var(--mid-gray);
  font-weight: 500;
  color: white;
`

class Recap extends Component {
  state = {
    daysString: "",
    techniquesString: "",
  }

  toSentence = arr =>
    arr.length > 1
      ? `${arr.slice(0, arr.length - 1).join(", ")} and ${arr[arr.length - 1]}`
      : arr[0]

  componentDidMount() {
    const { techniques, daysOfWeek } = this.props
    this.setState({
      daysString: `Every ${
        daysOfWeek.length === 7 ? "day" : this.toSentence(daysOfWeek)
      }`,
      techniquesString: this.toSentence(techniques),
    })
  }
  render() {
    const { description, duration, timeOfDay, changeView } = this.props
    const { daysString, techniquesString } = this.state
    return (
      <_Container>
        <GlobalStyle />
        <SkipButton action="back" to={GoalTime} />
        <_Title>Oky, Doky!</_Title>
        <_Description>So let's recap</_Description>
        <_InnerContainer>
          <_DescriptionContainer>
            <_TextMono>Your goal is</_TextMono>
            <_TextSans>{description}</_TextSans>
          </_DescriptionContainer>
          <_DescriptionContainer>
            <_TextMono>By using</_TextMono>
            <_TextSans>
              <u>{techniquesString}</u>
            </_TextSans>
          </_DescriptionContainer>
          <_DescriptionContainer>
            <_TextMono>And you will do it</_TextMono>
            <_TextSans> {daysString}</_TextSans>
          </_DescriptionContainer>
          <_DescriptionContainer>
            <_TextMono>preferably</_TextMono>
            <_TextSans>
              {timeOfDay.description}, at {timeOfDay.time}
            </_TextSans>
          </_DescriptionContainer>
          <_DescriptionContainer>
            <_TextMono>for</_TextMono>
            <_TextSans>{duration}</_TextSans>
          </_DescriptionContainer>
        </_InnerContainer>
        <_NextButton onClick={() => changeView(AllSet)}>
          COOL LET'S GO
        </_NextButton>
      </_Container>
    )
  }
}

Recap.proptypes = {
  description: PropTypes.string.isRequired,
  duration: PropTypes.string,
  daysOfWeek: PropTypes.array,
  timeOfDay: PropTypes.object,
  techniques: PropTypes.array,
}
export default connect(
  ({
    currentGoal: { description, duration, daysOfWeek, timeOfDay, techniques },
  }) => ({
    description,
    duration,
    daysOfWeek,
    techniques,
    timeOfDay,
  }),
  { changeView }
)(Recap)
