import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import { changeGoal } from "../state/actions/currentGoal"
import background from "../assets/backgrounds/bg_what_is_your_goal.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center mt4",
})`
  height: 80vh;
`

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Question = styled.p.attrs({
  className: "mono font-3 ma2 tc",
})``

const _Input = styled.textarea.attrs({
  className: "w-90 ba ma4 ph3 pv2 font-3",
})`
  border-color: var(--moon-gray);
  border-width: thin;
  border-radius: 1.3rem;
  background: var(--white-30);
  height: 40%;
  color: var(--near-black);
`

class SetGoal extends Component {
  onInputChange = e => {
    const { changeGoal } = this.props
    changeGoal(e.target.value)
  }
  render() {
    const { name, description } = this.props
    return (
      <_Container>
        <GlobalStyle />
        <_Title>It's goal time, {name}!</_Title>
        <_Question>What should I set as your DISCOVER goal?</_Question>
        <_Input
          placeholder="My goal is..."
          value={description}
          onChange={this.onInputChange}
        />
      </_Container>
    )
  }
}

export default connect(
  ({ profile: { name }, currentGoal: { description } }) => ({
    name,
    description,
  }),
  { changeGoal }
)(SetGoal)
