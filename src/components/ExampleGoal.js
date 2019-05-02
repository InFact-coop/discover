import styled from "styled-components"

const _monoText = styled.p.attrs({ className: "mono db" })``
const _sansText = styled.p.attrs(({ pb0 }) => ({
  className: `sans fw5 font-4 db ${pb0 ? "pb0" : "pb2"}`,
}))`
  font-size: 16px;
`
const _exampleGoalDiv = styled.div.attrs({
  className: "tc font-5 db pt3 pb2 ph3 mb2 bg-white dark-gray",
})`
  border-radius: 21px 21px 21px 6px;
  max-width: 265px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`
const ExampleGoal = () => (
  <_exampleGoalDiv>
    <_monoText>Your goal is</_monoText>
    <_sansText>
      Stop procrastinating and work on my time management skills
    </_sansText>
    <_monoText>by using</_monoText>
    <_sansText pb0>
      <u className="blue">Procrastination tips</u>
      &nbsp;and
    </_sansText>
    <_sansText className="underline blue">Time management tips</_sansText>
    <_monoText>and you will do it</_monoText>
    <_sansText>Every Tuesday and Friday</_sansText>
    <_monoText>preferably</_monoText>
    <_sansText>After school, at 16:30</_sansText>
    <_monoText>for</_monoText>
    <_sansText>3 months</_sansText>
  </_exampleGoalDiv>
)

export default ExampleGoal
