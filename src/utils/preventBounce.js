const preventDefault = e => e.preventDefault()

export const addStopBounceListener = () =>
  window.addEventListener("touchmove", preventDefault, {
    passive: false,
  })

export const removeStopBounceListener = () =>
  window.removeEventListener("touchmove", preventDefault, { passive: false })
