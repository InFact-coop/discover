import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

import { Avatar, Technique, EditGoal } from "."
import { changeGoal } from "../state/actions/currentGoal"
import background from "../assets/backgrounds/bg_what_is_your_goal.svg"

import ProgressBar from "../components/ProgressBar"
import BackButton from "../components/BackButton"
import SaveButton from "../components/SaveButton"
import { _Title } from "../components/Text"
import Input from "../components/Input"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center",
})`
  height: 90vh;
`

const _Question = styled.p.attrs({
  className: "mono font-3 ma2 tc",
})``

class SetGoal extends Component {
  state = {
    goal: "",
    error: {
      goal: false,
    },
  }

  componentDidMount() {
    const { description } = this.props
    this.setState({ goal: description })
  }
  onInputChange = e => {
    const { value } = e.target
    this.setState({ goal: value })
  }
  onBlur = () => {
    const { goal } = this.state
    this.setState({ error: { goal: goal.length === 0 } })
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
    const { goal, error } = this.state
    const edit = history[history.length - 1] === "EditGoal"
    return (
      <_Container>
        <GlobalStyle />
        {!edit && <ProgressBar progress={3} />}
        <BackButton action="back" to={Avatar} />
        <_Title>It's goal time, {name}!</_Title>
        <_Question>What should I set as your DISCOVER goal?</_Question>
        <Input
          as="textarea"
          className="w-90 ba ph3 pv2 font-3 br4 h5"
          placeholder="My goal is..."
          value={goal}
          onBlur={this.onBlur}
          onChange={this.onInputChange}
          inValid={error.goal}
        />
        {edit ? (
          <SaveButton
            disabled={!goal}
            saveFunction={this.saveFunction}
            redirectTo={EditGoal}
            text="SAVE"
          />
        ) : (
          <SaveButton
            disabled={!goal}
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
