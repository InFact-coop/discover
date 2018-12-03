import circle from "../../assets/icons/circle.png"

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
  SKIP_THIS_BIT,
} from "../../Constants"

const INITIAL_STATE = {
  techniques: [
    {
      title: PROCRASTINATION_TIPS,
      description:
        "Tips to overcome delaying or postponing tasks, to help you get started and stay focussed.",
      image: circle,
      backgroundColor: "--light-purple",
    },
    {
      title: TIME_MANAGEMENT_TIPS,
      description:
        "Planning how to manage your time can help when you’re feeling overloaded with tasks, and you don’t know where to start.",
      image: circle,
      backgroundColor: "--light-yellow",
    },
    {
      title: THINKING_TRAPS,
      description:
        "Noticing when you are falling into thinking traps can be helpful to change your perspectives, to think more objectively, and to feel better.",
      image: circle,
      backgroundColor: "--light-red",
    },
    {
      title: THOUGHT_CHALLENGING,
      description:
        "Challenging your negative thoughts can help you feel better by questioning some of the assumptions your thoughts are based on. It can be helpful to stop and unpick these.",
      image: circle,
      backgroundColor: "--light-green",
    },
    {
      title: PROBLEM_SOLVING,
      description:
        "These steps can help when you have practical issues to overcome.",
      image: circle,
      backgroundColor: "--light-blue",
    },
    {
      title: SLEEP_TIPS,
      description:
        "Follow these tips to improve your sleep. Getting a better night’s sleep should have a positive impact on your mood and stress levels the next day.",
      image: circle,
      backgroundColor: "--light-purple",
    },
    {
      title: BREATHING_TECHNIQUES,
      description:
        "A relaxed breathing technique can help you to feel calmer, and is a good way to lower your stress levels.",
      image: circle,
      backgroundColor: "--light-yellow",
    },
    {
      title: RELAXATION_TIPS,
      description:
        "Relaxation tips can be helpful to calm you down when you’re feeling stressed, or tense in your body.",
      image: circle,
      backgroundColor: "--light-red",
    },
    {
      title: THOUGHT_SWITCHING,
      description:
        "Thought switching can be helpful to take your mind off worries, by re-directing your attention.",
      image: circle,
      backgroundColor: "--light-green",
    },
    {
      title: FACING_MY_FEARS,
      description:
        "This is gradually facing our fears over time, in a stepped way. It can help us break the cycle of avoidance.",
      image: circle,
      backgroundColor: "--light-blue",
    },
    {
      title: MINDFULNESS_EXERCISE,
      description:
        "Taking time to focus in the present moment - acknowledging and accepting your sensations, thoughts and feelings - can help your mind feel clearer, and calmer.",
      image: circle,
      backgroundColor: "--light-red",
    },
    {
      title: SKIP_THIS_BIT,
      description:
        "OK, I get it but remember selecting techniques may be helpful in order to make your goal specific and achievable",
      backgroundColor: "--light-yellow",
      image: circle,
    },
  ],
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],

  durations: ["1 month", "2 months", "3 months"],
  times: [
    {
      title: "Before school ",
      image: circle,
      backgroundColor: "--light-green",
    },
    { title: "After School", image: circle, backgroundColor: "--light-red" },
    {
      title: "In the morning",
      image: circle,
      backgroundColor: "--light-yellow",
    },
    {
      title: "In the evening",
      image: circle,
      backgroundColor: "--light-purple",
    },
    {
      title: "In the afternoon",
      image: circle,
      backgroundColor: "--light-blue",
    },
    {
      title: "Before going to bed",
      image: circle,
      backgroundColor: "--light-green",
    },
    { title: "When I wake up", image: circle, backgroundColor: "--light-red" },
    {
      title: "At lunch time",
      image: circle,
      backgroundColor: "--light-yellow",
    },
  ],
}

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state
  }
}
