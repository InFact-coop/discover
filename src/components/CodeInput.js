import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import arrowGo from "../assets/icons/arrow_go.svg"
import Input from "./Input"

const _InputWithButton = styled.div.attrs({
  className: "flex justify-center items-center",
})``

const _SubmitButton = styled.div.attrs({
  className: "br-100 h2 w2 tc",
})`
  background: url(${arrowGo}) no-repeat center center;
  background-color: var(--yellow);
`

class CodeInput extends Component {
  state = {
    formState: {
      code: "",
    },
  }

  onInputChange = e => {
    this.setState({
      ...this.state,
      formState: {
        ...this.state.formState,
        [e.target.name]: e.target.value.trim(),
      },
    })
  }

  onCodeSubmit = e => {
    e.preventDefault()
    const {
      formState: { code },
    } = this.state
    const { verifyCode } = this.props
    verifyCode(code)
  }

  render() {
    const {
      formState: { code },
    } = this.state

    return (
      <_InputWithButton>
        <Input
          className="w-50 h2 ph1"
          type="text"
          onChange={this.onInputChange}
          value={code}
          name="code"
          label="code"
        />
        <_SubmitButton onClick={this.onCodeSubmit} />
      </_InputWithButton>
    )
  }
}

CodeInput.propTypes = {
  verifyCode: PropTypes.func.isRequired,
}

export default CodeInput
