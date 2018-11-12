import { connect } from "react-redux"

import { changeView } from "../state/actions/router"

import CodeForm from "../components/CodeForm/CodeForm"

const Code = () => <CodeForm />

export default connect(
  null,
  { changeView }
)(Code)
