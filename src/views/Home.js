import { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { changeView } from "../state/actions/router"
import { selectTopic, setPageIndex } from "../state/actions/tips"
import { saveConversation } from "../state/actions/chatbot"

import NavBar from "../components/NavBar"
import Quote from "../components/Quote"

import {
  GlobalStyle,
  RenderOptions,
  _ChatContainer,
  _MessageContainer,
  _OptionContainer,
  RenderConversation,
} from "../components/Home"

import {
  Tips,
  NewFlow,
  NotInitialised,
  Initialising,
  Initialised,
  User,
  Bot,
  Typing,
} from "../Constants"

import { ReadTips } from "."

import exit from "../assets/icons/refresh_bot.svg"

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

class Home extends Component {
  state = {
    initialised: false,
  }

  initialState = () => ({
    conversation: [],
    postback: {},
    sessionId: "",
    botInitialised: NotInitialised,
    quoteVanished: false,
    lastMessageSentAt: Date.now(),
  })

  componentDidMount = async () => {
    const {
      profile: { welcomeFlow },
      chatbot,
    } = this.props

    if (welcomeFlow) {
      this.setState({ ...this.initialState(), initialised: true }, () =>
        this.initBot()
      )
    } else if (Date.now() - chatbot.lastMessageSentAt > 5000) {
      this.setState({ ...this.initialState(), initialised: true })
    } else {
      this.setState({ ...chatbot })
    }

    if (!window.navigator.onLine) return this.setBotOffline()

    window.removeEventListener("online", this.initBot)
  }

  componentDidUpdate = (prevProps, prevState) => {
    const elem = document.querySelector(".message-container")
    if (elem) {
      elem.scrollTop = elem.scrollHeight
    }
    if (
      prevState.quoteVanished === false &&
      this.state.quoteVanished === true
    ) {
      this.initBot()
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("online", this.initBot)
  }

  initBot = async () => {
    if (this.state.botInitialised === NotInitialised) {
      this.setState({ botInitialised: Initialising })

      const { profile } = this.props
      const sessionId = Math.random()
        .toString(36)
        .substr(2, 10)

      const { data } = await axios.get("/api/user/dialogflow", {
        params: {
          query: profile.startQuery,
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
      postback: {},
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
    if (r.isEmpty(data.responses)) {
      return this.setState({ postback: data.postback })
    }

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
    }, 0)
  }

  onOptionClick = async ({ content, addContext, query, type }) => {
    const { sessionId } = this.state
    const { saveConversation } = this.props
    const prevState = { ...this.state }

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

    saveConversation({
      ...prevState,
      lastMessageSentAt: Date.now(),
      conversation: [...prevState.conversation, UserTemplate(content)],
      postback: data.postback,
    })
  }

  render() {
    const { postback, conversation, initialised } = this.state
    const {
      changeView,
      profile: { welcomeFlow, avatar, quote },
    } = this.props

    if (!initialised) return <div />

    return (
      <div className="vh-100">
        <Quote
          quote={quote}
          welcomeFlow={welcomeFlow}
          setQuoteVanished={() => this.setState({ quoteVanished: true })}
        />
        <GlobalStyle />
        {welcomeFlow ? (
          ""
        ) : (
          <img
            src={exit}
            alt="exit chat"
            className="fixed top-0 right-0"
            onClick={this.onRestartClick}
          />
        )}
        <_ChatContainer welcome={welcomeFlow}>
          <_MessageContainer>
            <RenderConversation
              conversation={conversation}
              onLinkClick={this.onInternalLinkClick}
              userAvatar={avatar}
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
        {welcomeFlow ? "" : <NavBar />}
      </div>
    )
  }
}

export default connect(
  ({ profile, staticData: { quotes }, chatbot }) => ({
    profile,
    quotes,
    chatbot,
  }),
  {
    changeView,
    selectTopic,
    setPageIndex,
    saveConversation,
  }
)(Home)
