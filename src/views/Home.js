import { Component } from "react"
import NavBar from "../components/NavBar"
import axios from "axios"
import * as r from "ramda" //eslint-disable-line import/no-namespace

const User = "User"
const Bot = "Bot"

const Message = ({ content, type }) => (
  <p className={type === User ? "self-end" : ""}>{content}</p>
)

const ButtonOptions = ({ options, payload, onButtonClick }) => {
  if (!options) {
    return <button onClick={() => onButtonClick(payload)}>{payload}</button>
  }
  return (
    <div>
      {payload.map(option => (
        <button key={option} onClick={() => onButtonClick(option)}>
          {option}
        </button>
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
