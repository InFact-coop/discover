import styled, { createGlobalStyle } from "styled-components"
import NavBar from "../components/NavBar"
import IconHeader from "../components/shared/IconHeader"
import icon from "../assets/icons/privacy_icon.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(17, 138, 178, 0.05);
  }
`

const _Bold = styled.span.attrs({
  className: "b",
})``

const _BoldHeading = styled.p.attrs({
  className: "b mb2",
})``

const _Container = styled.div.attrs({
  className: "mh3 font-4 sans dark-gray",
})``

const _SmallSection = styled.div.attrs({
  className: "mb4",
})``

const _Right = styled.p.attrs({
  className: "mb1 underline",
})``

const _RightDescription = styled.p.attrs({
  className: "mb2",
})``

const _List = styled.ul.attrs({
  className: "ml4 mb1",
})`
  list-style-type: disc;
`
const Privacy = () => (
  <div>
    <GlobalStyle />
    <IconHeader title="Privacy Policy" icon={icon} />
    <_Container>
      <_SmallSection>
        <p>
          <_BoldHeading>Introduction</_BoldHeading>
        </p>
        <p className="mb1">
          We are committed to protecting and respecting your privacy. The
          following Privacy Policy applies to DiscoverBOT, which is owned by
          South London and Maudsley NHS Foundation Trust “SLaM” and sets out how
          your personal data is handled by us. We strongly recommend that you
          take some time to read this policy carefully to understand how we
          treat your personal data.
        </p>
        <p className="mb1">
          SLaM is committed to ensuring that the data you provide is stored and
          protected at all times. We take the privacy of our website users very
          seriously and all personal data is treated as confidential.
        </p>
        <p className="mb1">
          This policy was last reviewed and updated in December 2018.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>What personal information do we collect?</_BoldHeading>
        </p>
        <p>
          <_Bold>Information that DISCOVERbot collects: </_Bold>
        </p>
        <p className="mb1">Your name</p>
        <p>
          <_Bold>Why we hold this information:</_Bold>
        </p>
        <p> To address you properly and to identify you</p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>Work well may use this information to:</_BoldHeading>
        </p>
        <p>
          <_Bold>Communicate with you</_Bold>
        </p>
        <p className="mb1">
          We use your information to send you communications about our service
          or to let you know about any changes to our privacy policy. We also
          use your information to respond to you if you contact us.
        </p>
        <p>
          <_Bold>Improvement and development</_Bold>
        </p>
        <p>
          From time to time we may conduct surveys to better understand how to
          improve features.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>How is your information shared?</_BoldHeading>
        </p>
        <p className="mb1">
          South London and Maudsley NHS Foundation Trust, as Data Controller,
          will not share your data with anyone without your explicit consent,
          unless the law permits us to do so. We share data only with our
          authorised Data Processors, who must act at all times on our
          instructions as the Data Controller under the Data Protection Act
          2018. Our data processors are outlined below:
        </p>
        <p>
          <_Bold>Data processor:</_Bold>
        </p>
        <p className="mb1">Google Analytics</p>
        <p>
          <_Bold>Data it processes and why:</_Bold>
        </p>
        <p className="mb1">
          Google analytics is a business analytics tool which collects
          analytical data from the website. This data is used for service
          improvement. Google analytics privacy policy can be found&nbsp;
          <a href="https://policies.google.com/privacy">here.</a>
        </p>
        <p>
          Before you submit any information, it will be made clear to you why we
          are asking for specific information, and it is up to you whether you
          provide it. The trust does not and will never sell any data.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>Cookies</_BoldHeading>
        </p>
        <p>
          This website uses cookies. Cookies are small text files that save and
          retrieve information about your visit, such as how you entered and
          navigated the website and what information was of interest to you. A
          cookie does not allow access to your personal information, we use
          cookies to tailor the website to customer preference. If you are
          uncomfortable with the use of cookies, you can disable this on your
          electronic device by changing the settings in the 'Preferences' or
          'Options' menu on your internet browser.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>
            How long do we retain your personal data for?
          </_BoldHeading>
        </p>
        <p>
          Personal data you add to the DiscoverBOT app is not retained by SLaM.
          If you choose to delete the app, the data will also be deleted.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>Security</_BoldHeading>
        </p>
        <p>Is your information safe?</p>
        <p>
          The data you provide on the app will only be stored on your device. No
          personal data will be transferred. SLaM staff will not have access to
          any data you have provided.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>Your rights</_BoldHeading>
        </p>
        <_Right>Right to Access</_Right>

        <_RightDescription>
          You have the right to request access to your personal data which we
          hold. You can do this by submitting an information request, free of
          charge, to the data protection office:
          dataprotectionoffice@slam.nhs.uk
        </_RightDescription>
        <_Right>Right to Rectification</_Right>

        <_RightDescription>
          If you believe that any of your personal data is inaccurate or
          incomplete you have the right to ask for this to be corrected. To do
          so please put your request in writing to discoverworkshops@slam.nhs.uk
        </_RightDescription>
        <_Right>Right to Erasure (Right to be forgotten)</_Right>

        <_RightDescription>
          In some circumstances, you may ask us to erase your data which we
          hold. However, there are some situations whereby we would be unable to
          erase your data, such as when we need to comply with regulatory
          requirements. For more information please contact
          informationgovernance@slam.nhs.uk
        </_RightDescription>
        <_Right>Right to Restriction of Processing</_Right>

        <_RightDescription>
          If certain conditions apply, you have the right to restrict the
          processing of your information. Which includes:{" "}
        </_RightDescription>
        <_List>
          <li>When you contest it as being inaccurate</li>
          <li>
            If you object to data being processed we then need to decide if it
            was necessary for a legitimate interest
          </li>
          <li>
            When processing your data has been unlawful but you decide against
            erasing your data
          </li>
          <li>
            If we no longer need your data for the original purpose it was
            obtained, but you require us to hold it to establish, exercise or
            defend a legal claim.
          </li>
        </_List>
        <_RightDescription>
          For more information please contact informationgovernance@slam.nhs.uk
        </_RightDescription>
        <_Right>Right of Portability</_Right>
        <_RightDescription>
          In certain circumstance you have the right to move, copy or transfer
          your personal data to another organisation. This works slightly
          differently to your rights of access as you may be entitled to the
          same amount of information under the right of portability as you would
          be entitled to under the right of access. For more information please
          contact informationgovernance@slam.nhs.uk
        </_RightDescription>
        <_Right>Right to Object</_Right>

        <_RightDescription>
          You have the right to object to us processing your data unless we can
          demonstrate legitimate grounds for processing your data or for if the
          processing of your data is for the establishment or defense of a legal
          claim. For more information please contact
          informationgovernance@slam.nhs.uk
        </_RightDescription>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>How do we respond to legal requests?</_BoldHeading>
        </p>
        <p>
          We may be required under law to share your information if there is a
          legal request which we must comply with such as a search warrant or
          court order.
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>
            How will we notify you of changes to this policy?
          </_BoldHeading>
        </p>
        <p>
          We may amend this policy in the future to ensure it is kept up to date
          with legal requirements. We will notify you when we make any changes
          to this policy and invite you to review
        </p>
      </_SmallSection>
      <_SmallSection>
        <p>
          <_BoldHeading>
            How to contact us with questions or concerns
          </_BoldHeading>
        </p>
        <p className="mb2">
          If you have any additional questions regarding this policy, please
          feel free to contact us at: discoverworkshops@slam.nhs.uk
        </p>
        <ul className="mb7">
          <li> Discover Team </li>
          <li>South London and Maudsley NHS Foundation Trust</li>
          <li>Maudsley Hospital</li>
          <li> London</li>
          <li> SE5 8AZ</li>
        </ul>
      </_SmallSection>
    </_Container>
    <NavBar />
  </div>
)

export default Privacy
