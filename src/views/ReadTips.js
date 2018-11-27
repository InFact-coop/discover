import { Component, Fragment } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import { setPageIndex } from "../state/actions/tips"
import robot from "../assets/icons/robot_round.png"
import close from "../assets/icons/close.svg"
import back from "../assets/icons/arrow_back.svg"
import { Summary } from "."
import { getTipSections } from "../components/TipSections"

const _TapAnywhere = styled.div.attrs({
  className: "ttu w-100 white sans font-4 pa4",
})``

const _ExitCross = styled.img.attrs({
  className: "absolute top-0 right-0 pa3 z-5",
})``

const _BackArrow = styled.img.attrs({
  className: "absolute top-0 left-0 pa3 z-6 border-box",
})`
  height: 60px;
`

const _TipScreen = styled.div.attrs({
  className: "bg-light-blue w-100 vh-100 mono white tc ph3",
})``

const _Container = styled.p.attrs({
  className: "pb4 w-75",
})`
  margin: 0 auto;
`
const _ButtonBanner = styled.div`
  height: 60px;
`
const _Main = styled.div.attrs({
  className: "",
})``

const TapAnywhere = () => {
  return <_TapAnywhere>Tap anywhere to continue</_TapAnywhere>
}

const FirstSlide = ({ name, topic }) => {
  return (
    <div>
      <div className="flex align-items justify-center pt2 pb4">
        <img src={robot} alt="friendly robot" />
      </div>
      <h1>Hey {name}!</h1>
      <_Container>
        Did I hear you say you need a refersher about{" "}
        <span className="b">{topic}</span>?
      </_Container>
      <_Container>NO PROBLEM!</_Container>
      <_Container>Here is a quick reminder</_Container>
    </div>
  )
}

class ReadTips extends Component {
  onExitClick = () => {
    const { changeView } = this.props
    changeView(Summary)
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
    console.log(tips.index)
    console.log(getTipSections(tips.topic))
    return (
      <div>
        <_TipScreen backgroundIndex={tips.index}>
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
            <_ExitCross
              src={close}
              alt="exit"
              onClick={() => this.onExitClick()}
            />
          </_ButtonBanner>
          <_Main onClick={() => this.onAnywhereClick(tips.index)}>
            <Fragment>
              {tips.index === 0 ? (
                <FirstSlide name={profile.name} topic={tips.topic} />
              ) : (
                <Content />
              )}
              {tips.index === tips.topicMaxIndex ? (
                <p>Thanx, got it!</p>
              ) : (
                <TapAnywhere />
              )}
            </Fragment>
          </_Main>
        </_TipScreen>
        <NavBar />
      </div>
    )
  }
}

export default connect(
  ({ profile, tips }) => ({
    profile,
    tips,
  }),
  { changeView, setPageIndex }
)(ReadTips)
