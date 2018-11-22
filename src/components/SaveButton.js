import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { changeView } from "../state/actions/router"

const _Button = styled.div.attrs({
  className: "w-100 sans font-3 flex items-center justify-center",
})`
  height: 4.5rem;
  background-color: var(--mid-gray);
  font-weight: 500;
  color: white;
  position: fixed;
  top: 90%;
`

class SaveButton extends Component {
  onClick = () => {
    const { changeView, redirectTo, saveFunction } = this.props
    if (saveFunction) saveFunction()
    changeView(redirectTo)
  }
  render() {
    const { text } = this.props
    return <_Button onClick={this.onClick}> {text} </_Button>
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
