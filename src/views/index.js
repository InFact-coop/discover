import { Fragment, Component } from "react"
import { connect } from "react-redux"
import { verifyToken } from "../state/actions/code"
import Loading from "./Loading"
import Router from "./Router"
import Code from "./Code"

class Verify extends Component {
  componentDidUpdate() {
    const { verifyToken, code } = this.props
    verifyToken(code)
  }

  render() {
    const { isVerified, isLoading } = this.props

    if (isLoading) return <Loading />
    return <Fragment>{isVerified ? <Router /> : <Code />}</Fragment>
  }
}

export default connect(
  ({ code: { isVerified, isLoading, code } }) => ({
    isVerified,
    isLoading,
    code,
  }),
  { verifyToken }
)(Verify)
