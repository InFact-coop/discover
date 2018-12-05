import styled from "styled-components"

const ActionButton = styled.button.attrs({
  className: "fw6 ttu white bg-dark-gray br-pill db bn",
})`
  width: 220px;
  height: 55px;
  margin: auto;
  position: relative;
  bottom: ${({positionBottom}) => `${positionBottom}`};
`

export default ActionButton
