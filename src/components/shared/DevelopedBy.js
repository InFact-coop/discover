import styled from "styled-components"

const _Message = styled.p.attrs({
  className: "mono font-5 mt7",
})`
  font-weight: 500;
  color: var(--dark-gray);
`
const DevelopedBy = () => <_Message> A WEB APP DEVELOPED BY </_Message>

export default DevelopedBy
