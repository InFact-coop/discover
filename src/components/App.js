import { Component } from "react"
import { hot } from "react-hot-loader"
import Title from "./Title"

class App extends Component {
  render() {
    return <Title />
  }
}

export default hot(module)(App)
