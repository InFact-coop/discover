import { Component } from "react"
import { connect } from "react-redux"
import NavBar from "../components/NavBar"
import styled, { createGlobalStyle } from "styled-components"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { changeView } from "../state/actions/router"

import { Help } from "."

import exit from "../assets/icons/exit_bot.svg"
import background from "../assets/backgrounds/bg_bot.svg"

const User = "User"
const Bot = "Bot"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`

const _ChatContainer = styled.div.attrs({
  className: "flex flex-column justify-between mb4",
})`
  height: calc(100vh - 60px);
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
  conversation.map(({ content, type }) => (
    <_Message
      className={
        type === User
          ? "self-end bg-blue white user-style"
          : "bg-white dark-gray"
      }
      user={type === User}
      key={content}
    >
      {content}
    </_Message>
  ))

const RenderOptions = ({
  options,
  payload,
  onOptionClick,
  number,
  changeView,
  addContext,
}) => {
  if (!options) {
    return (
      <_Option
        number={1}
        onClick={() => onOptionClick({ option: payload, addContext })}
      >
        {payload}
      </_Option>
    )
  }
  return payload.map(option => {
    if (option === "Show me the crisis resources please")
      return (
        <_Option key={option} onClick={() => changeView(Help)} number={number}>
          {option}
        </_Option>
      )

    return (
      <_Option
        key={option}
        onClick={() => onOptionClick({ option, addContext })}
        number={number}
      >
        {option}
      </_Option>
    )
  })
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

  onOptionClick = async ({ option, addContext }) => {
    this.setState(prevState => ({
      conversation: [...prevState.conversation, UserTemplate(option)],
    }))

    const query = (() => {
      if (addContext) {
        const context = r.pipe(
          r.findLast(r.propEq("type", Bot)),
          r.prop("content")
        )(this.state.conversation)
        return `${context} - ${option}`
      }
      return option
    })()

    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query,
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
    this.setState({
      conversation: [],
      postback: {},
    })

    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: "Hello I'm Ivan and I'm back",
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
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: "Hello I'm Ivan and I'm back",
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
    const { changeView } = this.props
    return (
      <div>
        <GlobalStyle />
        <img
          src={exit}
          alt="exit chat"
          className="fixed top-0 right-0"
          onClick={this.onExitClick}
        />
        <_ChatContainer>
          <_MessageContainer>
            <RenderConversation conversation={conversation} />
          </_MessageContainer>

          {r.isEmpty(postback) ? (
            <div />
          ) : (
            <_OptionContainer number={postback.payload.length}>
              <RenderOptions
                {...postback}
                onOptionClick={this.onOptionClick}
                number={postback.payload.length}
                changeView={changeView}
              />
            </_OptionContainer>
          )}
        </_ChatContainer>
        <NavBar />
      </div>
    )
  }
}

export default connect(
  ({ profile }) => ({ profile }),
  { changeView }
)(Home)
