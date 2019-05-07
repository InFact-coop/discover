import circle from "../../assets/icons/circle.png"

import breathing from "../../assets/images/technique-card-images/breathing.png"
import facing_fears from "../../assets/images/technique-card-images/facing_fears.png"
import mindfulness from "../../assets/images/technique-card-images/mindfulness.png"
import problem_solving from "../../assets/images/technique-card-images/problem_solving.png"
import procrastination from "../../assets/images/technique-card-images/procrastination.png"
import relaxation from "../../assets/images/technique-card-images/relaxation.png"
import sleep_tips from "../../assets/images/technique-card-images/sleep_tips.png"
import thinking_traps from "../../assets/images/technique-card-images/thinking_traps.png"
import thought_challenging from "../../assets/images/technique-card-images/thought_challenging.png"
import thought_switching from "../../assets/images/technique-card-images/thought_switching.png"
import time_management from "../../assets/images/technique-card-images/time_management.png"

import after_school from "../../assets/images/time-card-images/after_school.png"
import at_lunch_time from "../../assets/images/time-card-images/at_lunch_time.png"
import before_bed from "../../assets/images/time-card-images/before_bed.png"
import before_school from "../../assets/images/time-card-images/before_school.png"
import in_the_afternoon from "../../assets/images/time-card-images/in_the_afternoon.png"
import in_the_evening from "../../assets/images/time-card-images/in_the_evening.png"
import in_the_morning from "../../assets/images/time-card-images/in_the_morning.png"
import when_wake_up from "../../assets/images/time-card-images/when_wake_up.png"

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

import { ADD_QUOTES_DATA } from "../types"

const INITIAL_STATE = {
  techniques: [
    {
      title: PROCRASTINATION_TIPS,
      description:
        "Tips that will stop you putting things off, and help you get started and stay focused.",
      image: procrastination,
      backgroundColor: "--light-purple",
    },
    {
      title: TIME_MANAGEMENT_TIPS,
      description:
        "Managing your time can help you when you’re feeling overloaded with tasks, and you don’t know where to start.",
      image: time_management,
      backgroundColor: "--light-yellow",
    },
    {
      title: THINKING_TRAPS,
      description:
        "Noticing when you are falling into thinking traps can help you to change your perspective, to think more objectively, and to feel better.",
      image: thinking_traps,
      backgroundColor: "--light-red",
    },
    {
      title: THOUGHT_CHALLENGING,
      description:
        "Challenging your negative thoughts can help you feel better if you can question the assumptions that these thoughts are based on.",
      image: thought_challenging,
      backgroundColor: "--light-green",
    },
    {
      title: PROBLEM_SOLVING,
      description:
        "These simple steps can help you tackle practical issues and find solutions.",
      image: problem_solving,
      backgroundColor: "--light-blue",
    },
    {
      title: SLEEP_TIPS,
      description:
        "Getting a better night’s sleep, using these tips, will have a positive impact on your mood and stress levels the next day.",
      image: sleep_tips,
      backgroundColor: "--light-purple",
    },
    {
      title: BREATHING_TECHNIQUES,
      description:
        "A relaxed breathing technique can help you to feel calmer, and is a good way to lower your stress levels.",
      image: breathing,
      backgroundColor: "--light-yellow",
    },
    {
      title: RELAXATION_TIPS,
      description:
        "Relaxation tips can be helpful to calm you down when you’re feeling stressed, or tense in your body.",
      image: relaxation,
      backgroundColor: "--light-red",
    },
    {
      title: THOUGHT_SWITCHING,
      description:
        "Thought switching can be helpful to take your mind off worries, by re-directing your attention.",
      image: thought_switching,
      backgroundColor: "--light-green",
    },
    {
      title: FACING_MY_FEARS,
      description:
        "This is gradually facing our fears over time, in a stepped way. It can help us break the cycle of avoidance.",
      image: facing_fears,
      backgroundColor: "--light-blue",
    },
    {
      title: MINDFULNESS_EXERCISE,
      description:
        "Taking time to focus in the present moment - acknowledging and accepting your sensations, thoughts and feelings - can help your mind feel clearer, and calmer.",
      image: mindfulness,
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
      title: "Before school",
      image: before_school,
      backgroundColor: "--light-green",
    },
    {
      title: "After School",
      image: after_school,
      backgroundColor: "--light-red",
    },
    {
      title: "In the morning",
      image: in_the_morning,
      backgroundColor: "--light-yellow",
    },
    {
      title: "In the evening",
      image: in_the_evening,
      backgroundColor: "--light-purple",
    },
    {
      title: "In the afternoon",
      image: in_the_afternoon,
      backgroundColor: "--light-blue",
    },
    {
      title: "Before going to bed",
      image: before_bed,
      backgroundColor: "--light-green",
    },
    {
      title: "When I wake up",
      image: when_wake_up,
      backgroundColor: "--light-red",
    },
    {
      title: "At lunch time",
      image: at_lunch_time,
      backgroundColor: "--light-yellow",
    },
  ],
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ADD_QUOTES_DATA:
      return {
        ...state,
        quotes: payload,
      }
    default:
      return state
  }
}
