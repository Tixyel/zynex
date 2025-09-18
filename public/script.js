/** @import from 'zynex' */

window.addEventListener('DOMContentLoaded', () => {
  if (window.Zynex) {
    console.log('Zynex is loaded.')
  }
})

window.addEventListener('my-event', (event) => {
  event.detail.foo
})
