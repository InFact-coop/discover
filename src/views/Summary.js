import { Component } from "react"
import icon from "../assets/icons/tips_big.svg"
import IconHeader from "../components/shared/IconHeader"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import { selectTopic, setPageIndex } from "../state/actions/tips"
import NavBar from "../components/NavBar"
import Carousel from "../components/Carousel"
import Card from "../components/Card"
import { ReadTips } from "."
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(255, 107, 107, 0.05);
  }
`

class Summary extends Component {
  state = {
    techniques: [],
  }
  componentDidMount() {
    const { staticData } = this.props
    this.setState({
      techniques: staticData.techniques
        .map(t => ({
          ...t,
        }))
        .filter(t => {
          return t.title !== "I want to SKIP this bit!"
        }),
    })
  }
  onCardClick = title => {
    const { changeView, selectTopic, setPageIndex } = this.props
    selectTopic(title)
    setPageIndex(0)
    changeView(ReadTips)
  }
  render() {
    const { techniques } = this.state
    return (
      <div>
        <GlobalStyle />
        <IconHeader title="Summary of DISCOVER tips" icon={icon} />
        <Carousel>
          {techniques.map(({ title, description, image, backgroundColor }) => {
            return (
              <Card
                key={title}
                width="17rem"
                height="22rem"
                title={title}
                description={description}
                image={image}
                backgroundColor={backgroundColor}
                onCardClick={() => this.onCardClick(title)}
              />
            )
          })}
        </Carousel>
        <NavBar />
      </div>
    )
  }
}

export default connect(
  ({ staticData, tips }) => ({
    staticData,
    tips,
  }),
  { changeView, selectTopic, setPageIndex }
)(Summary)
