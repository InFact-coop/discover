import { Component } from "react"
import styled from "styled-components"
import "./styles/index.css"

const Title = styled.div.attrs({
  className: "flex justify-center bg-light-purple",
})``

export default class App extends Component {
  state = {
    name: "discover",
  }

  render() {
    return (
      <Title className="App">
        <h1>Welcome to {this.state.name}</h1>
      </Title>
    )
  }
}
