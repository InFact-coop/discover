import { Component } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { getAvatarImg } from "../utils/avatar"

import { changeView } from "../state/actions/router"
import { selectTopic, setPageIndex } from "../state/actions/tips"
import { addQuotesData } from "../state/actions/staticData"

import NavBar from "../components/NavBar"
import ExampleGoal from "../components/ExampleGoal"
import Quote from "../components/Quote"

import {
  Tips,
  NewFlow,
  InternalLink,
  ExternalLink,
  NotInitialised,
  Initialising,
  Initialised,
} from "../Constants"

import { ReadTips, Privacy } from "."

import exit from "../assets/icons/refresh_bot.svg"
import background from "../assets/backgrounds/bg_bot.svg"
import botIcon from "../assets/icons/robot_round.png"

const User = "User"
const Bot = "Bot"
const Typing = "Typing"

const BotTemplate = content => ({
  content,
  type: Bot,
})

const UserTemplate = content => ({
  content,
  type: User,
})

const TypingTemplate = {
  type: Typing,
  content: "",
}

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

class Home extends Component {
  state = {
    conversation: [],
    postback: {},
    botInitialised: NotInitialised,
    quote: {},
  }

  componentDidMount = () => {
    const { welcome } = this.props

    if (!window.navigator.onLine) return this.setBotOffline()
    window.removeEventListener("online", this.initBot)

    if (welcome.welcomeFlow) this.initBot()

    this.getSheet()
    this.setQuote()
  }

  componentDidUpdate = () => {
    const elem = document.querySelector(".message-container")
    elem.scrollTop = elem.scrollHeight
  }

  componentWillUnmount = () => {
    window.removeEventListener("online", this.initBot)
  }

  getSheet = async () => {
    await axios
      .get("/api/user/sheets")
      .then(res => res.data)
      .then(quotes => this.props.addQuotesData(quotes))
  }

  setQuote = () => {
    const { quotes } = this.props
    if (quotes) {
      const random = Math.floor(Math.random() * quotes.length)
      this.setState({ quote: r.nth(random, quotes) })
    }
  }

  initBot = async () => {
    if (this.state.botInitialised === NotInitialised) {
      this.setState({ botInitialised: Initialising })

      const { welcome } = this.props
      const sessionId = Math.random()
        .toString(36)
        .substr(2, 10)

      const { data } = await axios.get("/api/user/dialogflow", {
        params: {
          query: welcome.startQuery,
          sessionId,
        },
      })

      this.setState({ sessionId })
      this.setState({ botInitialised: Initialised })
      this.setMessageDelay(data)
    }
  }

  setBotOffline = () => {
    window.addEventListener("online", this.initBot)

    const data = {
      responses: [
        "Ooops looks like you're not online",
        "DISCOVERbot m-a-l-f-u-n-c-t-i-o-n-i-n-g 🙀",
        "Hehe come back when you're back online! 🤖",
      ],
      postback: "",
    }

    this.setMessageDelay(data)
  }

  onRestartClick = async () => {
    if (!window.navigator.onLine) return this.setBotOffline()
    window.removeEventListener("online", this.initBot)

    this.setState(
      {
        botInitialised: NotInitialised,
        conversation: [],
        postback: {},
      },
      () => this.initBot()
    )
  }

  addMetaDataToMsgs = content => {
    const { profile } = this.props

    return r.pipe(
      r.replace(/\$name/g, profile.name),
      r.replace(/\$crisis-icon/g, "life ring")
    )(content)
  }

  onInternalLinkClick = to => {
    const { changeView, selectTopic, setPageIndex } = this.props
    const isTip = Tips.includes(to)
    if (isTip) {
      selectTopic(to)
      setPageIndex(0)
      return changeView(ReadTips)
    }
    return changeView(to)
  }

  setMessageDelay = data => {
    if (r.isEmpty(data.responses)) return

    this.setState(prevState => ({
      conversation: [...prevState.conversation, TypingTemplate],
    }))

    setTimeout(() => {
      const newMessage = BotTemplate(
        this.addMetaDataToMsgs(r.head(data.responses))
      )
      if (r.length(data.responses) === 1) {
        return this.setState(prevState => ({
          conversation: [...r.dropLast(1, prevState.conversation), newMessage],
          postback: data.postback,
        }))
      }
      this.setState(prevState => ({
        conversation: [...r.dropLast(1, prevState.conversation), newMessage],
      }))
      this.setMessageDelay({ ...data, responses: r.drop(1, data.responses) })
    }, Math.floor(Math.random() * 2000) + 500)
  }

  onOptionClick = async ({ content, addContext, query, type }) => {
    const { sessionId } = this.state

    this.setState(prevState => ({
      conversation: [...prevState.conversation, UserTemplate(content)],
      postback: {},
    }))

    const richQuery = (() => {
      if (addContext) {
        const context = r.pipe(
          r.findLast(r.propEq("type", Bot)),
          r.prop("content")
        )(this.state.conversation)
        return `${context} - ${content}`
      }
      if (type === NewFlow && query) return query
      return content
    })()

    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: richQuery,
        sessionId,
      },
    })

    this.setMessageDelay(data)
  }

  render() {
    const { postback, conversation, quote } = this.state
    const { changeView, welcome, profile } = this.props

    return (
      <div className="vh-100">
        <Quote
          quote={quote}
          initBot={this.initBot}
          welcomeFlow={welcome.welcomeFlow}
        />
        <GlobalStyle />
        {welcome.welcomeFlow ? (
          ""
        ) : (
          <img
            src={exit}
            alt="exit chat"
            className="fixed top-0 right-0"
            onClick={this.onRestartClick}
          />
        )}
        <_ChatContainer welcome={welcome.welcomeFlow}>
          <_MessageContainer>
            <RenderConversation
              conversation={conversation}
              onLinkClick={this.onInternalLinkClick}
              userAvatar={profile.avatar}
            />
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
  ({ profile, welcome, staticData: { quotes } }) => ({
    profile,
    welcome,
    quotes,
  }),
  { changeView, selectTopic, setPageIndex, addQuotesData }
)(Home)
