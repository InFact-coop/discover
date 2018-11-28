import { Component } from "react"
import NavBar from "../components/NavBar"
import axios from "axios"

const User = "User"
const Bot = "Bot"

const Message = ({ content, type }) => (
  <p className={type === User ? "self-end" : ""}>{content}</p>
)

const ButtonOptions = ({ options, payload }) => {
  if (options) {
    return <button>{payload}</button>
  }
  return (
    <div>
      {payload.map(option => (
        <button key={option}>{option}</button>
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

  componentDidMount = async () => {
    const { data } = await axios.get("/api/user/dialogflow", {
      params: {
        query: this.state.conversation[0],
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
          <ButtonOptions />
        </div>
        <NavBar />
      </div>
    )
  }
}

export default Home
