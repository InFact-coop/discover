import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { changeView, backToPreviousView } from "../state/actions/router"
import styled from "styled-components"
import arrowBack from "../assets/icons/arrow_back.svg"

const _Button = styled.div.attrs({
  className: "flex justify-center items-center sans h2 w2",
})`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  background: url(${arrowBack}) no-repeat center center;
  z-index: 2;
`

class BackButton extends Component {
  onClick = () => {
    const { backToPreviousView, redirectTo, changeView } = this.props
    if (redirectTo) return changeView(redirectTo)
    backToPreviousView()
  }

  render() {
    return <_Button onClick={this.onClick} />
  }
}

BackButton.propTypes = {
  changeView: PropTypes.func.isRequired,
  backToPreviousView: PropTypes.func.isRequired,
}

export default connect(
  null,
  { changeView, backToPreviousView }
)(BackButton)
