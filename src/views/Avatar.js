import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

import { Avatars, getAvatarImg } from "../utils/avatar"

import { SetGoal } from "."
import { changeAvatar } from "../state/actions/profile"
import background from "../assets/backgrounds/bg_avatar.svg"

import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import BackButton from "../components/BackButton"
import { _Title } from "../components/Text"
import OutlineContainer from "../components/shared/OutlineContainer"
import ValidationMsg from "../components/ValidationMsg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center mt5",
})``

const _AvatarsContainer = styled.div.attrs({
  className: "flex items-center justify-center flex-wrap mv2",
})``

const _Avatar = styled.img.attrs({
  className: "br-100",
})`
  height: 40vw;
  width: 40vw;
`

class Avatar extends Component {
  state = {
    avatars: Avatars.map(avatar => ({
      name: avatar,
      src: getAvatarImg(avatar),
      selected: false,
    })),
    selectedAvatar: "",
    valid: true,
  }

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
      valid: true,
    })
  }

  saveFunction = () => {
    const { changeAvatar } = this.props
    const { selectedAvatar } = this.state
    changeAvatar(selectedAvatar)
  }

  setInvalid = () => {
    this.setState({ valid: false })
  }

  render() {
    const { avatars, selectedAvatar, valid } = this.state
    return (
      <_Container>
        <GlobalStyle />
        <ProgressBar progress={2} />
        <BackButton />
        <div className="relative">
          <_Title className="mt5 w-60">Please choose your avatar</_Title>
          <ValidationMsg valid={valid} bottom="-20px">
            Pick an avatar to continue!
          </ValidationMsg>
        </div>
        <_AvatarsContainer>
          {avatars.map(({ src, name, selected }) => (
            <OutlineContainer
              margin="var(--spacing-medium) var(--spacing-small)"
              key={name}
              selected={selected}
              onClick={this.onAvatarClick}
              br="br-100"
            >
              <_Avatar src={src} name={name} />
            </OutlineContainer>
          ))}
        </_AvatarsContainer>
        <SaveButton
          valid={!!selectedAvatar}
          setInvalid={this.setInvalid}
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
