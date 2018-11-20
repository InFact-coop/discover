import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { backToPreviousView } from "../state/actions/router"
import { archiveGoal } from "../state/actions/pastGoals"
import { SetGoal } from "."
import botIcon from "../assets/icons/bot.svg"
import daysToGo from "../utils/goalDaysToGo"

const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center",
})`
  height: 85vh;
`
const _BotIcon = styled.img.attrs({
  className: "mb1",
})`
  width: 10rem;
`
const _Title = styled.p.attrs({
  className: "mono font-1 tc ma4",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Description = styled.p.attrs({
  className: "mono w-70 font-4 tc mb3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Hint = styled.p.attrs({
  className: "sans b underline font-4 ma3",
})``

class NewGoalConfirmation extends Component {
  saveFunction = () => {
    const { currentGoal, archiveGoal } = this.props
    archiveGoal(currentGoal)
  }
  render() {
    const { name, finishDate, backToPreviousView } = this.props
    return (
      <_Container>
        <BackButton />
        <_BotIcon src={botIcon} />
        <_Title>Hey {name},</_Title>
        <_Description>
          ARE YOU SURE?
          <br /> It’s good to stick to one goal at a time and you only have
          <span style={{ color: "var(--red)" }}> {daysToGo(finishDate)}</span>
          <br /> <br /> But if its not the one right for you, then no problem,
          let’s do it.
        </_Description>
        <_Hint onClick={() => backToPreviousView()}>TAKE ME BACK</_Hint>
        <SaveButton
          redirectTo={SetGoal}
          saveFunction={this.saveFunction}
          text="I WANT TO CHANGE MY GOAL"
        />
      </_Container>
    )
  }
}

export default connect(
  ({ profile: { name }, currentGoal: { finishDate } }) => ({
    name,
    finishDate,
  }),
  { backToPreviousView, archiveGoal }
)(NewGoalConfirmation)
