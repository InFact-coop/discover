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
  className: "mono font-2 tc w-90 ",
})`
  margin: 0 auto;
  margin-bottom: var(--spacing-small);
`
const _Link = styled.a.attrs({
  className: "b underline white",
  target: "_blank",
  rel: "noopener noreferrer",
})``
const _SubTitle = styled.h2.attrs({
  className: "b ttu pv3 tl",
})``
const _Bold = styled.span.attrs({
  className: "b",
})``
const _Italics = styled.span.attrs({
  className: "i",
})``

const _Bullets = styled.ul`
  list-style-type: "-";
  li::before {
    content: "– ";
  }
`

const _Numbers = styled.ol.attrs({
  className: "",
})`
  list-style-type: decimal;

  li {
    margin-left: var(--spacing-medium);
  }
`

const _TipParagraph = styled.p`
  margin-bottom: var(--spacing-small);

  &:last-child {
    margin-bottom: 0;
  }
`

const TMOne = () => (
  <_Container>
    <_Title>Time management top tips!</_Title>
    <_SubTitle>Planning</_SubTitle>
    <_Bullets>
      <li>
        <_Bold>Decide on tasks</_Bold> that need to be done, breaking big tasks
        down into smaller chunks. Write a weekly <_Bold>‘to do’ list</_Bold>.
        Make the list specific and clear.
      </li>
      <li>
        <_Bold>Prioritise:</_Bold> decide what must be done today, and be
        realistic about what you can do!
      </li>
      <li>
        <_Bold>Form a plan:</_Bold> Put the most important things at the top of
        the list, and the least important at the end.
      </li>
      <li>
        Include <_Bold>breaks</_Bold>, including mealtimes, in your plan, so you
        have something nice to look forward to.
      </li>
      <li>Remember you can use free periods at school.</li>
    </_Bullets>
  </_Container>
)

const TMTwo = () => (
  <_Container>
    <_SubTitle>Doing</_SubTitle>
    <_Bullets>
      <li>
        <_Bold>Tick off each thing once it is completed</_Bold>, to show
        yourself you are making progress.
      </li>
      <li>
        <_Bold>Stick to the plan</_Bold>, but stop for the day at least an hour
        before bedtime.
      </li>
      <li>
        <_Bold>Relax</_Bold> or have a well-deserved treat once you finish.
      </li>
    </_Bullets>
  </_Container>
)

const TMThree = () => (
  <_Container>
    <_SubTitle>Thinking</_SubTitle>
    <_TipParagraph>
      Don’t keep thinking about what to do next, or what you haven’t done. This
      will stress you out. Keep focussing your mind on the task you are doing
      right now.
    </_TipParagraph>
    <_TipParagraph>
      Don’t be hard on yourself, and don’t begin the day by telling yourself
      off; try being kind to yourself! You’re doing your best.{" "}
    </_TipParagraph>
    <_TipParagraph>
      If your mind starts drifting, gently bring it back, and only take planned
      breaks.
    </_TipParagraph>
  </_Container>
)

const TMFour = () => (
  <_Container>
    <_SubTitle>Reviewing</_SubTitle>
    <_TipParagraph>
      At the end of the day, look back and congratulate yourself on what you
      have achieved.
    </_TipParagraph>
    <_TipParagraph>
      If there is more stuff to do, start roughly planning for the next day,
      remembering to sort out the most important from the least important tasks.
    </_TipParagraph>
    <_TipParagraph>
      Be realistic, and remember we only have limited amounts of energy and
      time!
    </_TipParagraph>
  </_Container>
)

const ProcOne = () => (
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
        <_Bold>Face your fears about a task.</_Bold> Avoiding something that you
        need to do might make you feel better in the short term. But in the long
        term, this will affect your confidence by giving you the message that
        you are not doing well, and this can then demotivate you.
      </li>
    </_Bullets>
  </_Container>
)

const ProcTwo = () => (
  <_Container>
    <_SubTitle>Maintain your focus!</_SubTitle>
    <_Bullets>
      <li>
        <_Bold>Set a timer for a specific amount of time</_Bold>, e.g. 30
        minutes. Try the Forest app here!
      </li>
      <li>
        <_Bold>Change your environment.</_Bold> Be creative with where you work
        – e.g. if home isn’t working, try the library.
      </li>
      <li>
        <_Bold>Remove distractions</_Bold>. Put your phone on airplane mode, or
        leave it in another room. Tell friends and family about your scheduled
        worktimes and tell them not to disturb you.
      </li>
    </_Bullets>
  </_Container>
)

const ProcThree = () => (
  <_Container>
    <_SubTitle>Maintain your focus!</_SubTitle>
    <_Bullets>
      <li>
        <_Bold>Remember your goals</_Bold>
      </li>
      <li>
        <_Bold>Give yourself a sense of achievement.</_Bold> Write weekly lists
        and cross things off as you complete them, to give you a sense of
        achievement.
      </li>
      <li>
        <_Bold>Reward your progress.</_Bold>
        When you have achieved your target for the day, reward yourself with
        something you enjoy, and notice how good it feels to get things done!
      </li>
    </_Bullets>
  </_Container>
)

const ProcFour = () => (
  <_Container>
    <_Bullets>
      <li>
        <_Bold>Inspire yourself.</_Bold> Remind yourself of phrases or quotes
        that encourage you to keep going. Try to watch motivational speeches or
        inspiring talks on YouTube, TED talks or podcasts.
      </li>
      <li>
        <_Bold>Do things that energise you</_Bold>
        <_Bullets>
          <li>
            Listen to music which helps you focus, stay motivated or energised.{" "}
          </li>
          <li>Take a run, or a brisk walk.</li>
          <li>Eat healthily.</li>
          <li>Get a good night’s sleep to increase energy levels.</li>
          <li>Work at a time of day when you feel most alert.</li>
        </_Bullets>
      </li>
      <li>
        <_Bold>Get support. </_Bold>
        Allow a family member or friend to check in with your progress, and help
        you stay motivated.
      </li>
    </_Bullets>
  </_Container>
)

const ThinkingTraps1 = () => (
  <_Container>
    <_Title>Thinking traps top tips!</_Title>
    <_TipParagraph>
      Here is a reminder of the common thinking traps that we all fall into at
      times. It can be helpful to recognise when we are falling into these.
    </_TipParagraph>
    <_SubTitle>Mindreading</_SubTitle>
    <_TipParagraph>
      When we assume that we know what another person is thinking. This includes
      assuming that another person is thinking the same as you.{" "}
      <_Italics>
        E.g. Ben gave me a funny look, he must think I’m stupid
      </_Italics>
    </_TipParagraph>
  </_Container>
)

const ThinkingTraps2 = () => (
  <_Container>
    <_SubTitle>Fortune teller</_SubTitle>
    <_TipParagraph>
      When we assume we know what will happen in the future, and assuming that
      the worst will definitely happen.{" "}
      <_Italics>
        E.g. My mum is late home, she must have been in an accident
      </_Italics>
    </_TipParagraph>
    <_SubTitle>Disaster Thinker</_SubTitle>
    <_TipParagraph>
      When we assume from one particular situation that the same will happen in
      all similar situations.{" "}
      <_Italics>
        E.g. That girl laughed when I asked her to the cinema; that means that
        no-one will ever go out with me{" "}
      </_Italics>
    </_TipParagraph>
  </_Container>
)

const ThinkingTraps3 = () => (
  <_Container>
    <_SubTitle>Self Blamer</_SubTitle>
    <_TipParagraph>
      Taking too much responsibility for things that go wrong, or could go
      wrong.
      <_Italics>
        E.g. My brother and I argued, and he stormed out the house, and now my
        parents are angry. It’s my fault.
      </_Italics>
    </_TipParagraph>
    <_SubTitle>Negative Glasses</_SubTitle>
    <_TipParagraph>
      Only noticing the bad in a situation and not noticing or caring about the
      good.
      <_Italics>
        E.g. Out of my 9 GCSEs I got 4 A*s, 4 As and one D. I’m such a failure.
      </_Italics>
    </_TipParagraph>
  </_Container>
)

const ThinkingTraps4 = () => (
  <_Container>
    <_SubTitle>Comparing to others</_SubTitle>
    <_TipParagraph>
      Comparing yourself to people, and seeing them as better than you.
      <_Italics>
        E.g. Everyone else gets this new subject so easily; I’m so stupid in
        comparison.
      </_Italics>
    </_TipParagraph>
  </_Container>
)

const Sleep1 = () => (
  <_Container>
    <_Title>Sleep top tips!</_Title>
    <_TipParagraph>
      Here are some sleep tips, which are based on the science behind getting to
      sleep (and what keeps us awake!).
    </_TipParagraph>
    <_SubTitle>Wind Down</_SubTitle>
    <_Bullets>
      <li>Start winding down 1-2 hours before you go to bed</li>
      <li>This helps calm your brain and mind</li>
      <li>Don’t drink caffeine for at least 4 hours before you go to bed</li>
      <li>Don’t exercise right before bed (earlier is better!)</li>
    </_Bullets>
  </_Container>
)

const Sleep2 = () => (
  <_Container>
    <_SubTitle>You</_SubTitle>
    <_Bullets>
      <li>Don’t go to bed hungry or thirsty</li>
      <li>
        Try to go to bed and wake up at the same every day (at least during the
        week!)
      </li>
      <li>Aim for 8 hours a night</li>
      <li>Don’t nap in the daytime! This can mess up your sleep cycle</li>
    </_Bullets>
    <_SubTitle>Your Room</_SubTitle>
    <_Bullets>
      <li> Make sure your room is the right temperature for you</li>
      <li>Try to make sure there isn’t too much light</li>
      <li>Try to have a quiet room</li>
      <li>
        Get your bed as comfy as possible! Don’t do school work in or around
        your bed
      </li>
    </_Bullets>
  </_Container>
)

const Sleep3 = () => (
  <_Container>
    <_SubTitle>Thought and worries</_SubTitle>
    <_Bullets>
      <li>Remind yourself that one night’s bad sleep won’t hurt you</li>
      <li>
        Don’t watch the clock in the night, as this will stress you out and keep
        you awake
      </li>
      <li>
        If you are worrying, try switch your attention to something else. This
        could be remembering a happy memory, reciting the alphabet backwards, or
        listing boys/girls names beginning with A thorough to Z!
      </li>
      <li>
        If you really can’t sleep, it may be a good idea to get up, some and do
        something relaxing like reading, then go back to bed when you start to
        feel sleepy
      </li>
    </_Bullets>
  </_Container>
)

const ThoughtChallenging1 = () => (
  <_Container>
    <_Title>Thought challenging top tips!</_Title>
    <_TipParagraph>
      It can be helpful to challenge our negative thoughts, as they can lead us
      to feel low, anxious, or stressed, but often they are based on wrong
      assumptions. Try asking yourselves the following questions, in order to
      challenge your negative thought(s):
    </_TipParagraph>
    <_Numbers>
      <li>Is this opinion or fact?</li>
      <li>What evidence goes against that thought?</li>
      <li>Are you jumping to conclusions?</li>
      <li>What would you say to a friend in the same situation?</li>
      <li>Is there another way of looking at this?</li>
      <li>Is it really that important?</li>
    </_Numbers>
  </_Container>
)

const ThoughtChallenging2 = () => (
  <_Container>
    <_TipParagraph>
      <_Bold>
        You may now be able to re-frame your negative thought into a more
        helpful, balanced one.
      </_Bold>
    </_TipParagraph>
  </_Container>
)

const Problems1 = () => (
  <_Container>
    <_Title>Problem Solving top tips!</_Title>
    <_TipParagraph>
      Problem solving can be used when you have you have a practical problem to
      solve. Here’s a reminder of the steps:
    </_TipParagraph>
    <_Numbers>
      <li>Define the exact problem you want to solve.</li>
      <li>Brainstorm all the solutions you can think of.</li>
      <li>
        Think of the pros and cons of each option. Then eliminate the options
        that won’t work!
      </li>
    </_Numbers>
  </_Container>
)

const Problems2 = () => (
  <_Container>
    <_Numbers>
      <li>Choose one option.</li>
      <li>Prepare all the steps to do it.</li>
      <li>Do it!</li>
      <li>
        Review. Did it work? If not, work through an alternative solution.
      </li>
    </_Numbers>
  </_Container>
)

const Breathing1 = () => (
  <_Container>
    <_Title>Breathing technique top tips!</_Title>
    <_TipParagraph>
      When you’re feeling stressed, your body is likely to respond by breathing
      in a more shallow, rapid way. Actively changing your breathing pattern is
      a really good way to calm yourself, and lower your stress levels.
    </_TipParagraph>
  </_Container>
)

const Breathing2 = () => (
  <_Container>
    <_TipParagraph>
      Start by breathing in more slowly and deeply than usual, through your
      nose, for a count of 3, and then breathe out for a count of 3. Continue
      breathing in and out very slowly and deeply for a few minutes. Try to
      imagine that you are breathing in calm and light, and breathing out
      stress; allow the calm to reach your mind. Gently bring your breathing
      back to the normal rate when you are ready.
    </_TipParagraph>
    <_TipParagraph>
      If you find it hard to do this on your own, you could try follow a guided
      breathing technique, e.g. on the <_Link href="/">Breathe app.</_Link>
    </_TipParagraph>
  </_Container>
)

const Relaxation1 = () => (
  <_Container>
    <_Title>Relaxation top tips!</_Title>
    <_TipParagraph>
      Aside from the relaxed breathing technique, there are other ways to calm
      ourselves.
    </_TipParagraph>
    <_TipParagraph>
      One of these is called <_Bold>progressive muscle relaxation</_Bold>. This
      is helpful as one of the major effects of stress is muscle tension. This
      exercise can help relax your muscles, which in turn relaxes your mind.
      Starting from your toes, you work your way around your body slowing,
      tensing each muscle, and then letting go. This can be a good one to try
      when you’re trying to fall asleep.
    </_TipParagraph>
  </_Container>
)

const Relaxation2 = () => (
  <_Container>
    <_TipParagraph>
      Another way to calm yourself and feel more relaxed is by visualisation.
      Here, you close your eyes and picture yourself in a relaxing situation.
      Use your senses to imagine the sights, smells, and sounds in your
      imagination. Calm your breathing too, and then take the time to re-engage
      back with your day.
    </_TipParagraph>
  </_Container>
)

const Thoughts1 = () => (
  <_Container>
    <_Title>Thought Switching top tips!</_Title>
    <_TipParagraph>
      Thought switching can be helpful to take our mind off worries. Doing a
      mental activity can help switch your attention very effectively. This can
      be especially helpful when you're worrying at night.
    </_TipParagraph>
    <_TipParagraph>
      You could try doing a simple mental exercise to switch your thoughts. This
      could be a numerical exercise like counting back in 7s from 100, or trying
      to list animals, games, football teams (or any other category!) through
      each letter of the alphabet (A-Z).
    </_TipParagraph>
  </_Container>
)

const Thoughts2 = () => (
  <_Container>
    <_Title>Thought Switching top tips!</_Title>
    <_TipParagraph>
      You could also try switching activity to distract yourself, e.g. phoning a
      friend for a chat, playing a computer game, watching TV, or going for a
      jog.
    </_TipParagraph>
    <_TipParagraph>
      <_Bold>Give it a go!</_Bold>
    </_TipParagraph>
  </_Container>
)

const Fears1 = () => (
  <_Container>
    <_Title>Facing my fears top tips!</_Title>
    <_TipParagraph>
      When we’re scared of something (e.g. dogs, public speaking, or anything
      else!), it’s very common to try and avoid the situation completely.
      However, this means that our fear remains, and we are never are able to
      learn that we may actually be able to cope with it. A really helpful way
      to overcome our fears is to gradually and slowly expose ourselves to them
      over time.
    </_TipParagraph>
  </_Container>
)

const Fears2 = () => (
  <_Container>
    <_TipParagraph>
      To do this, draw a ladder on a piece of paper, with 6 steps on it. Write
      down your feared situation at the top step of the ladder. Then, try and
      break this fear down into smaller, gradual steps in order. Start at the
      bottom and work your way up, facing your feared situations in a gradual
      way. Remember to cross off and reward yourself for each step as you
      achieve it!
    </_TipParagraph>
  </_Container>
)

const Mindfullness1 = () => (
  <_Container>
    <_Title>Mindfulness top tips!</_Title>
    <_TipParagraph>
      Mindfulness is a way to focus on the here-and-now. Our minds our very
      busy, we have 70,000 thoughts a day! Often these thoughts are about what
      might go wrong in the future, or things we've done in the past.
    </_TipParagraph>
    <_TipParagraph>
      Mindfulness is the act of concentrating on your breathing, being aware of
      your breath, and being aware of what is going on around you in the present
      moment. Practising mindfulness creates a peaceful mental environment.
    </_TipParagraph>
    <_TipParagraph>
      The more you do it, the easier it gets, and the more you will notice the
      benefits!
    </_TipParagraph>
  </_Container>
)

const Mindfullness2 = () => (
  <_Container>
    <_TipParagraph>
      Try it by taking 5-minutes to focus on each breath as it flows in and out
      of your body. Focusing on your breath like this allows you to observe your
      thoughts as they arise in your mind, and to let go of struggling with
      them. You could also try a mindfulness exercise on an app like Headspace
      or Breathe.
    </_TipParagraph>
  </_Container>
)

export const TimeManagement = [TMOne, TMTwo, TMThree, TMFour]
export const Procrastination = [ProcOne, ProcTwo, ProcThree, ProcFour]
export const ThinkingTraps = [
  ThinkingTraps1,
  ThinkingTraps2,
  ThinkingTraps3,
  ThinkingTraps4,
]
export const ThoughtChallenging = [ThoughtChallenging1, ThoughtChallenging2]
export const ProblemSolving = [Problems1, Problems2]
export const SleepTips = [Sleep1, Sleep2, Sleep3]
export const BreathingTechs = [Breathing1, Breathing2]
export const RelaxationTips = [Relaxation1, Relaxation2]
export const ThoughtSwitching = [Thoughts1, Thoughts2]
export const FacingFears = [Fears1, Fears2]
export const Mindfullness = [Mindfullness1, Mindfullness2]
