import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import { toggleSelectTechnique } from "../state/actions/technique"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import background from "../assets/backgrounds/bg_which_technique.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center",
})`
  margin-top: 30%;
`

const _Title = styled.p.attrs({
  className: "mono font-2 ma1",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Question = styled.p.attrs({
  className: "mono font-4 w-90 tc mt1",
})`
  color: var(--gray);
`

const _Hint = styled.p.attrs({
  className: "mono font-4 mb3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

class Technique extends Component {
  onCardClick = title => {
    const { toggleSelectTechnique } = this.props
    toggleSelectTechnique(title)
  }
  render() {
    const { techniques } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <_Container>
          <_Title> Great!</_Title>
          <_Question>
            and which technique will you choose to achieve your goal ?
          </_Question>
          <_Hint>&#40;you can choose more than one!&#41;</_Hint>
        </_Container>
        <Carousel>
          {techniques.map(({ title, description, image, selected }) => (
            <Card
              key={title}
              width="17rem"
              height="22rem"
              title={title}
              description={description}
              image={image}
              selected={selected}
              onClick={this.onCardClick}
            />
          ))}
        </Carousel>
      </Fragment>
    )
  }
}

export default connect(
  ({ technique: { techniques } }) => ({ techniques }),
  { toggleSelectTechnique }
)(Technique)
