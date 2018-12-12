import styled from "styled-components"

const ActionButton = styled.button.attrs({
  className: "fw6 ttu white bg-dark-gray br-pill db bn center",
})`
  width: 220px;
  height: 55px;
  position: relative;
  bottom: ${({ positionBottom }) => `${positionBottom}`};
`

const ActionButtonContainer = styled.div.attrs({
  className: "flex justify-center w-100",
})`
  position: fixed;
  bottom: 75px;
`

export { ActionButton, ActionButtonContainer }
