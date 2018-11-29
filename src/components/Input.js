import styled from "styled-components"

export default styled.input.attrs({
  className: "sans dark-gray bg-white-30 ba br3 ma2",
})`
  border-color: ${({ inValid }) =>
    inValid ? `var(--red)` : `var(--moon-gray)`};
  border-width: thin;
  outline: none;
`
