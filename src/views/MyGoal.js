import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import GoalDetails from "../components/GoalDetails"
import NavBar from "../components/NavBar"
import { changeView } from "../state/actions/router"
import goalIcon from "../assets/icons/my_goal_big.svg"
import { EditGoal } from "."
import ActionButton from "../components/shared/ActionButton"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--washed-green)
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column mt5 items-center",
})`
  height: 90vh;
`

const MyGoal = ({ changeView }) => (
  <_Container>
    <GlobalStyle />
    <img src={goalIcon} />
    <GoalDetails section={"description"} />
    <GoalDetails section={"technique"} />
    <GoalDetails section={"days"} />
    <GoalDetails section={"time"} />
    <GoalDetails section={"progress"} />
    <ActionButton onClick={() => changeView(EditGoal)}>
      EDIT MY GOAL
    </ActionButton>
    <NavBar />
  </_Container>
)

export default connect(
  null,
  { changeView }
)(MyGoal)
