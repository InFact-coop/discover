import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import arrowGo from "../assets/icons/arrow_go.svg"
import { StyledInput } from "./Input"
import { _ValidateMsg } from "./Text"

const _InputWithButton = styled.div.attrs({
  className: "flex justify-center items-center",
})``

const _SubmitButton = styled.div.attrs({
  className: "br-100 h2 w2 tc ml2",
})`
  height: 44px;
  width: 44px;
  background: url(${arrowGo}) no-repeat center center;
  background-color: var(--yellow);
`

const Input = styled(StyledInput)`
  width: 50%;
  margin-left: 0;
  margin-right: 0;
`

const ValidationMsg = ({ valid, children }) => {
  if (!valid) {
    return <_ValidateMsg className="w-80">{children}</_ValidateMsg>
  }
  return <div />
}

class CodeInput extends Component {
  state = {
    formState: {
      code: "",
    },
    valid: true,
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

  onCodeSubmit = async e => {
    e.preventDefault()
    const {
      formState: { code },
    } = this.state
    const { verifyCode } = this.props
    const response = await verifyCode(code)
    if (response && response.err) this.setState({ valid: false })
  }

  setInvalid = () => this.setState({ valid: false })

  render() {
    const {
      formState: { code },
      valid,
    } = this.state

    return (
      <div>
        <_InputWithButton>
          <Input
            className="pa2 mv2"
            type="text"
            onChange={this.onInputChange}
            value={code}
            name="code"
            valid={valid}
          />
          <_SubmitButton
            onClick={e => (code ? this.onCodeSubmit(e) : this.setInvalid())}
          />
        </_InputWithButton>
        <ValidationMsg valid={valid}>
          Oops, something is not quite right! Please try again
        </ValidationMsg>
      </div>
    )
  }
}

CodeInput.propTypes = {
  verifyCode: PropTypes.func.isRequired,
}

export default CodeInput
