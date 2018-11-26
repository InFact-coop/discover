import { Component } from "react"
import icon from "../assets/icons/tips_big.svg"
import IconHeader from "../components/shared/IconHeader"
import { connect } from "react-redux"
import { changeView } from "../state/actions/router"
import NavBar from "../components/NavBar"

const Summary = () => (
  <div>
    <IconHeader title="Summary of DISCOVER tips" icon={icon} />
    <NavBar />
  </div>
)

export default connect(
  null,
  { changeView }
)(Summary)
