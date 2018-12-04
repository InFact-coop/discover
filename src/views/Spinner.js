import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { changeView } from "../state/actions/router"
import * as r from "ramda" //eslint-disable-line import/no-namespace
import { AllSet, Name, Home } from "."
import styled, { createGlobalStyle } from "styled-components"
import spinner from "../assets/icons/spinner_big.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(78, 205, 196, 0.25);
  }
`

const _Container = styled.div.attrs({
  className: "flex flex-column justify-center items-center",
})`
  height: 90vh;
`

const _Image = styled.img.attrs({
  className: "ma3 ",
})``

const nextView = previousView => {
  switch (previousView) {
    case "Recap":
      return AllSet

    case "NewGoalConfirmation":
      return Name

    default:
      return Home
  }
}

class Spinner extends Component {
  componentDidMount() {
    const {
      changeView,
      router: { history },
    } = this.props

    //eslint-disable-next-line
    setTimeout(() => {
      changeView(nextView(r.last(history)))
    }, 2000)
  }
  //eslint-disable-next-line
  render() {
    return (
      <_Container>
        <GlobalStyle />
        <_Image src={spinner} />
      </_Container>
    )
  }
}

Spinner.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default connect(
  ({ router }) => ({ router }),
  { changeView }
)(Spinner)
