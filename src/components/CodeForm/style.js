import styled from "styled-components"
import arrowGo from "../../assets/icons/arrow_go.svg"

export const InputWithButton = styled.div.attrs({
  className: "flex justify-center items-center",
})``

export const Form = styled.div.attrs({
  className: "flex flex-column justify-center items-center h-50",
})``

export const Title = styled.p.attrs({
  className: "flex justify-center ma6 sans font-1",
})`
  color: var(--dark-gray);
`

export const Message = styled.p.attrs({
  className: "flex justify-center ma1 sans font-4",
})`
  color: var(--dark-gray);
`

export const CodeInput = styled.input.attrs({
  className: "w-40 h2 ma2 br2",
})`
  border-color: var(--moon-gray);
  border-width: thin;
`

export const SubmitButton = styled.div.attrs({
  className: "br-100 h2 w2 tc",
})`
  background: url(${arrowGo}) no-repeat center center;
  background-color: var(--yellow);
`
