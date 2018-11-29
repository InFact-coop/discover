import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const _CardContainer = styled.div.attrs({
  className: "br4 ma1",
})`
  border: ${({ selected }) => selected && "thin solid var(--gray);"};
`

const _Card = styled.div.attrs({
  className: "flex flex-column ma1 items-center justify-center br4",
})`
  ${({ width, height, backgroundColor }) =>
    `background-color: var(${backgroundColor});
    width: ${width};
    height: ${height};
  `};
`
const _CardTitle = styled.p.attrs({
  className: "font-3 sans mt4 mb2 tc",
})`
  color: var(--dark-gray);
  font-weight: 500;
`
const _CardDescription = styled.p.attrs({
  className: "font-4 sans ma2 tc",
})`
  color: var(--dark-gray);
`
const _CardImage = styled.img.attrs({
  className: "ma2",
})`
  height: 40%;
  width: 40%;
`

class Card extends Component {
  render() {
    const {
      width,
      height,
      title,
      description,
      image,
      selected,
      backgroundColor,
      onCardClick,
    } = this.props

    return (
      <_CardContainer selected={selected}>
        <_Card
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          onClick={onCardClick}
        >
          <_CardTitle>{title}</_CardTitle>
          <_CardDescription>{description}</_CardDescription>
          <_CardImage src={image} />
        </_Card>
      </_CardContainer>
    )
  }
}

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  selected: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onCardClick: PropTypes.func,
}

export default Card
