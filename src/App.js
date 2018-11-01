import { Component } from "react"
import { hot } from "react-hot-loader"
import styled from "styled-components"

const Title = styled.div.attrs({
  className: "flex justify-center bg-light-yellow",
})``

class App extends Component {
  state = {
    name: "discover",
  }

  render() {
    return (
      <Title className="App">
        <h1 style={{ color: this.props.titleColor }}>
          Welcome to {this.state.name}
        </h1>
      </Title>
    )
  }
}

export default hot(module)(App)
