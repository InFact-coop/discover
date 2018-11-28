import { Component } from "react"
import NavBar from "../components/NavBar"
import styled, { createGlobalStyle } from "styled-components"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace
import exit from "../assets/icons/exit_bot.svg"
const User = "User"
const Bot = "Bot"
import background from "../assets/backgrounds/bg_bot.svg"

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
  className: "mono font-4 pv2 ph3 mb2 mh2",
})`
  border-radius: ${({ user }) =>
    user ? `21px 21px 6px 21px` : `21px 21px 21px 6px`};
  max-width: 210px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`

const _MessageContainer = styled.div.attrs({
  className: "flex flex-column message-container",
})`
  padding-top: 60px;
  overflow-y: scroll;
`

const _Option = styled.button.attrs({
  className: "bg-white blue ba b--blue pv3 mb2",
})`
  width: ${({ number }) => (number === 2 ? "50%" : "100%")};
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`

const _OptionContainer = styled.div.attrs({
  className: "border-box w-100 ph3",
})`
  // bottom: 60px;
`

const RenderConversation = ({ conversation }) => {
  return conversation.map(({ content, type }) => (
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
}
const RenderOptions = ({ options, payload, onButtonClick }) => {
  if (!options) {
    return <_Option onClick={() => onButtonClick(payload)}>{payload}</_Option>
  }
  return (
    <div>
      {payload.map(option => (
        <_Option key={option} onClick={() => onButtonClick(option)}>
          {option}
        </_Option>
      ))}
    </div>
  )
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
    conversation: [{ content: "Hello I'm Ivan and I'm back", type: User }],
    postback: {},
  }

  scrollToBottom = () => {
    const elem = document.querySelector(".message-container")
    elem.scrollTop = elem.scrollHeight
  }

  onOptionClick = async option => {
    this.setState(prevState => ({
      conversation: [...prevState.conversation, UserTemplate(option)],
    }))
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: option,
      },
    })

    this.setState(prevState => ({
      conversation: [
        ...prevState.conversation,
        ...data.responses.map(BotTemplate),
      ],
      postback: data.postback,
    }))
    this.scrollToBottom()
  }

  componentDidMount = async () => {
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: this.state.conversation[0].content,
      },
    })

    this.setState(prevState => ({
      conversation: [
        ...prevState.conversation,
        ...data.responses.map(BotTemplate),
      ],
      postback: data.postback,
    }))
    this.scrollToBottom()
  }

  render() {
    const { postback, conversation } = this.state
    return (
      <div>
        <GlobalStyle />
        <img src={exit} alt="exit chat" className="fixed top-0 right-0" />
        <_ChatContainer>
          <_MessageContainer>
            <RenderConversation conversation={conversation} />
          </_MessageContainer>

          {r.isEmpty(postback) ? (
            <div />
          ) : (
            <_OptionContainer>
              <RenderOptions
                {...postback}
                onButtonClick={this.onOptionClick}
                number={postback.payload.length}
              />
            </_OptionContainer>
          )}
        </_ChatContainer>
        <NavBar />
      </div>
    )
  }
}

export default Home
