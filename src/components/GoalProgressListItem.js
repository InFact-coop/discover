import { Component } from "react"
import styled from "styled-components"

const _GoalText = styled.h2.attrs({
  className: "w-100 font-4 sans dark-gray mb2",
})``

const _ProgressBar = styled.div.attrs({
  className: "w-100 ba b--moon-gray br3 tc relative",
})`
  height: 20px;
`
const _ProgressFill = styled.div.attrs({
  className: "",
})`
  border-radius: 7px;
  height: 18px;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ color }) => `var(--${color})`};
  opacity: 0.5;
`
const _ProgressText = styled.h2.attrs({
  className: "mono font-6 dark-gray absolute top-0",
})`
  left: 50%;
  transform: translateX(-50%);
  line-height: 20px;
`

export default class Goal extends Component {
  render() {
    const { width, color, goal, progressText } = this.props
    return (
      <div className="mb4 w-100">
        <_GoalText>{goal}</_GoalText>
        <_ProgressBar>
          <_ProgressFill width={width} color={color} />
          <_ProgressText>{progressText}</_ProgressText>
        </_ProgressBar>
      </div>
    )
  }
}
