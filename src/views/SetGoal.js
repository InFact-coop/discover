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
import { InputWithValidation } from "../components/Input"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center center",
})`
  height: calc(100vh - 4.5rem);
  width: 99%;
`

const _Question = styled.p.attrs({
  className: "mono font-3 ma2 tc",
})``

class SetGoal extends Component {
  state = {
    goal: "",
    valid: true,
    submitted: false,
  }

  componentDidMount() {
    const { description } = this.props
    this.setState({ goal: description })
  }

  onInputChange = e => {
    const { value } = e.target
    const { submitted } = this.state
    this.setState({ goal: value, valid: submitted ? !!value : true })
  }

  onBlur = () => {
    const { goal, submitted } = this.state
    this.setState({ valid: submitted ? !!goal : true })
  }

  saveFunction = () => {
    const { changeGoal } = this.props
    const { goal } = this.state
    changeGoal(goal)
  }

  setInvalid = () => {
    this.setState({ valid: false, submitted: true })
  }

  render() {
    const {
      name,
      router: { history },
    } = this.props
    const { goal, valid } = this.state
    const edit = history[history.length - 1] === "EditGoal"

    return (
      <_Container>
        <GlobalStyle />
        {!edit && <ProgressBar progress={3} />}
        <BackButton action="back" to={Avatar} />
        <div>
          <_Title>It's goal time, {name}!</_Title>
          <_Question>What should I set as your DISCOVER goal?</_Question>
          <InputWithValidation
            as="textarea"
            className="ba ph3 pv2 font-3 br4 h5"
            width="w-90"
            placeholder="My goal is..."
            value={goal}
            onBlur={this.onBlur}
            onChange={this.onInputChange}
            valid={valid}
            validateMsg="You'll have to set your goal before we continue"
          />
        </div>
        <SaveButton
          valid={!!goal}
          setInvalid={this.setInvalid}
          saveFunction={this.saveFunction}
          redirectTo={edit ? EditGoal : Technique}
          text={edit ? "SAVE" : "YUP, NEXT"}
        />
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
