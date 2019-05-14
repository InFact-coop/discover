import styled, { createGlobalStyle } from "styled-components"
import NavBar from "../components/NavBar"
import IconHeader from "../components/shared/IconHeader"
import icon from "../assets/icons/help_big.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(17, 138, 178, 0.05);
  }
`

const _Bold = styled.span.attrs({
  className: "b",
})``

const _BoldUnderline = styled.a.attrs({
  className: "b underline dark-gray",
})``

const _Container = styled.div.attrs({
  className: "mh3 font-4 sans dark-gray pb6",
})``

const _SmallSection = styled.div.attrs({
  className: "mb4",
})``

const Help = () => (
  <div>
    <GlobalStyle />
    <IconHeader title="Urgent help in a crisis" icon={icon} />
    <_Container>
      <_SmallSection>
        <p>
          <_Bold>Samaritans</_Bold> – 24 hour confidential emotional support for
          people experiencing distress or despair.
        </p>
        <p>
          Call <_BoldUnderline href="tel:166123">116 123</_BoldUnderline>
        </p>
        <p>
          or email{" "}
          <_BoldUnderline href="mailto:jo@samaritans.org">
            jo@samaritans.org
          </_BoldUnderline>
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_Bold>Childline</_Bold> – confidential helpline.
        </p>
        <p>
          Call <_BoldUnderline href="tel:08001111">0800 1111</_BoldUnderline>
        </p>
        <p>
          or talk to a counsellor online at{" "}
          <_BoldUnderline>https://www.childline.org.uk/</_BoldUnderline>
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_Bold>Papyrus</_Bold> – for under 35s
        </p>
        <p>
          call{" "}
          <_BoldUnderline href="tel:08000684141">0800 068 4141</_BoldUnderline>{" "}
          (10am-10pm)
        </p>
        <p>
          text{" "}
          <_BoldUnderline href="tel:07786209697">07786209697</_BoldUnderline>
        </p>
        <p>
          or email{" "}
          <_BoldUnderline href="mailto:pat@papyrus-uk.org">
            pat@papyrus-uk.org
          </_BoldUnderline>
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          Talk <_Bold>to a teacher</_Bold> if you're at school
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          For <_Bold>urgent</_Bold> help go to A&E or <_Bold>call</_Bold>{" "}
          <_BoldUnderline href="tel:111">111</_BoldUnderline>
          ,or <_BoldUnderline href="tel:999">999</_BoldUnderline> if you have
          seriously harmed yourself
        </p>
      </_SmallSection>
    </_Container>
    <NavBar />
  </div>
)

export default Help
