import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

import { Avatar } from "."
import { changeName } from "../state/actions/profile"
import { clearWelcomeScreen } from "../state/actions/welcome"
import background from "../assets/backgrounds/bg_what_is_your_name.svg"
import botIcon from "../assets/icons/bot.svg"

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
})`
  height: 90vh;
`
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
  }

  componentDidMount() {
    const { name, clearWelcomeScreen } = this.props
    this.setState({ name })
    clearWelcomeScreen()
  }

  onInputChange = e => {
    const { value } = e.target
    this.setState({
      name: value,
      valid: !!value,
    })
  }

  onBlur = () => {
    const { name } = this.state
    this.setState({ valid: !!name })
  }

  saveFunction = () => {
    const { changeName } = this.props
    const { name } = this.state
    changeName(name)
  }

  setInvalid = () => {
    this.setState({ valid: false })
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
            <br /> First things first!
          </_Title>
          <_Question>what's your name my friend?</_Question>
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
