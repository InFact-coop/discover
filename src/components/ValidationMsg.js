import styled from "styled-components"

import { _ValidateMsg } from "./Text"

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  bottom: ${({ bottom }) => bottom};
`

const InnerWrapper = styled.div`
  position: relative;
  left: -50%;
`

const ValidationMsg = ({ valid, children, bottom }) => {
  if (valid) return <div />
  return (
    <Wrapper bottom={bottom}>
      <InnerWrapper>
        <_ValidateMsg>{children}</_ValidateMsg>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ValidationMsg
