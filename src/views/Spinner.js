import { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as r from "ramda" //eslint-disable-line import/no-namespace
import styled, { createGlobalStyle } from "styled-components"

import {
  addStopBounceListener,
  removeStopBounceListener,
} from "../utils/preventBounce"

import { changeView } from "../state/actions/router"

import { AllSet, Name, Bot } from "."

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(78, 205, 196, 0.25);
  }
`

const _Container = styled.div.attrs({
  className: "flex flex-column justify-center items-center",
})`
  height: 100vh;
`

const nextView = previousView => {
  switch (previousView) {
    case "Recap":
      return AllSet

    case "NewGoalConfirmation":
      return Name

    default:
      return Bot
  }
}

class Spinner extends Component {
  componentDidMount() {
    const {
      changeView,
      router: { history },
    } = this.props

    const script = document.createElement("script")

    script.textContent = `!function(){function t(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}function i(t){this.element=t,this.animationId,this.start=null,this.init()}if(!window.requestAnimationFrame){var n=null;window.requestAnimationFrame=function(t,i){var e=(new Date).getTime();n||(n=e);var a=Math.max(0,16-(e-n)),o=window.setTimeout(function(){t(e+a)},a);return n=e+a,o}}i.prototype.init=function(){var t=this;this.animationId=window.requestAnimationFrame(t.triggerAnimation.bind(t))},i.prototype.reset=function(){var t=this;window.cancelAnimationFrame(t.animationId)},i.prototype.triggerAnimation=function(i){var n=this;this.start||(this.start=i);var e=i-this.start;900>e||(this.start=this.start+900),this.element.setAttribute("transform","rotate("+Math.min(900*t(e/900)/2.5,360)+" 32 32)");if(document.documentElement.contains(this.element))window.requestAnimationFrame(n.triggerAnimation.bind(n))};var e=document.getElementsByClassName("nc-loop_circle-03-64"),a=[];if(e)for(var o=0;e.length>o;o++)!function(t){a.push(new i(e[t]))}(o);document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?a.forEach(function(t){t.reset()}):a.forEach(function(t){t.init()})})}();`

    document.querySelector("#spinner").appendChild(script)

    setTimeout(() => {
      changeView(nextView(r.last(history)))
    }, Math.floor(Math.random() * 1000) + 1500)

    addStopBounceListener()
  }

  componentWillUnmount() {
    removeStopBounceListener()
  }

  //eslint-disable-next-line
  render() {
    return (
      <_Container>
        <GlobalStyle />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="164"
          viewBox="0 0 64 64"
        >
          <g className="nc-icon-wrapper" fill="#526476" id="spinner">
            <g
              className="nc-loop_circle-03-64"
              transform="rotate(318.8489049847354 32 32)"
            >
              <path
                opacity="0.4"
                fill="#526476"
                d="M32,64C14.35498,64,0,49.64453,0,32C0,14.35498,14.35498,0,32,0s32,14.35498,32,32 C64,49.64453,49.64502,64,32,64z M32,6C17.66357,6,6,17.66357,6,32c0,14.33691,11.66357,26,26,26s26-11.66309,26-26 C58,17.66357,46.33643,6,32,6z"
              />
              <path
                data-color="color-2"
                d="M64,32h-6C58,17.66357,46.33643,6,32,6V0C49.64502,0,64,14.35498,64,32z"
              />
            </g>
          </g>
        </svg>
      </_Container>
    )
  }
}

Spinner.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default connect(
  ({ router }) => ({ router }),
  { changeView }
)(Spinner)
