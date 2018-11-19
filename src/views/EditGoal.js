import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { changeView } from "../state/actions/router"
import { Home, SetGoal, Technique, GoalDays, GoalTime } from "."
import botIcon from "../assets/icons/bot.svg"

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
  className: "mono font-1 tc ma2",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Question = styled.p.attrs({
  className: "mono w-70 font-4 tc mb3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Button = styled.div.attrs({
  className: "flex justify-center items-center ba br2 mv1 sans font-4",
})`
  background-color: white;
  color: var(--blue);
  border-color: var(--blue);
  width: 22rem;
  height: 3rem;
`

class EditGoal extends Component {
  state = {
    views: [
      { text: "Goal's wording", view: SetGoal },
      { text: "Techniques I use", view: Technique },
      { text: "Days and duration", view: GoalDays },
      { text: "Time of the day I dedicate to my goal", view: GoalTime },
    ],
  }
  render() {
    const { name, changeView } = this.props
    const { views } = this.state
    return (
      <_Container>
        <_BotIcon src={botIcon} />
        <BackButton />
        <_Title> Hey {name},</_Title>
        <_Question> What part of your goal you would like to edit? </_Question>
        {views.map(({ text, view }) => (
          <_Button key={text} onClick={() => changeView(view)}>
            {text}
          </_Button>
        ))}
        <SaveButton text="DONE" redirectTo={Home} />
      </_Container>
    )
  }
}

EditGoal.prototypes = {
  name: PropTypes.string.isRequired,
}

export default connect(
  ({ profile: { name } }) => ({ name }),
  { changeView }
)(EditGoal)