import styled from "styled-components"

import { _ValidateMsg } from "./Text"

const ValidationMsg = ({ valid, validateMsg }) => {
  if (!valid) {
    return <_ValidateMsg>{validateMsg}</_ValidateMsg>
  }
  return <div />
}

const StyledInput = styled.input.attrs({
  className: "sans dark-gray bg-white-30 ba br3 mb1 font-2 w-100 center",
})`
  border-color: ${({ valid }) => (valid ? `var(--moon-gray)` : `var(--red)`)};
  border-width: thin;
  outline: none;
`

const Input = ({ children, valid, validateMsg, width, ...inputProps }) => (
  <div className={`ma2 center ${width}`}>
    <StyledInput {...inputProps} valid={valid}>
      {children}
    </StyledInput>
    <ValidationMsg valid={valid} validateMsg={validateMsg} />
  </div>
)

export default Input
