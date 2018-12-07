import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const _FlickityContainer = styled.div.attrs({
  className: "w-100",
})``

class Carousel extends Component {
  state = { Flickity: null }
  constructor(props) {
    super(props)
    if (typeof window !== "undefined") {
      this.state.Flickity = require("react-flickity-component")
    }
  }
  render() {
    const { Flickity } = this.state
    const { children, initialIndex } = this.props
    return (
      <_FlickityContainer>
        {Flickity && (
          <Flickity
            options={{
              prevNextButtons: false,
              wrapAround: true,
              initialIndex: initialIndex || 0 
            }}
            className={"outline-0 w-100 overflow-hidden"}
            disableImagesLoaded={true}
          >
            {children}
          </Flickity>
        )}
      </_FlickityContainer>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Carousel
