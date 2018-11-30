import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import GoalDetails from "../components/GoalDetails"
import BackButton from "../components/BackButton"
import { GoalTime, AllSet } from "."
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_RECAP.svg"
import ActionButton from "../components/shared/ActionButton"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center center vh-100",
})``

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma2 mt6 dark-gray fw5",
})``
const _Description = styled.p.attrs({
  className: "mono font-3 tc ma2",
})``

const _InnerContainer = styled.div.attrs({
  className: "flex flex-column items-center ma3 pa5 br4 bg-white-70 w-90",
})``

const Recap = ({ changeView }) => (
  <_Container>
    <GlobalStyle />
    <BackButton action="back" to={GoalTime} />
    <_Title>Oky, Doky!</_Title>
    <_Description>So let's recap</_Description>
    <_InnerContainer>
      <GoalDetails section={"description"} />
      <GoalDetails section={"technique"} />
      <GoalDetails section={"days"} />
      <GoalDetails section={"time"} />
      <GoalDetails section={"duration"} />
    </_InnerContainer>
    <ActionButton onClick={() => changeView(AllSet)}>
      COOL LET'S GO
    </ActionButton>
  </_Container>
)

Recap.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default connect(
  null,
  { changeView }
)(Recap)
