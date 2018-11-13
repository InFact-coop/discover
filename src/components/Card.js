import { Component } from "react"
import styled from "styled-components"

const _CardContainer = styled.div.attrs({
  className: "br4 ma1",
})`
  ${({ selected }) =>
    selected &&
    `border: thin solid var(--gray);	
  `};
`

const _Card = styled.div.attrs({
  className: "flex flex-column ma1 items-center br4",
})`
  background-color: var(--yellow);
`
const _CardTitle = styled.p.attrs({
  className: "font-4 mono mt6 mb2 b tc",
})`
  color: var(--gray);
`
const _CardDescription = styled.p.attrs({
  className: "font-5 mono ma2 tc",
})`
  color: var(--gray);
`
const _CardImage = styled.img.attrs({
  className: "ma2",
})`
  height: 40%;
  width: 40%;
`

class Card extends Component {
  onClick = () => {
    this.setState(({ selected }) => ({ selected: !selected }))
  }
  render() {
    const {
      width,
      height,
      title,
      description,
      image,
      selected,
      onCardClick,
    } = this.props
    return (
      <_CardContainer selected={selected}>
        <_Card style={{ width, height }} onClick={onCardClick}>
          <_CardTitle>{title}</_CardTitle>
          <_CardDescription>{description}</_CardDescription>
          <_CardImage src={image} />
        </_Card>
      </_CardContainer>
    )
  }
}

export default Card
