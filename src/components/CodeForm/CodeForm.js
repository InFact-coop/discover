import { Component } from "react"
import { connect } from "react-redux"
// import PropTypes from "prop-types"
import CodeInput from "./CodeInput"

import { Title, Message, Form } from "./style"

class Code extends Component {
  state = {
    title: "DISCOVERbot",
    message: "Hey you, what's the code? :)",
  }

  render() {
    const { err } = this.props
    const { title, message } = this.state

    return (
      <Form>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <CodeInput />
        {err && <h3>{err}</h3>}
      </Form>
    )
  }
}

Code.prototypes = {}

export default connect(
  ({ code: { err } }) => ({
    err,
  }),
  {}
)(Code)
