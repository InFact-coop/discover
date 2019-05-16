import { Component } from "react"
import { connect } from "react-redux"
import { createGlobalStyle } from "styled-components"

import icon from "../assets/icons/tips_big.svg"

import { selectTopic, setPageIndex } from "../state/actions/tips"
import { changeView } from "../state/actions/router"

import { ReadTips } from "."
import NavBar from "../components/NavBar"
import IconHeader from "../components/shared/IconHeader"
import Carousel from "../components/Carousel"
import Card from "../components/Card"

import {
  addStopBounceListener,
  removeStopBounceListener,
} from "../utils/preventBounce"

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
        .filter(t => t.title !== "I want to SKIP this bit!"),
    })
    addStopBounceListener()
  }

  componentWillUnmount() {
    removeStopBounceListener()
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
          {techniques.map(({ title, description, image, backgroundColor }) => (
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
          ))}
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
