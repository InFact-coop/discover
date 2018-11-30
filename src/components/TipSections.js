import styled from "styled-components"

import {
  PROCRASTINATION_TIPS,
  TIME_MANAGEMENT_TIPS,
  THINKING_TRAPS,
  THOUGHT_CHALLENGING,
  PROBLEM_SOLVING,
  SLEEP_TIPS,
  BREATHING_TECHNIQUES,
  RELAXATION_TIPS,
  THOUGHT_SWITCHING,
  FACING_MY_FEARS,
  MINDFULNESS_EXERCISE,
} from "../Constants"

export const getTipSections = title => {
  switch (title) {
    case TIME_MANAGEMENT_TIPS:
      return TimeManagement
    case PROCRASTINATION_TIPS:
      return Procrastination
    case THINKING_TRAPS:
      return ThinkingTraps
    case THOUGHT_CHALLENGING:
      return ThoughtChallenging
    case PROBLEM_SOLVING:
      return ProblemSolving
    case SLEEP_TIPS:
      return SleepTips
    case BREATHING_TECHNIQUES:
      return BreathingTechs
    case RELAXATION_TIPS:
      return RelaxationTips
    case THOUGHT_SWITCHING:
      return ThoughtSwitching
    case FACING_MY_FEARS:
      return FacingFears
    case MINDFULNESS_EXERCISE:
      return Mindfullness
  }
}

const _Container = styled.div.attrs({
  className: "sans white tl font-4",
})`
  p,
  li,
  h2 {
    text-align: left;
    line-height: 20px;
  }
`
const _Title = styled.h1.attrs({
  className: "mono font-2 tc w-75",
})`
  margin: 0 auto;
`
const _SubTitle = styled.h2.attrs({
  className: "b ttu pv3 tl",
})``
const _Bold = styled.span.attrs({
  className: "b",
})``
const _Bullets = styled.ul`
  list-style-type: "-";
  li::before {
    content: "– ";
  }
`

const TMOne = () => {
  return (
    <_Container>
      <_Title>Time management top tips!</_Title>
      <_SubTitle>Planning</_SubTitle>
      <_Bullets>
        <li>
          <_Bold>Decide on tasks</_Bold> that need to be done, breaking big
          tasks down into smaller chunks. Write a weekly{" "}
          <_Bold>‘to do’ list</_Bold>. Make the list specific and clear.
        </li>
        <li>
          <_Bold>Prioritise:</_Bold> decide what must be done today, and be
          realistic about what you can do!
        </li>
        <li>
          <_Bold>Form a plan:</_Bold> Put the most important things at the top
          of the list, and the least important at the end.
        </li>
        <li>
          Include <_Bold>breaks</_Bold>, including mealtimes, in your plan, so
          you have something nice to look forward to.
        </li>
        <li>Remember you can use free periods at school.</li>
      </_Bullets>
    </_Container>
  )
}
const TMTwo = () => {
  return (
    <_Container>
      <_SubTitle>Doing</_SubTitle>
      <_Bullets>
        <li>
          <_Bold>Tick off each thing once it is completed</_Bold>, to show
          yourself you are making progress.
        </li>
        <li>
          <_Bold>Stick to the plan</_Bold>, but stop for the day at least an
          hour before bedtime.
        </li>
        <li>
          <_Bold>Relax</_Bold> or have a well-deserved treat once you finish.
        </li>
      </_Bullets>
    </_Container>
  )
}
const TMThree = () => {
  return (
    <_Container>
      <_SubTitle>Thinking</_SubTitle>
      <p>
        Don’t keep thinking about what to do next, or what you haven’t done.
        This will stress you out. Keep focussing your mind on the task you are
        doing right now.
      </p>
      <p>
        Don’t be hard on yourself, and don’t begin the day by telling yourself
        off; try being kind to yourself! You’re doing your best.{" "}
      </p>
      <p>
        If your mind starts drifting, gently bring it back, and only take
        planned breaks.
      </p>
    </_Container>
  )
}
const TMFour = () => {
  return (
    <_Container>
      <_SubTitle>Reviewing</_SubTitle>
      <p>
        At the end of the day, look back and congratulate yourself on what you
        have achieved.
      </p>
      <p>
        If there is more stuff to do, start roughly planning for the next day,
        remembering to sort out the most important from the least important
        tasks.
      </p>
      <p>
        Be realistic, and remember we only have limited amounts of energy and
        time!
      </p>
    </_Container>
  )
}

const ProcOne = () => {
  return (
    <_Container>
      <_Title>Procrastination top tips!</_Title>
      <_SubTitle>Just do it!</_SubTitle>
      <_Bullets>
        <li>
          <_Bold>Start today</_Bold>
        </li>
        <li>
          <_Bold>The 5-minute miracle</_Bold>. Once you’ve identified an action,
          set a timer for 5 minutes, and spend this time working on this task.
        </li>
        <li>
          <_Bold>
            Stop things getting blown out of proportion in your mind, and then
            getting to feel impossible
          </_Bold>
        </li>
        <li>
          <_Bold>Face your fears about a task.</_Bold> Avoiding something that
          you need to do might make you feel better in the short term. But in
          the long term, this will affect your confidence by giving you the
          message that you are not doing well, and this can then demotivate you.
        </li>
      </_Bullets>
    </_Container>
  )
}
const ProcTwo = () => {
  return (
    <_Container>
      <_SubTitle>Maintain your focus!</_SubTitle>
      <_Bullets>
        <li>
          <_Bold>Set a timer for a specific amount of time</_Bold>, e.g. 30
          minutes. Try the Forest app here!
        </li>
        <li>
          <_Bold>Change your environment.</_Bold> Be creative with where you
          work – e.g. if home isn’t working, try the library.
        </li>
        <li>
          <_Bold>Remove distractions</_Bold>. Put your phone on airplane mode,
          or leave it in another room. Tell friends and family about your
          scheduled worktimes and tell them not to disturb you.
        </li>
      </_Bullets>
    </_Container>
  )
}

const ProcThree = () => {
  return (
    <_Container>
      <_SubTitle>Maintain your focus!</_SubTitle>
      <_Bullets>
        <li>
          <_Bold>Remember your goals</_Bold>
        </li>
        <li>
          <_Bold>Give yourself a sense of achievement.</_Bold> Write weekly
          lists and cross things off as you complete them, to give you a sense
          of achievement.
        </li>
        <li>
          <_Bold>Reward your progress.</_Bold>
          When you have achieved your target for the day, reward yourself with
          something you enjoy, and notice how good it feels to get things done!
        </li>
      </_Bullets>
    </_Container>
  )
}

const ProcFour = () => {
  return (
    <_Container>
      <_Bullets>
        <li>
          <_Bold>Inspire yourself.</_Bold> Remind yourself of phrases or quotes
          that encourage you to keep going. Try to watch motivational speeches
          or inspiring talks on YouTube, TED talks or podcasts.
        </li>
        <li>
          <_Bold>Do things that energise you</_Bold>
          <_Bullets>
            <li>
              Listen to music which helps you focus, stay motivated or
              energised.{" "}
            </li>
            <li>Take a run, or a brisk walk.</li>
            <li>Eat healthily.</li>
            <li>Get a good night’s sleep to increase energy levels.</li>
            <li>Work at a time of day when you feel most alert.</li>
          </_Bullets>
        </li>
        <li>
          <_Bold>Get support. </_Bold>
          Allow a family member or friend to check in with your progress, and
          help you stay motivated.
        </li>
      </_Bullets>
    </_Container>
  )
}

const ThinkingTraps1 = () => {}
const ThinkingTraps2 = () => {}
const ThinkingTraps3 = () => {}
const ThinkingTraps4 = () => {}

const Sleep1 = () => {}
const Sleep2 = () => {}
const Sleep3 = () => {}
const Sleep4 = () => {}

const ThoughtChallenging1 = () => {}
const ThoughtChallenging2 = () => {}
const ThoughtChallenging3 = () => {}

const Problems1 = () => {}
const Problems2 = () => {}
const Problems3 = () => {}

const Breathing1 = () => {}
const Breathing2 = () => {}
const Breathing3 = () => {}

const Relaxation1 = () => {}
const Relaxation2 = () => {}
const Relaxation3 = () => {}

const Thoughts1 = () => {}
const Thoughts2 = () => {}
const Thoughts3 = () => {}

const Fears1 = () => {}
const Fears2 = () => {}
const Fears3 = () => {}

const Mindfullness1 = () => {}
const Mindfullness2 = () => {}
const Mindfullness3 = () => {}

export const TimeManagement = [TMOne, TMTwo, TMThree, TMFour]
export const Procrastination = [ProcOne, ProcTwo, ProcThree, ProcFour]
export const ThinkingTraps = [
  ThinkingTraps1,
  ThinkingTraps2,
  ThinkingTraps3,
  ThinkingTraps4,
]
export const ThoughtChallenging = [
  ThoughtChallenging1,
  ThoughtChallenging2,
  ThoughtChallenging3,
]
export const ProblemSolving = [Problems1, Problems2, Problems3]
export const SleepTips = [Sleep1, Sleep2, Sleep3, Sleep4]
export const BreathingTechs = [Breathing1, Breathing2, Breathing3]
export const RelaxationTips = [Relaxation1, Relaxation2, Relaxation3]
export const ThoughtSwitching = [Thoughts1, Thoughts2, Thoughts3]
export const FacingFears = [Fears1, Fears2, Fears3]
export const Mindfullness = [Mindfullness1, Mindfullness2, Mindfullness3]
