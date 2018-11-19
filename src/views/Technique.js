import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import ProgressBar from "../components/ProgressBar"
import BackButton from "../components/BackButton"
import SaveButton from "../components/SaveButton"
import { GoalDays, EditGoal } from "."
import { changeTechniques } from "../state/actions/currentGoal"
import { changeView } from "../state/actions/router"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import background from "../assets/backgrounds/bg_which_technique.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center",
})`
  margin-top: 10%;
`

const _Title = styled.p.attrs({
  className: "mono font-1 ma3",
})`
  color: var(--mid-gray);
  font-weight: 500;
`

const _Question = styled.p.attrs({
  className: "mono font-4 w-90 tc mt1",
})`
  color: var(--gray);
`

const _Hint = styled.p.attrs({
  className: "mono font-4 b mt1 mb3",
})`
  color: var(--mid-gray);
`

class Technique extends Component {
  state = {
    techniques: [],
  }
  componentDidMount() {
    const { staticData, currentGoal } = this.props
    this.setState({
      techniques: staticData.techniques.map(t => ({
        ...t,
        selected: currentGoal.techniques.includes(t.title),
      })),
    })
  }
  onCardClick = title => () => {
    const { techniques } = this.state
    this.setState({
      techniques: techniques.map(technique => {
        const { selected } = technique
        if (technique.title === title) {
          technique.selected = !selected
        }
        return technique
      }),
    })
  }

  saveFunction = () => {
    const { changeTechniques } = this.props
    const { techniques } = this.state
    const selectedTechniques = techniques
      .filter(({ selected }) => selected)
      .map(({ title }) => title)
    changeTechniques(selectedTechniques)
  }
  render() {
    const { techniques } = this.state
    const {
      changeView,
      router: { history },
    } = this.props
    const edit = history[history.length - 1] === "EditGoal"
    return (
      <Fragment>
        <GlobalStyle />
        <_Container>
          {!edit && <ProgressBar progress={4} />}
          <BackButton />
          <_Title> Great!</_Title>
          <_Question>
            and which technique will you choose to achieve your goal?
          </_Question>
          <_Hint>&#40;you can choose more than one!&#41;</_Hint>
        </_Container>
        <Carousel>
          {techniques.map(
            ({ title, description, image, backgroundColor, selected }) => {
              const onClick =
                title === "I want to SKIP this bit!"
                  ? () => changeView(GoalDays)
                  : this.onCardClick(title)
              return (
                <Card
                  key={title}
                  width="17rem"
                  height="22rem"
                  title={title}
                  description={description}
                  image={image}
                  backgroundColor={backgroundColor}
                  selected={selected}
                  onCardClick={onClick}
                />
              )
            }
          )}
        </Carousel>
        {edit ? (
          <SaveButton
            saveFunction={this.saveFunction}
            redirectTo={EditGoal}
            text="SAVE"
          />
        ) : (
          <SaveButton
            saveFunction={this.saveFunction}
            redirectTo={GoalDays}
            text="NEXT"
          />
        )}
      </Fragment>
    )
  }
}

Technique.prototypes = {
  staticData: PropTypes.object.isRequired,
  currentGoal: PropTypes.object,
  changeTechniques: PropTypes.func.isRequired,
}

export default connect(
  ({ router, staticData, currentGoal }) => ({
    staticData,
    currentGoal,
    router,
  }),
  { changeTechniques, changeView }
)(Technique)
