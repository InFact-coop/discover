import styled from "styled-components"

const _BackgroundImg = styled.div`
  background: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export default _BackgroundImg
