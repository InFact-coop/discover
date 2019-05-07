import styled from "styled-components"

const _Quote = styled.div.attrs({
  className: ({ display }) =>
    `w-100 sans justify-center items-center vh-100 ${display}`,
})``

const Quote = ({ quote, displayQuote, onClick }) => (
  <_Quote display={displayQuote ? "flex" : "dn"} onClick={onClick}>
    {quote.quote}
  </_Quote>
)

export default Quote
