import { TOGGLE_SELECT_TECHNIQUE } from "../types"
import circle from "../../assets/icons/circle.png"

const INITIAL_STATE = {
  techniques: [
    {
      title: "Mindfulness exercise",
      description:
        "Taking time to focus in the present moment Taking time to focus in the present momentTaking time to focus in the present momentTaking",
      image: circle,
      selected: false,
    },
    {
      title: "Just an exercise",
      description:
        "Taking time to focus in the present moment Taking time to focus in the present moment",
      image: circle,
      selected: false,
    },
    {
      title: "Not an exercise",
      description:
        "Taking time to focus in the present moment Taking time to focus in the present momentTaking time to",
      image: circle,
      selected: false,
    },
  ],
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TOGGLE_SELECT_TECHNIQUE:
      return {
        ...state,
        techniques: state.techniques.map(technique => {
          const { title, selected } = technique
          if (title === payload) {
            technique.selected = !selected
          }
          return technique
        }),
      }
    default:
      return { ...state }
  }
}
