export const SmilingMind = "SmilingMind"
export const Headspace = "Headspace"
export const Flipd = "Flipd"
export const Forest = "Forest"

export const appStoreLink = to => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  switch (to) {
    case SmilingMind:
      return iOS
        ? "https://itunes.apple.com/gb/app/smiling-mind/id560442518?mt=8"
        : "https://play.google.com/store/apps/details?id=com.smilingmind.app&hl=en_GB"

    case Headspace:
      return iOS
        ? "https://itunes.apple.com/gb/app/headspace-meditation-sleep/id493145008?mt=8"
        : "https://play.google.com/store/apps/details?id=com.getsomeheadspace.android&hl=en_GB"

    case Flipd:
      return iOS
        ? "https://itunes.apple.com/gb/app/flipd-keep-focused/id1071708905?mt=8"
        : "https://play.google.com/store/apps/details?id=com.flipd.app&hl=en_GB"

    case Forest:
      return iOS
        ? "https://itunes.apple.com/gb/app/forest-stay-focused/id866450515?mt=8"
        : "https://play.google.com/store/apps/details?id=cc.forestapp&hl=en_GB"
  }
}
