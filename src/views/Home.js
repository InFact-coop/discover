import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { changeView } from "../state/actions/router"
import { selectTopic, setPageIndex } from "../state/actions/tips"

import NavBar from "../components/NavBar"

import { Tips, NewFlow, InternalLink } from "../Constants"

import { ReadTips } from "."

import exit from "../assets/icons/refresh_bot.svg"
import background from "../assets/backgrounds/bg_bot.svg"

const User = "User"
const Bot = "Bot"

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

const _Message = styled.div.attrs({
  className: "mono font-4 pv2 ph3 mb2",
})`
  border-radius: ${({ user }) =>
    user ? `21px 21px 6px 21px` : `21px 21px 21px 6px`};
  max-width: 210px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`

const _MessageContainer = styled.div.attrs({
  className: "flex flex-column message-container pb3 mh3",
})`
  padding-top: 60px;
  overflow-y: scroll;
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
  className: "border-box w-100 ph2 pb3 mt2 flex",
})`
  flex-direction: ${({ number }) => (number === 2 ? "row" : "column")};
  flex-shrink: 0;
`

const RenderConversation = ({ conversation }) =>
  conversation.map(({ content, type }, i) => (
    <_Message
      className={
        type === User
          ? "self-end bg-blue white user-style"
          : "bg-white dark-gray"
      }
      user={type === User}
      key={`${content}-${i}`}
    >
      {content}
    </_Message>
  ))

const RenderOptions = ({
  payload,
  onOptionClick,
  onInternalLinkClick,
  number,
  addContext,
  richContent,
}) => {
  if (richContent) {
    return payload.map(({ content, type, query, to }) => {
      const onClick = () => {
        switch (type) {
          case NewFlow:
            return onOptionClick({ content, query, addContext, type })
          case InternalLink:
            return onInternalLinkClick(to)
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

const BotTemplate = content => ({
  content,
  type: Bot,
})

const UserTemplate = content => ({
  content,
  type: User,
})

class Home extends Component {
  state = {
    conversation: [],
    postback: {},
  }

  addMetaDataToMsgs = content => {
    const { profile } = this.props

    return r.pipe(
      r.replace(/\$name/g, profile.name),
      r.replace(/\$crisis-icon/g, "life ring")
    )(content)
  }

  scrollToBottom = () => {
    const elem = document.querySelector(".message-container")
    elem.scrollTop = elem.scrollHeight
  }

  onInternalLinkClick = to => {
    const { changeView, selectTopic, setPageIndex } = this.props
    const isTip = r.includes(to, Tips)
    if (isTip) {
      selectTopic(to)
      setPageIndex(0)
      return changeView(ReadTips)
    }
    return changeView(to)
  }

  onOptionClick = async ({ content, addContext, query, type }) => {
    this.setState(prevState => ({
      conversation: [...prevState.conversation, UserTemplate(content)],
    }))

    const richQuery = (() => {
      if (addContext) {
        const context = r.pipe(
          r.findLast(r.propEq("type", Bot)),
          r.prop("content")
        )(this.state.conversation)
        return `${context} - ${content}`
      }
      if (type === NewFlow && query) {
        return query
      }
      return content
    })()

    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: richQuery,
      },
    })

    this.setState(prevState => ({
      conversation: [
        ...prevState.conversation,
        ...r.map(
          r.pipe(
            this.addMetaDataToMsgs,
            BotTemplate
          )
        )(data.responses),
      ],
      postback: data.postback,
    }))
  }

  onExitClick = async () => {
    const { welcome } = this.props
    this.setState({
      conversation: [],
      postback: {},
    })

    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: welcome.startQuery,
      },
    })

    this.setState(prevState => ({
      conversation: [
        ...prevState.conversation,
        ...r.map(
          r.pipe(
            this.addMetaDataToMsgs,
            BotTemplate
          )
        )(data.responses),
      ],
      postback: data.postback,
    }))
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  componentDidMount = async () => {
    const { welcome } = this.props
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: welcome.startQuery,
      },
    })

    this.setState(prevState => ({
      conversation: [
        ...prevState.conversation,
        ...r.map(
          r.pipe(
            this.addMetaDataToMsgs,
            BotTemplate
          )
        )(data.responses),
      ],
      postback: data.postback,
    }))
  }

  render() {
    const { postback, conversation } = this.state
    const { changeView, welcome } = this.props
    return (
      <div className="vh-100">
        <GlobalStyle />
        {welcome.welcomeFlow ? (
          ""
        ) : (
          <img
            src={exit}
            alt="exit chat"
            className="fixed top-0 right-0"
            onClick={this.onExitClick}
          />
        )}
        <_ChatContainer welcome={welcome.welcomeFlow}>
          <_MessageContainer>
            <RenderConversation conversation={conversation} />
          </_MessageContainer>

          {r.isEmpty(postback) ? (
            <div />
          ) : (
            <_OptionContainer number={postback.payload.length}>
              <RenderOptions
                {...postback}
                onInternalLinkClick={this.onInternalLinkClick}
                onOptionClick={this.onOptionClick}
                number={postback.payload.length}
                changeView={changeView}
              />
            </_OptionContainer>
          )}
        </_ChatContainer>
        {welcome.welcomeFlow ? "" : <NavBar />}
      </div>
    )
  }
}

export default connect(
  ({ profile, welcome }) => ({ profile, welcome }),
  { changeView, selectTopic, setPageIndex }
)(Home)
