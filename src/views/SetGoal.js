import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import BackButton from "../components/BackButton"
import SaveButton from "../components/SaveButton"
import { Avatar, Technique, EditGoal } from "."
import { changeGoal } from "../state/actions/currentGoal"
import background from "../assets/backgrounds/bg_what_is_your_goal.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center mt4",
})`
  height: 80vh;
`

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Question = styled.p.attrs({
  className: "mono font-3 ma2 tc",
})``

const _Input = styled.textarea.attrs({
  className: "w-90 ba ma4 ph3 pv2 sans font-3",
})`
  border-color: var(--moon-gray);
  border-width: thin;
  border-radius: 1.3rem;
  background: var(--white-30);
  height: 40%;
  color: var(--near-black);
`

class SetGoal extends Component {
  state = {
    goal: "",
  }

  componentDidMount() {
    const { description } = this.props
    this.setState({ goal: description })
  }
  onInputChange = e => {
    const { value } = e.target
    this.setState({ goal: value })
  }
  saveFunction = () => {
    const { changeGoal } = this.props
    const { goal } = this.state
    changeGoal(goal)
  }
  render() {
    const {
      name,
      router: { history },
    } = this.props
    const { goal } = this.state
    const edit = history[history.length - 1] === "EditGoal"
    return (
      <_Container>
        <GlobalStyle />
        {!edit && <ProgressBar progress={3} />}
        <BackButton action="back" to={Avatar} />
        <_Title>It's goal time, {name}!</_Title>
        <_Question>What should I set as your DISCOVER goal?</_Question>
        <_Input
          placeholder="My goal is..."
          value={goal}
          onChange={this.onInputChange}
        />
        {edit ? (
          <SaveButton
            saveFunction={this.saveFunction}
            redirectTo={EditGoal}
            text="SAVE"
          />
        ) : (
          <SaveButton
            saveFunction={this.saveFunction}
            redirectTo={Technique}
            text="YUP, NEXT"
          />
        )}
      </_Container>
    )
  }
}

SetGoal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  changeGoal: PropTypes.func.isRequired,
}
export default connect(
  ({ router, profile: { name }, currentGoal: { description } }) => ({
    name,
    description,
    router,
  }),
  { changeGoal }
)(SetGoal)
