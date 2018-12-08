import styled from "styled-components"

import ValidationMsg from "./ValidationMsg"

const StyledInput = styled.input.attrs({
  className: "sans dark-gray bg-white-30 ba br3 mb1 font-2 w-100 center",
})`
  border-color: ${({ valid }) => (valid ? `var(--moon-gray)` : `var(--red)`)};
  border-width: thin;
  outline: none;
`

const InputWithValidation = ({
  children,
  valid,
  validateMsg,
  width,
  ...inputProps
}) => (
  <div className={`ma2 center ${width}`}>
    <StyledInput {...inputProps} valid={valid}>
      {children}
    </StyledInput>
    <ValidationMsg valid={valid}>{validateMsg}</ValidationMsg>
  </div>
)

export { StyledInput, InputWithValidation }
