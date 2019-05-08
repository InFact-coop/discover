import { Component } from "react"
import styled from "styled-components"

const _QuoteContainer = styled.div.attrs({
  className: ({ displayClasses }) =>
    `w-100 sans flex-column fixed justify-center items-center h4 bg-white shadow-2 z-2 tc ${displayClasses}`,
})`
  transition: 0.7s;
`

const _Quote = styled.div.attrs({
  className: "font-4 bold dark-gray mb2",
})``

const _Author = styled.div.attrs({
  className: "dark-gray o-50",
})``

class Quote extends Component {
  state = {
    displayClasses: "flex",
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
        displayClasses: prevState.displayClasses === "dn" ? "dn" : "flex o-80",
      }))
    }, 4000)

    setTimeout(
      () => this.setState({ displayClasses: "flex o-0 pointer-events-none" }),
      6000
    )
  }

  onQuoteClick = () => {
    this.setState({ displayClasses: "dn" })
  }

  render() {
    const {
      props: { quote },
      state: { displayClasses },
      onQuoteClick,
    } = this

    return (
      <_QuoteContainer displayClasses={displayClasses} onClick={onQuoteClick}>
        <_Quote>{quote.quote}</_Quote>
        <_Author> – {quote.author}</_Author>
      </_QuoteContainer>
    )
  }
}

export default Quote
