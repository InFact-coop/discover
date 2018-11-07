import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
// import styled from "styled-components"
import { verifyCode } from "../state/actions/code"

// const Background = styled.div.attrs({
//   className: "flex justify-center bg-light-purple",
// })``

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
    const { err } = this.props
    return (
      <div>
        <form onSubmit={this.onCodeSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={code}
            name="code"
            label="code"
          />
          <input type="submit" />
        </form>

        {err && <h3>{err}</h3>}
      </div>
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
