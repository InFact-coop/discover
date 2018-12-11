import styled from "styled-components"
import PropTypes from "prop-types"

const _Bar = styled.div.attrs({
  className: "flex w-100",
})`
  position: fixed;
  top: 0;
`

const _Step = styled.div.attrs({
  className: "mr1",
})`
  width: 16%;
  height: 0.2rem;
  background-color: ${({ progress, step }) =>
    progress >= step ? `var(--dark-gray);` : `var(--moon-gray);`};
`

const ProgressBar = ({ progress }) => (
  <_Bar>
    <_Step step={1} progress={progress} />
    <_Step step={2} progress={progress} />
    <_Step step={3} progress={progress} />
    <_Step step={4} progress={progress} />
    <_Step step={5} progress={progress} />
    <_Step step={6} progress={progress} style={{ marginRight: 0 }} />
  </_Bar>
)

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
