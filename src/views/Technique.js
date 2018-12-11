import { Component, Fragment } from "react"
import { connect } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import * as r from "ramda" // eslint-disable-line

import { GoalDays, EditGoal } from "."
import { changeTechniques } from "../state/actions/currentGoal"
import { changeView } from "../state/actions/router"
import background from "../assets/backgrounds/bg_which_technique.svg"

import ProgressBar from "../components/ProgressBar"
import BackButton from "../components/BackButton"
import SaveButton from "../components/SaveButton"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import { _Title } from "../components/Text"
import ValidationMsg from "../components/ValidationMsg"

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${background}) no-repeat;
    background-size: cover;
  }
`
const _Container = styled.div.attrs({
  className: "flex flex-column items-center mt6",
})`
  height: 90vh;
`

const _Question = styled.p.attrs({
  className: "mono font-4 w-90 tc mt1 dark-gray center",
})``

const _Hint = styled.p.attrs({
  className: "mono font-4 b mt1 dark-gray center tc",
})``

class Technique extends Component {
  state = {
    techniques: [],
    selectedTechniques: [],
    valid: true,
    submitted: false,
  }

  componentDidMount() {
    const { staticData, currentGoal } = this.props
    this.setState({
      techniques: staticData.techniques.map(t => ({
        ...t,
        selected: currentGoal.techniques.includes(t.title),
      })),
      selectedTechniques: currentGoal.techniques,
    })
  }

  onCardClick = title => () => {
    const { techniques, submitted } = this.state
    const updatedTechniques = techniques.map(technique => {
      const { selected } = technique
      if (technique.title === title) {
        technique.selected = !selected
      }
      return technique
    })

    const selectedTechniques = updatedTechniques
      .filter(({ selected }) => selected)
      .map(({ title }) => title)

    this.setState({
      techniques: updatedTechniques,
      selectedTechniques,
      valid: submitted ? !r.isEmpty(selectedTechniques) : true,
    })
  }

  saveFunction = () => {
    const { changeTechniques } = this.props
    const { selectedTechniques } = this.state
    changeTechniques(selectedTechniques)
  }

  setInvalid = () => {
    this.setState({ valid: false, submitted: true })
  }

  render() {
    const { techniques, selectedTechniques, valid } = this.state

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
          <div className="relative mb4">
            <_Title className="mb2 mt1">Great!</_Title>
            <_Question>
              and which technique will you choose to achieve your goal?
            </_Question>
            <_Hint>&#40;you can choose more than one!&#41;</_Hint>
            <ValidationMsg valid={valid} bottom="-22px">
              Choose a technique or 'skip'
            </ValidationMsg>
          </div>
          <Carousel
            initialIndex={
              selectedTechniques.length !== 0 &&
              techniques.map(t => t.title).indexOf(selectedTechniques[0])
            }
          >
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
        </_Container>
        <SaveButton
          valid={!r.isEmpty(selectedTechniques)}
          saveFunction={this.saveFunction}
          redirectTo={edit ? EditGoal : GoalDays}
          text={edit ? "SAVE" : "NEXT"}
          setInvalid={this.setInvalid}
        />
      </Fragment>
    )
  }
}

Technique.propTypes = {
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
