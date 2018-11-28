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

class Home extends Component {
  state = {
    conversation: [{ content: "Hello I'm Ivan and I'm back", type: User }],
    postback: {},
  }
  onOptionClick = async option => {
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: { content: option },
      },
    })
    console.log(data)
  }
  componentDidMount = async () => {
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: this.state.conversation[0].content,
      },
    })

    this.setState({
      conversation: [
        ...this.state.conversation,
        ...data.responses.map(BotTemplate),
      ],
      postback: data.postback,
    })
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
