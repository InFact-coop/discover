import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { verifyCode } from "../../state/actions/code"

import { CodeInput, SubmitButton, InputWithButton } from "./style"

class Code extends Component {
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
        [e.target.name]: e.target.value,
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
      <InputWithButton>
        <CodeInput
          type="text"
          onChange={this.onInputChange}
          value={code}
          name="code"
          label="code"
        />
        <SubmitButton onClick={this.onCodeSubmit} />
      </InputWithButton>
    )
  }
}

Code.prototypes = {
  verifyCode: PropTypes.func.isRequired,
}

export default connect(
  ({ code: { err } }) => ({
    err,
  }),
  { verifyCode }
)(Code)
