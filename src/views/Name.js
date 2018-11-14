import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import { changeName } from "../state/actions/profile"
import background from "../assets/backgrounds/bg_what_is_your_name.svg"
import botIcon from "../assets/icons/bot.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
  }
`

const _Container = styled.div.attrs({
  className: "flex flex-column items-center",
})``
const _BotIcon = styled.img.attrs({
  className: "w-50 mt5 mb1",
})``

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma2",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Question = styled.p.attrs({
  className: "mono font-3",
})``

const _Input = styled.input.attrs({
  className: "w-80 ba ma4 pa2 br3 font-2",
})`
  border-color: var(--moon-gray);
  border-width: thin;
  background: var(--white-30);
  height: 2.5rem;
  color: var(--near-black);
`

class Name extends Component {
  onInputChange = e => {
    const { changeName } = this.props
    changeName(e.target.value)
  }
  render() {
    const { name } = this.props
    return (
      <_Container>
        <GlobalStyle />_<_BotIcon src={botIcon} />
        <_Title>
          OK,
          <br /> First thing first!
        </_Title>
        <_Question>what's your name my friend?</_Question>
        <_Input value={name} onChange={this.onInputChange} />
      </_Container>
    )
  }
}

export default connect(
  ({ profile: { name } }) => ({ name }),
  { changeName }
)(Name)
