import { render } from './MyReact.js' // import the render function from MyReact
import Component from './Component.js' // imports Component from Component

let propCount = 0 // sets initial prop value

// adds the btn-prop click function that tally's up the propcount with each click
document.getElementById("btn-prop").addEventListener("click", () => {
  propCount++
  renderComponent()
})

function renderComponent() {
  render(
    Component, // renders the component
    { propCount }, // sets the initial prop count
    document.getElementById("root") // parent
  )
}

renderComponent()