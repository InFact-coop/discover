import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { backToPreviousView } from "../state/actions/router"
import { archiveGoal, clearCurrentGoal } from "../state/actions/pastGoals"
import { Spinner } from "."
import botIcon from "../assets/icons/robot_round.png"
import daysToGo from "../utils/goalDaysToGo"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(78, 205, 196, 0.25);
  }
`

const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center",
})`
  height: 90vh;
`
const _BotIcon = styled.img.attrs({
  className: "mb1",
})`
  width: 10rem;
`
const _Title = styled.p.attrs({
  className: "mono font-1 tc ma4 dark-gray",
})`
  font-weight: 500;
`
const _Description = styled.p.attrs({
  className: "mono w-70 font-4 tc mb3 dark-gray",
})`
  font-weight: 500;
`
const _Hint = styled.p.attrs({
  className: "sans b underline font-4 ma3 dark-gray",
})``

class NewGoalConfirmation extends Component {
  saveFunction = async () => {
    const { currentGoal, archiveGoal, clearCurrentGoal } = this.props
    const actualFinishDate = new Date()
    archiveGoal({ ...currentGoal, actualFinishDate })
    clearCurrentGoal()
  }
  render() {
    const {
      name,
      currentGoal: { scheduledFinishDate },
      backToPreviousView,
    } = this.props
    return (
      <_Container>
        <GlobalStyle />
        <BackButton />
        <_BotIcon src={botIcon} />
        <_Title>Hey {name},</_Title>
        <_Description>
          ARE YOU SURE?
          <br /> It’s good to stick to one goal at a time and you only have
          <span style={{ color: "var(--red)" }}>
            {` ${daysToGo(scheduledFinishDate)}`}
          </span>
          <br /> <br /> But if its not the one right for you, then no problem,
          let’s do it.
        </_Description>
        <_Hint onClick={() => backToPreviousView()}>TAKE ME BACK</_Hint>
        <SaveButton
          redirectTo={Spinner}
          saveFunction={this.saveFunction}
          text="I WANT TO CHANGE MY GOAL"
        />
      </_Container>
    )
  }
}

export default connect(
  ({ profile: { name }, currentGoal }) => ({
    name,
    currentGoal,
  }),
  {
    backToPreviousView,
    archiveGoal,
    clearCurrentGoal,
  }
)(NewGoalConfirmation)
