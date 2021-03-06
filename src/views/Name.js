import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

import {
  addStopBounceListener,
  removeStopBounceListener,
} from "../utils/preventBounce"

import { Avatar } from "."
import { clearWelcomeScreen, changeName } from "../state/actions/profile"
import background from "../assets/backgrounds/bg_what_is_your_name.svg"
import botIcon from "../assets/icons/robot_round.png"

import ProgressBar from "../components/ProgressBar"
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
  className: "flex flex-column items-center mt3",
})``
const _BotIcon = styled.img.attrs({
  className: "w-50 mt5 mb1",
})``

const _Question = styled.p.attrs({
  className: "mono font-4",
})``

class Name extends Component {
  state = {
    name: "",
    valid: true,
    submitted: false,
  }

  componentDidMount() {
    const { name, clearWelcomeScreen } = this.props
    this.setState({ name })
    clearWelcomeScreen()
    addStopBounceListener()
  }

  componentWillUnmount() {
    removeStopBounceListener()
  }

  onInputChange = e => {
    const { value } = e.target
    this.setState(prevState => ({
      name: value,
      valid: prevState.submitted ? !!value : true,
    }))
  }

  onBlur = () => {
    const { name, submitted } = this.state
    this.setState({ valid: submitted ? !!name : true })
  }

  saveFunction = () => {
    const { changeName } = this.props
    const { name } = this.state
    changeName(name)
  }

  setInvalid = () => {
    this.setState({ valid: false, submitted: true })
  }

  render() {
    const { name, valid } = this.state
    return (
      <Fragment>
        <_Container>
          <ProgressBar progress={1} />
          <GlobalStyle />
          <_BotIcon src={botIcon} />
          <_Title className="ma2">
            OK,
            <br /> first things first!
          </_Title>
          <_Question>What's your name my friend?</_Question>
          <InputWithValidation
            className="ma4 pa2"
            width="w-80"
            value={name}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            valid={valid}
            validateMsg="Surely you have a name!?"
          />
        </_Container>
        <SaveButton
          valid={!!name}
          setInvalid={this.setInvalid}
          text="THAT'S MY NAME!"
          redirectTo={Avatar}
          saveFunction={this.saveFunction}
        />
      </Fragment>
    )
  }
}

Name.propTypes = {
  name: PropTypes.string,
  changeName: PropTypes.func.isRequired,
}

export default connect(
  ({ profile: { name } }) => ({ name }),
  { changeName, clearWelcomeScreen }
)(Name)
