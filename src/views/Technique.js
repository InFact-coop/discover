import { Component, Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import background from "../assets/backgrounds/bg_which_technique.svg"
import circle from "../assets/icons/circle.png"

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
  state = {
    techniques: [
      {
        title: "Mindfulness exercise",
        description:
          "Taking time to focus in the present moment Taking time to focus in the present momentTaking time to focus in the present momentTaking",
        image: circle,
      },
      {
        title: "Just an exercise",
        description:
          "Taking time to focus in the present moment Taking time to focus in the present moment",
        image: circle,
      },
      {
        title: "Not an exercise",
        description:
          "Taking time to focus in the present moment Taking time to focus in the present momentTaking time to",
        image: circle,
      },
    ],
  }
  render() {
    const { techniques } = this.state
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
          {techniques.map(({ title, description, image }) => (
            <Card
              key={title}
              width="17rem"
              height="22rem"
              title={title}
              description={description}
              image={image}
            />
          ))}
        </Carousel>
      </Fragment>
    )
  }
}

export default Technique
