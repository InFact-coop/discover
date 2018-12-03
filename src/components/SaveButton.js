import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { changeView } from "../state/actions/router"

const _Button = styled.button.attrs({
  className:
    "w-100 sans font-4 br flex items-center justify-center white bg-dark-gray fw6 ttu fixed bottom-0 bn",
})`
  height: 4.5rem;
`

class SaveButton extends Component {
  onClick = () => {
    const { changeView, redirectTo, saveFunction } = this.props
    if (saveFunction) saveFunction()
    changeView(redirectTo)
  }
  render() {
    const { text, disabled } = this.props

    return (
      <_Button disabled={disabled} onClick={this.onClick}>
        {text}
      </_Button>
    )
  }
}

SaveButton.propTypes = {
  changeView: PropTypes.func.isRequired,
  redirectTo: PropTypes.string.isRequired,
  saveFunction: PropTypes.func,
}

export default connect(
  null,
  { changeView }
)(SaveButton)
