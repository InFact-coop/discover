import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import SaveButton from "../components/SaveButton"
import SkipButton from "../components/SkipButton"
import { Name, SetGoal } from "."
import { changeAvatar } from "../state/actions/profile"
import background from "../assets/backgrounds/bg_avatar.svg"
import avatar1 from "../assets/icons/avatar_round.svg"

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
const _AvatarsRow = styled.div.attrs({
  className: "flex justify-around items-center w-90 mv2",
})``
const _Avatar = styled.img.attrs({
  className: "w-70 h-75 br-100 mh1",
})`
  ${({ selected }) =>
    selected &&
    `border: 0.2rem solid var(--gray);	
  `};
`

class Avatar extends Component {
  state = {
    avatar1: { src: avatar1, selected: false },
    avatar2: { src: avatar1, selected: false },
    avatar3: { src: avatar1, selected: false },
    avatar4: { src: avatar1, selected: false },
    currentAvatar: "",
  }

  // to add border on selected avatars
  static getDerivedStateFromProps(nextProps, prevState) {
    const { avatar } = nextProps
    const { currentAvatar } = prevState
    return {
      ...prevState,
      [avatar]: { ...prevState[avatar], selected: true },
      [currentAvatar]: { ...prevState[avatar], selected: false },
      currentAvatar: avatar,
    }
  }

  onAvatarClick = e => {
    const { name } = e.target
    const { changeAvatar } = this.props
    changeAvatar(name)
  }
  render() {
    const { avatar1, avatar2, avatar3, avatar4 } = this.state
    return (
      <_Container>
        <GlobalStyle />
        <ProgressBar progress={2} />
        <SkipButton action="back" to={Name} />
        <_Title>Please choose your avatar</_Title>
        <_AvatarsRow>
          <_Avatar
            src={avatar1.src}
            name={"avatar1"}
            selected={avatar1.selected}
            onClick={this.onAvatarClick}
          />
          <_Avatar
            src={avatar2.src}
            name={"avatar2"}
            selected={avatar2.selected}
            onClick={this.onAvatarClick}
          />
        </_AvatarsRow>
        <_AvatarsRow>
          <_Avatar
            src={avatar3.src}
            name={"avatar3"}
            selected={avatar3.selected}
            onClick={this.onAvatarClick}
          />
          <_Avatar
            src={avatar4.src}
            name={"avatar4"}
            selected={avatar4.selected}
            onClick={this.onAvatarClick}
          />
        </_AvatarsRow>
        <SaveButton redirectTo={SetGoal} text="THAT'S MY AVATAR!" />
      </_Container>
    )
  }
}

Avatar.proptypes = {
  avatar: PropTypes.string,
  changeAvatar: PropTypes.func.isRequired,
}

export default connect(
  ({ profile: { avatar } }) => ({ avatar }),
  { changeAvatar }
)(Avatar)
