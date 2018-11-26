import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import GoalDetails from "../components/GoalDetails"
import NavBar from "../components/NavBar"
import { changeView } from "../state/actions/router"
import goalIcon from "../assets/icons/my_goal_big.svg"
import { EditGoal } from "."

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

const _EditButton = styled.div.attrs({
  className: "w-60 sans font-3 flex items-center justify-center br-pill",
})`
  height: 3.5rem;
  background-color: var(--mid-gray);
  font-weight: 500;
  color: white;
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
    <_EditButton onClick={() => changeView(EditGoal)}>EDIT MY GOAL</_EditButton>
    <NavBar />
  </_Container>
)

export default connect(
  null,
  { changeView }
)(MyGoal)
