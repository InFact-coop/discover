import styled from "styled-components"

import { _ValidateMsg } from "./Text"

const ValidationMsg = ({ invalid, validateMsg }) => {
  if (invalid) {
    return <_ValidateMsg>{validateMsg}</_ValidateMsg>
  }
  return <div />
}

const StyledInput = styled.input.attrs({
  className: "sans dark-gray bg-white-30 ba br3 mb1 font-2 w-100 center",
})`
  border-color: ${({ invalid }) =>
    invalid ? `var(--red)` : `var(--moon-gray)`};
  border-width: thin;
  outline: none;
`

const Input = ({ children, invalid, validateMsg, width, ...inputProps }) => (
  <div className={`ma2 center ${width}`}>
    <StyledInput {...inputProps} invalid={invalid}>
      {children}
    </StyledInput>
    <ValidationMsg invalid={invalid} validateMsg={validateMsg} />
  </div>
)

export default Input
