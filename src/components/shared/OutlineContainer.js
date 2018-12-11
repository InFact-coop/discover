import styled from "styled-components"

const OutlineContainer = styled.div.attrs({
  className: ({ br }) => `${br}`,
})`
  margin: ${({ margin }) => `${margin}`};
  padding: 3px;
  border: ${({ selected }) =>
    selected ? "thin solid var(--gray)" : "thin solid transparent"};
`

export default OutlineContainer
