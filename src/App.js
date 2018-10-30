import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const Title = styled.div.attrs({
  className: "flex justify-center bg-light-purple",
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

const mapStateToProps = ({ app }) => {
  return {
    titleColor: app.titleColor,
  }
}

export default connect(mapStateToProps)(App)
