import { Component } from "react"
import styled from "styled-components"

const _QuoteContainer = styled.div.attrs(({ displayClasses }) => ({
  className: `w-100 sans flex-column fixed justify-center items-center ph4 pv4 bg-white shadow-2 z-2 tc ${displayClasses}`,
}))`
  min-height: var(--height-4);
  transition: 0.5s;
`

const _Quote = styled.div.attrs({
  className: "font-4 bold dark-gray mb2",
})``

const _Author = styled.div.attrs({
  className: "dark-gray o-50",
})``

class Quote extends Component {
  state = {
    displayClasses: "flex up-0rem",
  }

  componentDidMount() {
    const { welcomeFlow } = this.props

    if (welcomeFlow) {
      return this.setState({ displayClasses: "dn" })
    }

    setTimeout(this.hideQuoteShowBot, 3500)
  }

  hideQuoteShowBot = () => {
    const { setQuoteVanished } = this.props
    setQuoteVanished()
    this.setState({
      displayClasses: "flex o-0 pointer-events-none up-8rem",
    })
  }

  render() {
    if (!this.props.quote) return <div />

    const {
      props: {
        quote: { quote, author },
      },
      state: { displayClasses },
      hideQuoteShowBot,
    } = this

    return (
      <_QuoteContainer
        displayClasses={displayClasses}
        onTouchStart={hideQuoteShowBot}
      >
        <_Quote>{quote}</_Quote>
        <_Author> – {author}</_Author>
      </_QuoteContainer>
    )
  }
}

export default Quote
