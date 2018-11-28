import { Component } from "react"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

const User = "User"
const Bot = "Bot"

const _Message = styled.div.attrs({
  className: "mono font-4 pv2 ph3 mb2 mh2",
})`
  border-radius: ${({ user }) =>
    user ? `21px 21px 6px 21px` : `21px 21px 21px 6px`};
  max-width: 210px;
`

const _Button = styled.button.attrs({
  className: "bg-white blue ba b--blue pa3",
})`
  border-radius: 6px;
`

const Message = ({ content, type }) => (
  <_Message
    className={
      type === User ? "self-end bg-blue white user-style" : "bg-white dark-gray"
    }
    user={type === User}
  >
    {content}
  </_Message>
)

const ButtonOptions = ({ options, payload, onButtonClick }) => {
  if (!options) {
    return <_Button onClick={() => onButtonClick(payload)}>{payload}</_Button>
  }
  return (
    <div>
      {payload.map(option => (
        <_Button key={option} onClick={() => onButtonClick(option)}>
          {option}
        </_Button>
      ))}
    </div>
  )
}

const BotTemplate = content => ({
  content,
  type: Bot,
})

class Home extends Component {
  state = {
    conversation: [{ content: "Hello I'm Ivan and I'm back", type: User }],
    postback: {},
  }

  onOptionClick = async option => {
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
  }

  render() {
    const { postback } = this.state
    return (
      <div>
        <h1 className="font-1 sans">Home</h1>
        <div className="flex flex-column">
          {this.state.conversation.map(message => (
            <Message {...message} key={message.content} />
          ))}
          {r.isEmpty(postback) ? (
            <div />
          ) : (
            <ButtonOptions {...postback} onButtonClick={this.onOptionClick} />
          )}
        </div>
        <NavBar />
      </div>
    )
  }
}

export default Home
