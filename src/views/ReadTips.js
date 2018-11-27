import { Component } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import robot from "../assets/icons/robot_round.png"
import close from "../assets/icons/close.svg"
import { Summary } from "."

const _TapAnywhere = styled.div.attrs({
  className: "ttu w-100 white sans font-4 pa4",
})``

const _ExitCross = styled.img.attrs({
  className: "fixed top-0 right-0 pa3 z-5",
})``

const _Container = styled.p.attrs({
  className: "pb4 w-75",
})`
  margin: 0 auto;
`

const TapAnywhere = () => {
  return <_TapAnywhere>Tap anywhere to continue</_TapAnywhere>
}

class ReadTips extends Component {
  onExitClick = () => {
    const { changeView } = this.props
    changeView(Summary)
  }
  onAnywhereClick = () => {
    const { changeView } = this.props
    console.log("continue!!")
    // changeView(TipSlide)
  }

  render() {
    const { profile, tips } = this.props
    return (
      <div>
        <div
          onClick={this.onAnywhereClick}
          className="bg-light-blue w-100 vh-100 relative mono white tc ph3"
        >
          <_ExitCross
            src={close}
            alt="exit"
            onClick={() => this.onExitClick()}
          />
          <div className="flex align-items justify-center pt7 pb4">
            <img src={robot} alt="friendly robot" />
          </div>
          <h1>Hey {profile.name}!</h1>
          <_Container>
            Did I hear you say you need a refersher about{" "}
            <span className="b">{tips.topic}</span>?
          </_Container>
          <_Container>NO PROBLEM!</_Container>
          <_Container>Here is a quick reminder</_Container>
          <TapAnywhere />
        </div>
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
  { changeView }
)(ReadTips)
