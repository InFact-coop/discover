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
import Input from "../components/Input"

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
    error: {
      name: false,
    },
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
      error: { name: value.length === 0 },
    })
  }
  onBlur = () => {
    const { name } = this.state
    this.setState({ error: { name: name.length === 0 } })
  }

  saveFunction = () => {
    const { changeName } = this.props
    const { name } = this.state
    changeName(name)
  }
  render() {
    const { name, error } = this.state
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
          <Input
            className="w-80 ma4 pa2 font-2 h2"
            value={name}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            inValid={error.name}
          />
        </_Container>
        <SaveButton
          disabled={!name}
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
