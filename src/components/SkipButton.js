import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { changeView } from "../state/actions/router"
import styled from "styled-components"
import arrowBack from "../assets/icons/arrow_back.svg"

const _Button = styled.div.attrs({
  className: "flex justify-center items-center sans h2 w2",
})`
  position: fixed;
  top: 1.5rem;
  ${({ action }) =>
    action === "back"
      ? `left: 1rem;
         background: url(${arrowBack}) no-repeat center center;`
      : `right: 1rem;
          font-weight: 500;
      `};
`

class SkipButton extends Component {
  onClick = () => {
    const { changeView, to } = this.props
    changeView(to)
  }
  render() {
    const { action } = this.props
    return (
      <_Button action={action} onClick={this.onClick}>
        {action === "skip" && "SKIP"}
      </_Button>
    )
  }
}

SkipButton.prototypes = {
  changeView: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
}

export default connect(
  null,
  { changeView }
)(SkipButton)
