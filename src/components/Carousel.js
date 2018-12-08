import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Flickity from "react-flickity-component"

const _FlickityContainer = styled.div.attrs({
  className: "w-100",
})``

class Carousel extends Component {
  componentDidUpdate() {
    this.flkty.resize()
  }

  render() {
    const { children, initialIndex } = this.props
    return (
      <_FlickityContainer>
        <Flickity
          flickityRef={c => (this.flkty = c)}
          options={{
            wrapAround: true,
            prevNextButtons: false,
            initialIndex: initialIndex || 0,
          }}
          className="outline-0 w-100 overflow-hidden"
          disableImagesLoaded={true}
        >
          {children}
        </Flickity>
      </_FlickityContainer>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Carousel
