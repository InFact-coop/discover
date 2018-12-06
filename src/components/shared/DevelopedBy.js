import styled from "styled-components"
import discoverLogo from "../../assets/images/discover_logo.png"

const _Message = styled.p.attrs({
  className: "mono lh-5 mb3",
})`
  font-weight: 500;
  color: var(--dark-gray);
`

const DevelopedByContainer = styled.div.attrs({
  className: "flex flex-column items-center",
})`
  position: fixed;
  bottom: 10vh;
`

const DevelopedBy = () => (
  <DevelopedByContainer>
    <_Message> A WEB APP DEVELOPED BY </_Message>
    <img className="w-60" src={discoverLogo} />
  </DevelopedByContainer>
)

export default DevelopedBy
