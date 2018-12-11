import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import GoalDetails from "../components/GoalDetails"
import NavBar from "../components/NavBar"
import { changeView } from "../state/actions/router"
import goalIcon from "../assets/icons/my_goal_big.svg"
import { EditGoal } from "."
import { ActionButton } from "../components/shared/ActionButton"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--washed-green);
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center relative",
})`
  height: calc(100vh - 60px);
  width: 99%;
`

const _InnerContainer = styled.div.attrs({
  className: "w-100",
})`
  height: calc(100vh - 147px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const MyGoal = ({ changeView }) => (
  <_Container>
    <GlobalStyle />
    <_InnerContainer>
      <img src={goalIcon} className="mv3 center db" />
      <GoalDetails section={"description"} />
      <GoalDetails section={"technique"} />

      <GoalDetails section={"days"} />
      <GoalDetails section={"time"} />
      <GoalDetails section={"progress"} />
    </_InnerContainer>
    <div className="absolute bottom-0 mb3">
      <ActionButton onClick={() => changeView(EditGoal)}>
        EDIT MY GOAL
      </ActionButton>
    </div>
    <NavBar />
  </_Container>
)

export default connect(
  null,
  { changeView }
)(MyGoal)
