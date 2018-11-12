import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { verifyCode } from "../state/actions/auth"

import CodeInput from "../components/CodeInput"
import DevelopedBy from "../components/shared/DevelopedBy"

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
  className: "flex flex-column justify-center items-center h-50",
})`
  height: 75vh;
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
        <_Title>{title}</_Title>
        <_Message>{message}</_Message>
        <CodeInput err={err} verifyCode={verifyCode} />
        <DevelopedBy />
      </_Form>
    )
  }
}

export default connect(
  ({ auth: { err } }) => ({
    err,
  }),
  { verifyCode }
)(Code)
