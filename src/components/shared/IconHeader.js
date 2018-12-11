import styled from "styled-components"
import { Component } from "react"

const _Wrapper = styled.div.attrs({
  className: "flex flex-column items-center justify-center w-100 pv3",
})``

const _RoundIcon = styled.div.attrs({
  className: "bg-center",
})`
  width: 85px;
  height: 85px;
  background: ${({ icon }) => `url(${icon})`};
`

const _Heading = styled.h1.attrs({
  className: "sans font-4 fw5 dark-gray mv2",
})``

class IconHeader extends Component {
  render() {
    const { title, icon } = this.props
    return (
      <_Wrapper>
        <_RoundIcon icon={icon} />
        <_Heading>{title}</_Heading>
      </_Wrapper>
    )
  }
}

export default IconHeader
