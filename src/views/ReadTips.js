import { Component, Fragment } from "react"
import styled, { css } from "styled-components"
import * as r from "ramda" //eslint-disable-line import/no-namespace
import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { setPageIndex } from "../state/actions/tips"
import { breakpoint } from "../styles/utils"

import { getTipSections } from "../components/TipSections"
import { ActionButton } from "../components/shared/ActionButton"
import _BackgroundImg from "../components/BackgroundImg"

import robot from "../assets/icons/robot_round.png"
import close from "../assets/icons/close.svg"
import back from "../assets/icons/arrow_back.svg"
import tips0 from "../assets/backgrounds/tips0.svg"
import tips1 from "../assets/backgrounds/tips1.png"
import tips2 from "../assets/backgrounds/tips2.png"
import tips3 from "../assets/backgrounds/tips3.png"
import tips4 from "../assets/backgrounds/tips4.png"

const _TapAnywhere = styled.div.attrs({
  className: "ttu w-100 tc white sans font-5 pv2",
})`
  position: relative;
  bottom: 40px;
`

const _ExitCross = styled.img.attrs({
  className: "absolute top-0 right-0 z-5",
})`
  padding: var(--spacing-medium);

  ${breakpoint.supersmall`
padding: var(--spacing-small);
`};
`

const _BackArrow = styled.img.attrs({
  className: "absolute top-0 left-0 z-6 border-box",
})`
  height: 60px;
  padding: var(--spacing-medium);

  ${breakpoint.supersmall`
  padding: var(--spacing-small);
  height: 45px;
  `};
`

const backgrounds = [tips0, tips1, tips2, tips3, tips4]

const _TipScreen = styled.div.attrs({
  className: "w-100 vh-100 mono white tc ph3",
})`
  background: ${({ bgIndex, maxIndex }) => {
    if (bgIndex === maxIndex) return `url(${backgrounds[4]}), var(--light-blue)`
    return `url(${backgrounds[bgIndex]}), var(--light-blue)`
  }};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  ${breakpoint.supersmall`
  background: ${({ bgIndex, maxIndex, topic }) => {
    if (bgIndex === 4 && topic === "Procrastination tips")
      return `var(--light-blue)`
    if (bgIndex === maxIndex) return `url(${backgrounds[4]}), var(--light-blue)`
    return `url(${backgrounds[bgIndex]}), var(--light-blue)`
  }};  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`};
`

const _Container = styled.div.attrs({
  className: "pb4 w-75 font-4",
})`
  margin: 0 auto;
`
const _ButtonBanner = styled.div`
  height: 60px;

  ${breakpoint.supersmall`
  height: 45px;
  `};
`
const _Main = styled.div.attrs({})`
   ${css`
     height: calc(100vh - 60px);
   `}
  padding-top: ${({ tipIndex }) => (tipIndex === 1 ? "150px" : "0px")};
  ${breakpoint.supersmall`
  padding-top: ${({ tipIndex }) => (tipIndex === 1 ? "35vw" : "0px")};
  `};
`

const FirstSlide = ({ name, topic }) => (
  <div>
    <_BackgroundImg
      url={robot}
      width="190px"
      height="190px"
      className="center mb4"
    />
    <h1 className="mono font-1 mt2 mb3">Hey {name}!</h1>
    <_Container>
      Did I hear you say you need a refresher about{" "}
      <p className="b">{topic}?</p>
    </_Container>
    <_Container>NO PROBLEM!</_Container>
    <_Container>Here is a quick reminder.</_Container>
  </div>
)

class ReadTips extends Component {
  constructor(props) {
    super(props)

    const {
      router: { history },
    } = this.props

    this.state = {
      prevPage: r.last(history),
      historyAtPrevPage: r.dropLast(1, history),
    }
  }

  onExitClick = () => {
    const { changeView, setPageIndex } = this.props

    setPageIndex(0)
    changeView({
      page: this.state.prevPage,
      history: this.state.historyAtPrevPage,
    })
  }

  onBackClick = index => {
    const prevSlide = index - 1
    const { setPageIndex } = this.props
    setPageIndex(prevSlide)
  }

  onAnywhereClick = index => {
    const { setPageIndex, tips } = this.props
    if (index < tips.topicMaxIndex) {
      const nextSlide = index + 1
      setPageIndex(nextSlide)
    }
  }
  render() {
    const { profile, tips } = this.props
    const Content = getTipSections(tips.topic)[tips.index - 1]
    return (
      <div>
        <_TipScreen
          bgIndex={tips.index}
          maxIndex={tips.topicMaxIndex}
          topic={tips.topic}
        >
          <_ButtonBanner className="relative">
            {tips.index !== 0 ? (
              <_BackArrow
                src={back}
                alt="go back"
                onClick={() => this.onBackClick(tips.index)}
              />
            ) : (
              ""
            )}
            {tips.index !== tips.topicMaxIndex ? (
              <_ExitCross
                src={close}
                alt="exit"
                onClick={() => this.onExitClick()}
              />
            ) : (
              ""
            )}
          </_ButtonBanner>
          <_Main
            onClick={() => this.onAnywhereClick(tips.index)}
            tipIndex={tips.index}
          >
            <Fragment>
              {tips.index === 0 ? (
                <FirstSlide name={profile.name} topic={tips.topic} />
              ) : (
                <Content />
              )}
            </Fragment>
          </_Main>
          {tips.index === tips.topicMaxIndex ? (
            <ActionButton
              positionBottom="12vh"
              onClick={() => this.onExitClick()}
            >
              Thanks, got it!
            </ActionButton>
          ) : (
            <_TapAnywhere onClick={() => this.onAnywhereClick(tips.index)}>
              Tap anywhere to continue
            </_TapAnywhere>
          )}
        </_TipScreen>
      </div>
    )
  }
}

export default connect(
  ({ profile, tips, router }) => ({
    profile,
    tips,
    router,
  }),
  { changeView, setPageIndex }
)(ReadTips)
