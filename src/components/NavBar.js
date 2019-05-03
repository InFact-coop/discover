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
  className: "flex w-100 justify-between",
})`
  position: fixed;
  bottom: 0;
  background-color: var(--near-white);
  height: 10%;
`

const _IconContainer = styled.div.attrs({
  className: "flex-column w-20",
})``

const _IconLabel = styled.p.attrs({
  className: "w-100 tc pb1 sans font-6",
})``

const _Icon = styled.img.attrs({
  className: "flex items-center w-100 justify-center pa1",
})`
  height: 70%;
`

const labelIconsPage = [
  ["Goal", listOfGoals, listOfGoalsActive, GoalProgress],
  ["Edit", myGoal, myGoalActive, MyGoal],
  ["Bot", botIcon, botIconActive, Home],
  ["Crisis", help, helpActive, Help],
  ["Tips", tips, tipsActive, Summary],
]

const Icon = ({ currentView, changeView, label, icon, iconActive, page }) => (
  <_IconContainer>
    <_Icon
      src={currentView === page ? iconActive : icon}
      onClick={() => changeView(page)}
    />
    <_IconLabel>{label}</_IconLabel>
  </_IconContainer>
)

const NavBar = ({ currentView, changeView }) => (
  <_Container>
    {labelIconsPage.map(([label, icon, iconActive, page], key) => (
      <Icon
        key={key}
        currentView={currentView}
        changeView={changeView}
        label={label}
        icon={icon}
        iconActive={iconActive}
        page={page}
      />
    ))}
  </_Container>
)

export default connect(
  ({ router: { currentView } }) => ({ currentView }),
  { changeView }
)(NavBar)
