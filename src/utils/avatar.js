import blue_avatar_img from "../assets/icons/blue_avatar.png"
import red_avatar_img from "../assets/icons/red_avatar.png"
import purple_avatar_img from "../assets/icons/purple_avatar.png"
import green_avatar_img from "../assets/icons/green_avatar.png"
import grey_avatar_img from "../assets/icons/grey_avatar.png"

const blue_avatar = "blue_avatar"
const green_avatar = "green_avatar"
const red_avatar = "red_avatar"
const purple_avatar = "purple_avatar"
const grey_avatar = "grey_avatar"

const Avatars = [purple_avatar, blue_avatar, green_avatar, red_avatar]

const getAvatarImg = avatar => {
  switch (avatar) {
    case blue_avatar:
      return blue_avatar_img
    case green_avatar:
      return green_avatar_img
    case purple_avatar:
      return purple_avatar_img
    case red_avatar:
      return red_avatar_img
    case grey_avatar:
      return grey_avatar_img
    default:
      return red_avatar_img
  }
}

export { getAvatarImg, Avatars }
