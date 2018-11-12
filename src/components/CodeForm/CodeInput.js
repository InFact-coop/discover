import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { verifyCode } from "../../state/actions/code"
import arrowGo from "../../assets/icons/arrow_go.svg"

const _InputWithButton = styled.div.attrs({
  className: "flex justify-center items-center",
})``

const _CodeInput = styled.input.attrs({
  className: "w-50 h2 ba ma2 br2",
})`
  border-color: var(--moon-gray);
  border-width: thin;
`

const _SubmitButton = styled.div.attrs({
  className: "br-100 h2 w2 tc",
})`
  background: url(${arrowGo}) no-repeat center center;
  background-color: var(--yellow);
`

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
      <_InputWithButton>
        <_CodeInput
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

Code.prototypes = {
  verifyCode: PropTypes.func.isRequired,
}

export default connect(
  ({ code: { err } }) => ({
    err,
  }),
  { verifyCode }
)(Code)
