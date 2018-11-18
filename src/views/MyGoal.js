import styled, { createGlobalStyle } from "styled-components"
import GoalDetails from "../components/GoalDetails"
import goalIcon from "../assets/icons/my_goal_big.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--washed-green)
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column mt5 items-center",
})`
  height: 100vh;
`

const _GoalImage = styled.img.attrs({
  className: "",
})``

const _EditButton = styled.div.attrs({
  className: "w-60 sans font-3 flex items-center justify-center br-pill",
})`
  height: 3.5rem;
  background-color: var(--mid-gray);
  font-weight: 500;
  color: white;
`
const MyGoal = () => (
  <_Container>
    <GlobalStyle />
    <_GoalImage src={goalIcon} />
    <GoalDetails section={"description"} />
    <GoalDetails section={"technique"} />
    <GoalDetails section={"days"} />
    <GoalDetails section={"time"} />
    <GoalDetails section={"progress"} />
    <_EditButton> EDIT MY GOAL</_EditButton>
  </_Container>
)

export default MyGoal
