import { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { breakpoint } from "../styles/utils"

const _CardContainer = styled.div.attrs({
  className: "br4 ma1",
})`
  border: ${({ selected }) =>
    selected ? "thin solid var(--gray)" : "thin solid transparent"};

  ${breakpoint.supersmall`
  margin-top: var(--spacing-small);
  `};
`

const _Card = styled.div.attrs({
  className: "flex flex-column ma1 items-center br4",
})`
  ${({ width, height, backgroundColor }) =>
    `background-color: var(${backgroundColor});
    width: ${width};
    height: ${height};
  `};

  ${breakpoint.supersmall`
  ${({ height }) => (height === "15rem" ? `height: 5rem` : `height: 12rem`)};
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
  className: "ph4 mb4",
})`
  ${breakpoint.supersmall`
display: none;
`};

  height: 9rem;
  position: absolute;
  bottom: 0;
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
