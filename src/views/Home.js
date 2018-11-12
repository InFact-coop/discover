import { Component } from "react"
import { connect } from "react-redux"

import { changeView } from "../state/actions/router"
import { Technique } from "./Router"

import Title from "../components/Title"

class Home extends Component {
  render() {
    const { changeView } = this.props
    return (
      <div>
        <h1 className="font-1 sans">Home</h1>
        <Title />
        <div onClick={() => changeView(Technique)}>Go to Technique</div>
      </div>
    )
  }
}

export default connect(
  null,
  { changeView }
)(Home)
