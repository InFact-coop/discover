import styled from "styled-components"

import { _ValidateMsg } from "./Text"

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  bottom: -8px;
`

const InnerWrapper = styled.div`
  position: relative;
  left: -50%;
`

const ValidateMsg = ({ valid, children }) => {
  if (valid) return <div />
  return (
    <Wrapper>
      <InnerWrapper>
        <_ValidateMsg>{children}</_ValidateMsg>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ValidateMsg
