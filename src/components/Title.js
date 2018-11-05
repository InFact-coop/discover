import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"
import changeTextColor from "../state/actions/title"

const Background = styled.div.attrs({
  className: "flex justify-center bg-light-purple",
})``

class Title extends Component {
  constructor() {
    super()
    this.changeColorOnClick = this.changeColorOnClick.bind(this)
  }
  state = {
    name: "discover",
  }

  changeColorOnClick() {
    this.props.changeTextColor()
  }

  render() {
    return (
      <Background onClick={this.changeColorOnClick}>
        <h1 style={{ color: this.props.textColor }}>
          Welcome to {this.state.name}
        </h1>
      </Background>
    )
  }
}

Title.prototypes = {
  textColor: PropTypes.string,
  changeTextColor: PropTypes.func,
}

export default connect(
  ({ title }) => ({
    textColor: title.textColor,
  }),
  { changeTextColor }
)(Title)
