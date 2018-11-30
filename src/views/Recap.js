import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import GoalDetails from "../components/GoalDetails"
import BackButton from "../components/BackButton"
import { GoalTime, AllSet } from "."
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_RECAP.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center justify-center center",
})``

const _Title = styled.p.attrs({
  className: "mono font-1 tc ma2 mt6",
})`
  color: var(--mid-gray);
  font-weight: 500;
`
const _Description = styled.p.attrs({
  className: "mono font-3 tc ma2",
})``

const _InnerContainer = styled.div.attrs({
  className: "flex flex-column items-center ma3 pa5 br4",
})`
  background-color: var(--white-70);
  width: 90%;
`

const _NextButton = styled.div.attrs({
  className: "w-60 sans font-3 flex items-center justify-center br-pill mb3",
})`
  height: 4.5rem;
  background-color: var(--mid-gray);
  font-weight: 500;
  color: white;
`

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
    <_NextButton onClick={() => changeView(AllSet)}>COOL LET'S GO</_NextButton>
  </_Container>
)

Recap.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default connect(
  null,
  { changeView }
)(Recap)
