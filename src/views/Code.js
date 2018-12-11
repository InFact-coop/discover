import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { verifyCode } from "../state/actions/auth"
import CodeInput from "../components/CodeInput"
import DevelopedBy from "../components/shared/DevelopedBy"
import background from "../assets/backgrounds/bg_splash.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`

const _Title = styled.p.attrs({
  className: "flex justify-center ma6 mono font-1",
})`
  color: var(--dark-gray);
`

const _Message = styled.p.attrs({
  className: "flex justify-center ma2 mono font-4",
})`
  color: var(--dark-gray);
`
const _Form = styled.div.attrs({
  className: "flex flex-column items-center",
})`
  margin-top: 5rem;
`

class Code extends Component {
  state = {
    title: "DISCOVERbot",
    message: "Hey you, what's the code? :)",
  }

  render() {
    const { title, message } = this.state
    const { err, verifyCode } = this.props

    return (
      <_Form>
        <GlobalStyle />
        <_Title>{title}</_Title>
        <_Message>{message}</_Message>
        <CodeInput err={err} verifyCode={verifyCode} />
        <DevelopedBy />
      </_Form>
    )
  }
}

Code.propTypes = {
  err: PropTypes.object,
  verifyCode: PropTypes.func.isRequired,
}

export default connect(
  ({ auth: { err } }) => ({
    err,
  }),
  { verifyCode }
)(Code)
