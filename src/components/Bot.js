import styled, { createGlobalStyle, css, keyframes } from "styled-components"

import ExampleGoal from "../components/ExampleGoal"

import { NewFlow, InternalLink, ExternalLink, User, Typing } from "../Constants"
import { Privacy } from "../views"

import { getAvatarImg } from "../utils/avatar"

import background from "../assets/backgrounds/bg_bot.svg"
import botIcon from "../assets/icons/robot_round.png"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
  }
`

const _ChatContainer = styled.div.attrs({
  className: "flex flex-column justify-between",
})`
  margin-bottom: ${({ welcome }) => (welcome ? "" : "24px")};
  height: ${({ welcome }) => (welcome ? "100vh" : "calc(100vh - 60px)")};
`

const ellipsis = keyframes`
  to {
    width: 3em;
  }
`

const _Message = styled.div.attrs({
  className: "mono font-5 pv2 ph3 mb2",
})`
  border-radius: ${({ user }) =>
    user ? `21px 21px 6px 21px` : `21px 21px 21px 6px`};
  max-width: 210px;
  min-width: 65px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);

  ${props =>
    props.dotty &&
    css`
      &:after {
        overflow: hidden;
        display: block;
        vertical-align: bottom;
        animation: ${ellipsis} steps(4, end) 800ms infinite;
        content: "...";
        width: 0px;
      }
    `};
`

const _Avatar = styled.div.attrs({
  className: "",
})`
  width: 40px;
  height: 40px;
  background: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: none;
  background-position: center;
`

const _MessageAvatarWrapper = styled.div.attrs(({ user }) => ({
  className: `flex items-center ${user && "justify-end"}`,
}))`
  min-height: fit-content;
`

const _MessageWithAvatar = ({
  messageClass,
  user,
  children,
  userAvatar,
  dotty,
}) => (
  <_MessageAvatarWrapper user={user}>
    <_Avatar src={botIcon} className={user ? "dn" : "mr1"} />
    <_Message dotty={dotty} className={messageClass} user={user}>
      {children}
    </_Message>
    <_Avatar src={getAvatarImg(userAvatar)} className={user ? "ml1" : "dn"} />
  </_MessageAvatarWrapper>
)

const _MessageContainer = styled.div.attrs({
  className: "flex flex-column message-container pb3 mh3",
})`
  padding-top: 60px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const _Option = styled.button.attrs({
  className: "bg-white blue ba b--blue mb2 mh1",
})`
  width: ${({ number }) => (number === 2 ? "47.5%" : "97.5%")};
  padding: ${({ number }) => (number < 5 ? `16px 0` : `8px 0`)};
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  outline: none;
`

const _OptionContainer = styled.div.attrs({
  className: "border-box w-100 ph2 pb3 mt2 flex font-5",
})`
  flex-direction: ${({ number }) => (number === 2 ? "row" : "column")};
  flex-shrink: 0;
`

const RenderConversation = ({ conversation, onLinkClick, userAvatar }) =>
  conversation.map(({ content, type }, i) => {
    if (content === "#your-goal-example") {
      return <ExampleGoal key={i} />
    } else if (content.includes("#here-privacy-link")) {
      const [before, after] = content.split("#here-privacy-link")
      return (
        <_MessageWithAvatar messageClass="bg-white dark-gray" key={i}>
          <span>{before}</span>
          <a className="underline" onClick={() => onLinkClick(Privacy)}>
            here
          </a>
          <span>{after}</span>
        </_MessageWithAvatar>
      )
    }
    return (
      <_MessageWithAvatar
        messageClass={
          type === User ? "bg-blue white user-style" : "bg-white dark-gray"
        }
        user={type === User}
        key={`${content}-${i}`}
        userAvatar={userAvatar}
        dotty={type === Typing}
      >
        {content}
      </_MessageWithAvatar>
    )
  })

const RenderOptions = ({
  payload,
  onOptionClick,
  onInternalLinkClick,
  number,
  addContext,
  richContent,
}) => {
  if (richContent) {
    return payload.map(({ content, type, query, to, url }) => {
      const onClick = () => {
        switch (type) {
          case NewFlow:
            return onOptionClick({ content, query, addContext, type })
          case InternalLink:
            return onInternalLinkClick(to)
          case ExternalLink:
            return (window.location.href = url)
          default:
            return console.log("No onClick set") //eslint-disable-line
        }
      }
      return (
        <_Option key={content} onClick={onClick} number={number}>
          {content}
        </_Option>
      )
    })
  }

  return payload.map(content => (
    <_Option
      key={content}
      onClick={() => onOptionClick({ content, addContext })}
      number={number}
    >
      {content}
    </_Option>
  ))
}

export {
  GlobalStyle,
  RenderOptions,
  _ChatContainer,
  _MessageContainer,
  _OptionContainer,
  RenderConversation,
}
