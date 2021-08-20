export function render(component, prop, parent) {
  const output = component(props)
  parent.textContent = output
}