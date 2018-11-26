import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { SetGoal } from "."
import { changeAvatar } from "../state/actions/profile"
import background from "../assets/backgrounds/bg_avatar.svg"
import avatar1 from "../assets/icons/avatar_round.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center mt5",
})`
  height: 90vh;
`

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _AvatarsContainer = styled.div.attrs({
  className: "flex items-center justify-center flex-wrap mv2",
})``
const _Avatar = styled.img.attrs({
  className: "w-40 h-75 br-100 mh2 mv3",
})`
  ${({ selected }) =>
    selected &&
    `border: 0.2rem solid var(--gray);	
  `};
`

class Avatar extends Component {
  state = {
    avatars: [
      { name: "avatar1", src: avatar1, selected: false },
      { name: "avatar2", src: avatar1, selected: false },
      { name: "avatar3", src: avatar1, selected: false },
      { name: "avatar4", src: avatar1, selected: false },
    ],
    selectedAvatar: "",
  }

  // to add border on selected avatar
  componentDidMount() {
    const { avatar } = this.props
    const { avatars } = this.state
    this.setState({
      avatars: avatars.map(a => ({ ...a, selected: a.name === avatar })),
      selectedAvatar: avatar,
    })
  }

  onAvatarClick = e => {
    const { name } = e.target
    const { avatars } = this.state
    this.setState({
      avatars: avatars.map(a => ({ ...a, selected: a.name === name })),
      selectedAvatar: name,
    })
  }

  saveFunction = () => {
    const { changeAvatar } = this.props
    const { selectedAvatar } = this.state
    changeAvatar(selectedAvatar)
  }
  render() {
    const { avatars, selectedAvatar } = this.state
    return (
      <_Container>
        <GlobalStyle />
        <ProgressBar progress={2} />
        <BackButton />
        <_Title>Please choose your avatar</_Title>
        <_AvatarsContainer>
          {avatars.map(({ src, name, selected }) => (
            <_Avatar
              key={name}
              src={src}
              name={name}
              selected={selected}
              onClick={this.onAvatarClick}
            />
          ))}
        </_AvatarsContainer>
        <SaveButton
          disabled={!selectedAvatar}
          saveFunction={this.saveFunction}
          redirectTo={SetGoal}
          text="THAT'S MY AVATAR!"
        />
      </_Container>
    )
  }
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  changeAvatar: PropTypes.func.isRequired,
}

export default connect(
  ({ profile: { avatar } }) => ({ avatar }),
  { changeAvatar }
)(Avatar)
