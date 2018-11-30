import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { changeView } from "../state/actions/router"
import { Home } from "."
import styled, { createGlobalStyle } from "styled-components"
import welldone from "../assets/icons/welldone.svg"

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
  className: "ma3",
})``

const _Text = styled.p.attrs({
  className: "mono ma3 font-1 dark-gray",
})`
  font-weight: 500;
`

class AllSet extends Component {
  componentDidMount() {
    const { changeView } = this.props
    setTimeout(() => {
      changeView(Home)
    }, 1500)
  }
  //eslint-disable-next-line
  render() {
    return (
      <_Container>
        <GlobalStyle />
        <_Image src={welldone} />
        <_Text> All set! </_Text>
      </_Container>
    )
  }
}

AllSet.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default connect(
  null,
  { changeView }
)(AllSet)
