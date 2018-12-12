import styled from "styled-components"
import { connect } from "react-redux"
import listOfGoals from "../assets/icons/list_of_goals.svg"
import myGoal from "../assets/icons/my_goal.svg"
import botIcon from "../assets/icons/bot_icon.svg"
import help from "../assets/icons/help.svg"
import tips from "../assets/icons/tips.svg"
import listOfGoalsActive from "../assets/icons/list_of_goals_active.svg"
import myGoalActive from "../assets/icons/my_goal_active.svg"
import botIconActive from "../assets/icons/bot_icon_active.svg"
import helpActive from "../assets/icons/help_active.svg"
import tipsActive from "../assets/icons/tips_active.svg"
import { Home, MyGoal, GoalProgress, Summary, Help } from "../views"
import { changeView } from "../state/actions/router"

const _Container = styled.div.attrs({
  className: "flex w-100",
})`
  position: fixed;
  bottom: 0;
  background-color: var(--near-white);
`

const _Icon = styled.img.attrs({
  className: "flex items-center justify-center w-20 pa2",
})``

const NavBar = ({ currentView, changeView }) => (
  <_Container>
    <_Icon
      src={currentView === GoalProgress ? listOfGoalsActive : listOfGoals}
      onClick={() => changeView(GoalProgress)}
    />
    <_Icon
      src={currentView === MyGoal ? myGoalActive : myGoal}
      onClick={() => changeView(MyGoal)}
    />
    <_Icon
      src={currentView === Home ? botIconActive : botIcon}
      onClick={() => changeView(Home)}
    />
    <_Icon
      src={currentView === Help ? helpActive : help}
      onClick={() => changeView(Help)}
    />
    <_Icon
      src={currentView === Summary ? tipsActive : tips}
      onClick={() => changeView(Summary)}
    />
  </_Container>
)

export default connect(
  ({ router: { currentView } }) => ({ currentView }),
  { changeView }
)(NavBar)
