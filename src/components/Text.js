import styled from "styled-components"
import { breakpoint } from "../styles/utils"

const _Title = styled.h1.attrs({
  className: "mono dark-gray fw5 tc center",
})`
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);

  ${breakpoint.supersmall`
  font-size: 24px;
  line-height: 28px;
`};
`

const _ValidateMsg = styled.p.attrs({
  className: "red font-5 mono center tc",
})``

export { _Title, _ValidateMsg } //eslint-disable-line
